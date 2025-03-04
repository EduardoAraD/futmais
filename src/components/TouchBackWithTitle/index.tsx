import { Text, View } from "react-native";
import { TouchBack } from "../TouchBack";
import { styles } from "./styles";

interface Props {
  title: string
}

export function TouchBackWithTitle({ title }: Props) {
  return (
    <View style={styles.container}>
      <TouchBack />
      <Text style={styles.title}>{ title }</Text>
    </View>
  )
}