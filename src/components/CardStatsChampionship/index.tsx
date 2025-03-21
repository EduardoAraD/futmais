import { useCallback, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { Stars } from "../Stars";

import theme from "../../theme";
import { styles } from "./styles";
import soccerBall from '../../assets/soccerball.png'
import shoots from '../../assets/shoots.png'

interface Props {
  name: string
  position: number
  stars: number
  goal: number
  assistence: number
  games: number
}

export function CardStatsChampionship({
  name, position, stars, games, goal, assistence
}: Props) {
  const [hasOpenCard, setHasOpenCard] = useState(false)

  const handleOpenCard = useCallback(() => {
    setHasOpenCard(state => !state)
  }, [])

  return (
    <Pressable style={styles.container} onPress={handleOpenCard}>
      <View style={styles.info}>
        <Feather
          name={hasOpenCard ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={theme.colors.white}
        />
        <Text style={styles.name}>{position}. {name}</Text>
        <Stars note={stars} hasAllStars={false} />
      </View>
      {hasOpenCard && (
        <View style={styles.line} />
      )}
      {hasOpenCard && (
        <View style={styles.stats}>
          <View style={styles.itemStats}>
            <Image source={soccerBall} style={styles.image} />
            <Text style={styles.textStats}>{ goal }</Text>
          </View>
          <View style={styles.itemStats}>
            <Image source={shoots} style={styles.image} />
            <Text style={styles.textStats}>{ assistence }</Text>
          </View>
          <View style={styles.itemStats}>
            <Text style={styles.textStats}>J</Text>
            <Text style={styles.textStats}>{ games }</Text>
          </View>
        </View>
      )}
    </Pressable>
  )
}