import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import theme from '../../theme'

interface Props {
  color: string
}

export function LineBackground({ color }: Props) {
  return (
    <View style={styles.content}>
      <LinearGradient
        colors={[theme.colors.white, color]}
        style={styles.line}
      />
      <LinearGradient
        colors={[theme.colors.white, color]}
        style={styles.line}
      />
      <LinearGradient
        colors={[theme.colors.white, color]}
        style={styles.line}
      />
      <LinearGradient
        colors={[theme.colors.white, color]}
        style={styles.line}
      />
    </View>
  )
}