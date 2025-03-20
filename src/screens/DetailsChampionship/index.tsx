import { useCallback, useEffect, useMemo, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";

import { useChampionship } from "../../hook/useChampionship";

import { ChampionshipComplete, ChampionshipResume, emptyChampionship } from "../../model/chempionship";
import { Club } from "../../model/club";
import { Player, PlayerWithClub } from "../../model/players";
import { Background } from "../../components/Background";
import { InformationDetailsChampionship } from "./Information";
import { OptionLine } from "../../components/OptionLine";
import { PlayersDetailsChampionship } from "./Players";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import { addPlayersReserveChampionshipServices, getChampionshipCompleteServices } from "../../services/championship";
import { getAllPlayersServices } from "../../services/players";
import theme from "../../theme";

export interface DetailsChampionshipRouteParams {
  idChampionship: string
}
type ParamList = {
  Details: DetailsChampionshipRouteParams
}

export function DetailsChampionship() {
  const { idChampionship } = useRoute<RouteProp<ParamList, 'Details'>>().params
  const { createChampionship } = useChampionship()

  const options: string[] = ['Informações', 'Jogadores']
  const [option, setOption] = useState(options[0])
  const [allPlayers, setAllPlayers] = useState<Player[]>([])
  const [championship, setChampionship] = useState<ChampionshipResume>(emptyChampionship)
  const [players, setPlayers] = useState<PlayerWithClub[]>([])
  const [playersReserve, setPlayersReserve] = useState<Player[]>([])

  const addPlayersReserve = useCallback((listPlayers: Player[]) => {
    setPlayersReserve(state => [...state, ...listPlayers])
    addPlayersReserveChampionshipServices({ newPlayers: listPlayers, idChampionship })
  }, [idChampionship])

  const loadChampionship = useCallback(async () => {
    const championshipResponse = await getChampionshipCompleteServices({ idChampionship })
    if(championshipResponse !== undefined) {
      const listPlayers = await getAllPlayersServices()
      setAllPlayers(listPlayers)
      setPlayers(championshipResponse.playersClub)
      setPlayersReserve(championshipResponse.playersReserve)
      
      const playersReserveClub: PlayerWithClub[] = championshipResponse.playersReserve.map(
        item => ({ ...item, clubIndex: -1 })
      )
      const championshipComplete: ChampionshipComplete = {
        id: idChampionship,
        date: championshipResponse.date,
        status: championshipResponse.status,
        qtdPlayersForClub: championshipResponse.qtdPlayersForClub,
        players: championshipResponse.playersClub,
        playersReserve: playersReserveClub,
        stats: championshipResponse.stats,
      }

      setChampionship({
        id: championshipComplete.id,
        date: championshipComplete.date,
        status: championshipComplete.status,
        qtdPlayersForClub: championshipComplete.qtdPlayersForClub,
      })
      createChampionship(championshipComplete)
    }
  }, [idChampionship])

  useEffect(() => {
    loadChampionship()
  }, [loadChampionship])

  const allPlayersChampionship: PlayerWithClub[] = useMemo(() => {
    return [...players,...playersReserve.map(item => ({...item, clubIndex: -1 }))]
  }, [players, playersReserve])

  const playersModal = useMemo(() => {
    const filterPlayers = allPlayers.filter(player => {
      const find = allPlayersChampionship.find(item => item.id === player.id)

      return find === undefined
    })

    return filterPlayers
  }, [allPlayers, allPlayersChampionship])

  const clubs: Club[] = useMemo(() => {
    let thanId = 0
    players.forEach(item => {
      if(thanId < item.clubIndex) { thanId = item.clubIndex }
    })
    const listClubs: Club[] = []
    Array.from({ length: thanId + 1 }).forEach(() => {
      listClubs.push({ players: [] })
    })
    players.forEach(item => {
      listClubs[item.clubIndex].players.push(item)
    })

    return listClubs
  }, [players])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <TouchBackWithTitle title={`Racha - ${new Date(championship.date).toLocaleDateString()}`} />
        <OptionLine
          options={options}
          optionSelected={option}
          onSelected={setOption}
        />
        {option === 'Jogadores' ? (
          <PlayersDetailsChampionship
            players={players}
            playersReserve={playersReserve}
            playersToModal={playersModal}
            onConfirmPlayers={addPlayersReserve}
          />
        ) : (
          <InformationDetailsChampionship clubs={clubs} />
        )}
      </Background.Padding>
    </Background>
  )
}
