import { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { ChampionshipRoutesProps } from "../../routes/routesStack/championship.routes";

import { Club } from "../../model/club";
import { Player } from "../../model/players";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { CardClub } from "../../components/CardClub";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import { createNewChampionshipServices } from "../../services/championship";
import { sortClubsByPlayers } from "../../utils/sortClubs";
import theme from "../../theme";
import { styles } from "./styles";

export interface PrizeDownRouteParams {
  qtdPlayersForClub: number
  players: Player[]
}

type ParamList = {
  Prize: PrizeDownRouteParams
}

export function PrizeDown() {
  const { navigate } = useNavigation<ChampionshipRoutesProps>()
  const { qtdPlayersForClub, players } = useRoute<RouteProp<ParamList, 'Prize'>>().params
  const [clubs, setClubs] = useState<Club[]>([])
  const [loadingCreateRacha, setLoadingCreateRacha] = useState(false)

  const handleCreateRacha = useCallback(async () => {
    setLoadingCreateRacha(true)
    await createNewChampionshipServices({ clubs, qtdPlayersForClub })
    setLoadingCreateRacha(false)

    navigate('championship')
  }, [clubs, qtdPlayersForClub]);

  const sortPlayers = useCallback(() => {
    const listClubs = sortClubsByPlayers({ players, playersForClub: qtdPlayersForClub })

    setClubs(listClubs)
  }, [players, qtdPlayersForClub])

  useEffect(() => {
    sortPlayers()
  }, [sortPlayers])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <TouchBackWithTitle title="Sorteio de Times" />
        <FlatList
          contentContainerStyle={styles.flat}
          showsVerticalScrollIndicator={false}
          data={clubs}
          keyExtractor={(item, index) => `${item.players.length}-${index}`}
          renderItem={({ item, index }) => (
            <CardClub
              numberClub={index + 1}
              players={item.players}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
        <View style={styles.options}>
          <Button style={{ flex: 2, height: 48 }} type="SECUNDARY" onPress={sortPlayers}>
            <Button.Title type="SECUNDARY">Resortear</Button.Title>
          </Button>
          <Button
            style={{ flex: 3, height: 48 }}
            onPress={handleCreateRacha}
            isLoading={loadingCreateRacha}
          >
            <Button.Title>Criar Racha</Button.Title>
          </Button>
        </View>
      </Background.Padding>
    </Background>
  )
}
