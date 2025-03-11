import { ScrollView, View } from "react-native";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { ClubView } from "./ClubView";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import theme from "../../theme";
import { styles } from "./styles";

export function PlayersToGame() {
  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <TouchBackWithTitle title="Escolha dos Jogadores" />
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.container}>
            <ClubView />
            <ClubView />
          </View>
        </ScrollView>
        <Button style={{ height: 48 }}>
          <Button.Title>Iniciar Jogo</Button.Title>
        </Button>
      </Background.Padding>
    </Background>
  )
}