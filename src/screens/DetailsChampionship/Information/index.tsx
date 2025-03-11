import { useCallback } from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ChampionshipRoutesProps } from "../../../routes/routesStack/championship.routes";
import { Button } from "../../../components/Button";
import { CardClub } from "../../../components/CardClub";

import { styles } from "./styles";

export function InformationDetailsChampionship() {
  const { navigate } = useNavigation<ChampionshipRoutesProps>()
  const list = ['1', '2', '3', '4']

  const handleGoPlayersToGame = useCallback(() => {
    navigate('playersGame')
  }, [])
  const handleGoNotesPlayers = useCallback(() => {
    navigate('notesPlayers')
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flat}
        showsVerticalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <CardClub
            numberClub={index + 1}
            players={list}
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