import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from '@expo/vector-icons';

import theme from "../../theme";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  icon: keyof typeof Feather.glyphMap
}

export function TouchPlusScreen({ icon, style, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.touch, style]}
      {...rest}
    >
      <Feather
        name={icon}
        size={40}
        color={theme.colors.white}
      />
    </TouchableOpacity>
  )
}
