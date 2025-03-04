import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'

import theme from "../../theme";
import { styles } from "./styles";

export function TouchBack() {
  const { goBack } = useNavigation()
  
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={goBack}
      style={styles.touch}
    >
      <Feather name="chevron-left" size={32} color={theme.colors.white} />
    </TouchableOpacity>
  )
}