import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { Stars } from "../Stars";

interface Props extends TouchableOpacityProps {
  name: string
  selected: boolean
  stars: number
}

export function CardSelectPlayerStar({
  name, selected, stars, style, ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style, selected && styles.select]}
      {...rest}
    >
      <Text style={styles.text}>{ name }</Text>
      <Stars style={{ justifyContent: 'flex-end' }} note={stars} hasAllStars={false} />
    </TouchableOpacity>
  )
}