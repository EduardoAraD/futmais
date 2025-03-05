import { Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from "./styles";
import theme from "../../theme";

interface Props {
  numberClub: number
  players: string[]
}

export function CardClub({ numberClub , players }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Clube {numberClub}</Text>
        <View style={styles.starView}>
          <Text style={styles.valueTitle}>5</Text>
          <MaterialCommunityIcons name='star' color={theme.colors.yellow} size={18} />
        </View>
      </View>
      {players.map(item => (
        <View style={styles.content} key={item}>
          <Text style={styles.text}>{ item }</Text>
          <View style={styles.starView}>
            <Text style={styles.text}>5</Text>
            <MaterialCommunityIcons name='star' color={theme.colors.yellow} size={16} />
          </View>
        </View>
      ))}
      
    </View>
  )
}