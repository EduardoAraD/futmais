import { useCallback, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useChampionship } from "../../hook/useChampionship";
import { TabNavigatorRoutesProps } from "../../routes/tab.routes";

import { GameCurrent } from "../../model/gameCurrent";
import { Player, PlayerInGame, PlayerWithClub } from "../../model/players";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { ClubView } from "./ClubView";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import theme from "../../theme";
import { styles } from "./styles";

export function PlayersToGame() {
  const { navigate } = useNavigation<TabNavigatorRoutesProps>()
  const { createGameCurrent, championship } = useChampionship()

  const [playersClub1, setPlayersClub1] = useState<Player[]>([])
  const [playersClub2, setPlayersClub2] = useState<Player[]>([])

  const { players, qtdPlayersToClub }: { players: PlayerWithClub[], qtdPlayersToClub: number } = useMemo(() => {
    if(championship !== null) {
      return {
        players: [...championship.players, ...championship.playersReserve],
        qtdPlayersToClub: championship.qtdPlayersForClub,
      }
    }
    return {
      players: [],
      qtdPlayersToClub: 0,
    }
  }, [championship])

  const handleAddClub1 = useCallback((playersChoose: Player[]) => {
    setPlayersClub1(playersChoose)
    setPlayersClub2(state => state.filter(item =>
      playersChoose.find(player => player.id === item.id) === undefined
    ))
  }, [])
  const handleAddClub2 = useCallback((playersChoose: Player[]) => {
    setPlayersClub2(playersChoose)
    setPlayersClub1(state => state.filter(item =>
      playersChoose.find(player => player.id === item.id) === undefined
    ))
  }, [])

  const handleCreateGame = useCallback(() => {
    const club1: PlayerInGame[] = playersClub1.map(item => ({
      player: item, goal: 0, assistence: 0, ownGoal: 0,
    }))
    const club2: PlayerInGame[] = playersClub2.map(item => ({
      player: item, goal: 0, assistence: 0, ownGoal: 0,
    }))
    const gameCurrent: GameCurrent = {
      club1,
      club2,
    }

    createGameCurrent(gameCurrent)
    navigate('currentGame')
  }, [playersClub1, playersClub2])

  const listClubIndex = useMemo(() => {
    const list: number[] = []
    players.forEach(player => {
      const find = list.find(item => item === player.clubIndex)
      if(find === undefined) {
        list.push(player.clubIndex)
      }
    })

    return list.filter(item => item !== -1)
  }, [players])

  const disabledClub = useMemo(() => {
    return !(qtdPlayersToClub === playersClub1.length && qtdPlayersToClub === playersClub2.length)
  }, [qtdPlayersToClub, playersClub1.length, playersClub2.length])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <TouchBackWithTitle title="Escolha dos Jogadores" />
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.container}>
            <ClubView
              title="Time 1"
              players={playersClub1}
              playersAvailable={players}
              qtdPlayersForClub={qtdPlayersToClub}
              clubs={listClubIndex}
              onSaveClub={handleAddClub1}
            />
            <ClubView
              title="Time 2"
              players={playersClub2}
              playersAvailable={players}
              qtdPlayersForClub={qtdPlayersToClub}
              clubs={listClubIndex}
              onSaveClub={handleAddClub2}
            />
          </View>
        </ScrollView>
        <Button style={{ height: 48 }} disabled={disabledClub} onPress={handleCreateGame}>
          <Button.Title>Iniciar Jogo</Button.Title>
        </Button>
      </Background.Padding>
    </Background>
  )
}