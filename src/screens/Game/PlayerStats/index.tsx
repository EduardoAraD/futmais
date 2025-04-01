import { useCallback } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import theme from "../../../theme";
import { styles } from "./styles";
import soccerBall from '../../../assets/soccerball.png'
import shoots from '../../../assets/shoots.png'

interface Props {
  idPlayer: string
  name: string
  goal: number
  assistence: number
  onChangeStats: (data: { goal: number, assistence: number, idPlayer: string }) => void
}

export function PlayersStats({ idPlayer, name, goal, assistence, onChangeStats }: Props) {
  const handlePlusGoal = useCallback(() => {
    onChangeStats({ idPlayer, goal: goal + 1, assistence })
  }, [idPlayer, goal, assistence, onChangeStats])
  const handleMinusGoal = useCallback(() => {
    if(goal - 1 >= 0) {
      onChangeStats({ idPlayer, goal: goal - 1, assistence })
    }
  }, [idPlayer, goal, assistence, onChangeStats])
  const handlePlusAssist = useCallback(() => {
    onChangeStats({ idPlayer, goal, assistence: assistence + 1 })
  }, [idPlayer, goal, assistence, onChangeStats])
  const handleMinusAssist = useCallback(() => {
    if(assistence - 1 >= 0) {
      onChangeStats({ idPlayer, goal, assistence: assistence - 1 })
    }
  }, [idPlayer, goal, assistence, onChangeStats])

  return (
    <View style={styles.container}>
      <Text style={styles.name} numberOfLines={1}>{ name }</Text>
      <View style={styles.content}>
        <Image source={soccerBall} style={styles.image} />
        <Text style={styles.value}>{ goal }</Text>
        <View style={styles.action}>
          <TouchableOpacity activeOpacity={0.8} style={styles.touchMinus} onPress={handleMinusGoal}>
            <Feather name="minus" size={10} color={theme.colors.white}  />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.touchPlus} onPress={handlePlusGoal}>
            <Feather name="plus" size={10} color={theme.colors.white} />
          </TouchableOpacity>
        </View>
        <View style={{ width: 7 }} />
        <Image source={shoots} style={styles.image} />
        <Text style={styles.value}>{ assistence }</Text>
        <View style={styles.action}>
          <TouchableOpacity activeOpacity={0.8} style={styles.touchMinus} onPress={handleMinusAssist}>
            <Feather name="minus" size={10} color={theme.colors.white}  />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.touchPlus} onPress={handlePlusAssist}>
            <Feather name="plus" size={10} color={theme.colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
