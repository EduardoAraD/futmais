import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppRoutesNavigationProps } from "../../routes/app.routes";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";

import theme from '../../theme'
import { styles } from "./styles";

export function Init() {
  const { navigate } = useNavigation<AppRoutesNavigationProps>()

  function handleGoHome() {
    navigate('home')
  }
  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <View style={styles.container}>
          <View style={{ height: 200, width: 200, backgroundColor: 'white' }} />
          <Button onPress={handleGoHome}>
            <Button.Title>Continuar</Button.Title>
          </Button>
        </View>
      </Background.Padding>
    </Background>
  )
}