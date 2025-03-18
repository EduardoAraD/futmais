import { useCallback } from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ChampionshipRoutesProps } from "../../../routes/routesStack/championship.routes";
import { Club } from "../../../model/club";
import { PlayerWithClub } from "../../../model/players";
import { Button } from "../../../components/Button";
import { CardClub } from "../../../components/CardClub";

import { styles } from "./styles";

interface Props {
  clubs: Club[]
  players: PlayerWithClub[]
  qtdPlayersToClub: number
}

export function InformationDetailsChampionship({ clubs, players }: Props) {
  const { navigate } = useNavigation<ChampionshipRoutesProps>()

  const handleGoPlayersToGame = useCallback(() => {
    navigate('playersGame', { players, qtdPlayersToClub: 2, })
  }, [players])
  const handleGoNotesPlayers = useCallback(() => {
    navigate('notesPlayers')
  }, [])

  return (
    <View style={styles.container}>
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
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
      <Button style={{ height: 48 }} onPress={handleGoPlayersToGame}>
        <Button.Title>Iniciar Jogo</Button.Title>
      </Button>
      <Button style={{ height: 48 }} onPress={handleGoNotesPlayers}>
        <Button.Title>Finalizar Jogo</Button.Title>
      </Button>
    </View>
  )
}