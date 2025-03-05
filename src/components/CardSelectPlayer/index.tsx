import { Pressable, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import theme from "../../theme";
import { styles } from "./styles";

interface Props {
  name: string
  onPressTrash: () => void
}
export function CardSelectPlayer({ name, onPressTrash }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ name }</Text>
      <Pressable style={styles.touch} onPress={onPressTrash}>
        <Feather name="trash-2" size={20} color={theme.colors.white} />
      </Pressable>
    </View>
  )
}