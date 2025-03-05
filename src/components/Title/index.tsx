import { Text } from "react-native";
import { styles } from './styles'

interface Props {
  title: string
}

export function Title({ title }: Props) {
  return (
    <Text style={styles.title}>{ title }</Text>
  )
}