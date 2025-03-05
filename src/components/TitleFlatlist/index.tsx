import { Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
  title: string
  value: number
}

export function TitleFlatlist({ title, value }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textFlat}>{ title }</Text>
      <Text style={styles.textFlat}>{ value }</Text>
    </View>
  )
}
