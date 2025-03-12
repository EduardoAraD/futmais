import { Text, View } from "react-native";

import { Stars } from "../Stars";

import { styles } from "./styles";

interface Props {
  name: string
  value: string | number
  star?: number
}

export function LineStats({ name, value, star = -1 }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ name }</Text>
      { star === -1 ? (
        <View style={styles.viewValue}>
          <Text style={styles.text}>{ value }</Text>
        </View>
      ) : (
        <Stars style={{ justifyContent: 'flex-end' }} hasAllStars={false} note={star} />
      )}
    </View>
  )
}