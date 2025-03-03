import { Text, View } from "react-native";
import { Background } from "../../components/Background";
import theme from '../../theme'
import { styles } from "./styles";
import { Button } from "../../components/Button";

export function Init() {
  return (
    <Background color={theme.colors.gray[700]}>
      <View style={styles.container}>
        <View style={{ height: 200, width: 200, backgroundColor: 'white' }} />
        <Button>
          <Button.Title>Continuar</Button.Title>
        </Button>
      </View>
    </Background>
  )
}