import { FlatList, View } from "react-native";
import { Background } from "../../components/Background";
import theme from "../../theme";
import { styles } from "./styles";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";
import { CardClub } from "../../components/CardClub";
import { Button } from "../../components/Button";

export function PrizeDown() {
  const list = ['1', '2', '3', '4']

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <TouchBackWithTitle title="Sorteio de Times" />
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
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
        <View style={styles.options}>
          <Button style={{ flex: 2, height: 48 }} type="SECUNDARY">
            <Button.Title type="SECUNDARY">Resortear</Button.Title>
          </Button>
          <Button style={{ flex: 3, height: 48 }}>
            <Button.Title>Criar Racha</Button.Title>
          </Button>
        </View>
      </Background.Padding>
    </Background>
  )
}