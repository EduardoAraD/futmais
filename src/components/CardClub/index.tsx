import { Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from "./styles";
import theme from "../../theme";
import { Player } from "../../model/players";
import { useMemo } from "react";

interface Props {
  numberClub: number
  players: Player[]
}

export function CardClub({ numberClub , players }: Props) {
  const sumStarsPlayers = useMemo(() => {
    let sum = 0

    players.forEach(player => {
      sum += player.stars
    })
    return sum
  }, [players])

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Clube {numberClub}</Text>
        <View style={styles.starView}>
          <Text style={styles.valueTitle}>{sumStarsPlayers}</Text>
          <MaterialCommunityIcons name='star' color={theme.colors.yellow} size={18} />
        </View>
      </View>
      {players.map(item => (
        <View style={styles.content} key={item.id}>
          <Text style={styles.text}>{ item.name }</Text>
          <View style={styles.starView}>
            <Text style={styles.text}>{ item.stars }</Text>
            <MaterialCommunityIcons name='star' color={theme.colors.yellow} size={16} />
          </View>
        </View>
      ))}
      
    </View>
  )
}