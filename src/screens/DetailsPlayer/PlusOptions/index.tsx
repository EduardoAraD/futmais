import { View } from "react-native";

import { Button } from "../../../components/Button";

import theme from "../../../theme";
import { styles } from "./styles";

export function PlusOptions() {
  return (
    <View style={styles.container}>
      <Button>
        <Button.Title>Editar Jogador</Button.Title>
      </Button>
      <Button style={{ backgroundColor: theme.colors.gray[500]}}>
        <Button.Title>Desativar Jogador</Button.Title>
      </Button>
    </View>
  )
}