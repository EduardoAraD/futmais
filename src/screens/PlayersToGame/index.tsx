import { useCallback, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { Player, PlayerWithClub } from "../../model/players";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { ClubView } from "./ClubView";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import theme from "../../theme";
import { styles } from "./styles";

export interface PlayersToGameRouteParams {
  players: PlayerWithClub[]
  qtdPlayersToClub: number
}
type ParamList = {
  Players: PlayersToGameRouteParams
}

export function PlayersToGame() {
  const { players, qtdPlayersToClub } = useRoute<RouteProp<ParamList, 'Players'>>().params
  const [playersClub1, setPlayersClub1] = useState<Player[]>([])
  const [playersClub2, setPlayersClub2] = useState<Player[]>([])

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
        <Button style={{ height: 48 }}>
          <Button.Title>Iniciar Jogo</Button.Title>
        </Button>
      </Background.Padding>
    </Background>
  )
}