import { ScrollView, Text, View } from "react-native";

import { Button } from "../../../components/Button";

import { styles } from "./styles";

export function PlayersDetailsChampionship() {
  return (
    <View style={styles.container}>
      <Button style={{ height: 40 }}>
        <Button.Title>Adicionar jogadores penetras</Button.Title>
      </Button>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>Jogadores do racha</Text>
        <View style={styles.playerView}>
          <Text style={styles.player}>PLAYER</Text>
          <Text style={styles.textClub}>T1</Text>
        </View>

        <Text style={styles.subtitle}>Jogadores do racha</Text>
        <View style={styles.playerView}>
          <Text style={styles.player}>PLAYER</Text>
        </View>
      </ScrollView>
    </View>
  )
}