import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from '@expo/vector-icons'

import { StatusChampionship } from "../../model/chempionship";

import theme from "../../theme";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  name: string
  status: StatusChampionship
  onPress: () => void
}

export function CardFlatlist({ name, onPress, style, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{name}</Text>
      <Feather
        name="chevron-right"
        size={20}
        color={theme.colors.white}
      />
    </TouchableOpacity>
  )
}