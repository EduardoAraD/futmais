import { useCallback } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ChampionshipRoutesProps } from "../../../routes/routesStack/championship.routes";

import { Club } from "../../../model/club";
import { Button } from "../../../components/Button";
import { CardClub } from "../../../components/CardClub";

import { styles } from "./styles";

interface Props {
  clubs: Club[]
}

export function InformationDetailsChampionship({ clubs }: Props) {
  const { navigate } = useNavigation<ChampionshipRoutesProps>()

  const handleGoPlayersToGame = useCallback(() => {
    navigate('playersGame')
  }, [])
  const handleGoNotesPlayers = useCallback(() => {
    navigate('notesPlayers')
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.flat}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentScroll}>
          {clubs.map((item, index) => (
            <CardClub
              key={`${item.players.length}-${index}`}
              numberClub={index + 1}
              players={item.players}
            />
          ))}
        </View>
      </ScrollView>
      <Button style={{ height: 48 }} onPress={handleGoPlayersToGame}>
        <Button.Title>Iniciar Jogo</Button.Title>
      </Button>
      <Button style={{ height: 48 }} onPress={handleGoNotesPlayers}>
        <Button.Title>Finalizar Jogo</Button.Title>
      </Button>
    </View>
  )
}