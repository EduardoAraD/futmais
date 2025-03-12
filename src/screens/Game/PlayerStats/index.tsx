import { useCallback, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import theme from "../../../theme";
import { styles } from "./styles";
import soccerBall from '../../../assets/soccerball.png'
import shoots from '../../../assets/shoots.png'

export function PlayersStats() {
  const [goal, setGoal] = useState(0)
  const [assist, setAssist] = useState(0)

  const handlePlusGoal = useCallback(() => {
    setGoal(state => state + 1)
  }, [])
  const handleMinusGoal = useCallback(() => {
    if(goal - 1 >= 0) {
      setGoal(state => state - 1)
    }
  }, [goal])
  const handlePlusAssist = useCallback(() => {
    setAssist(state => state + 1)
  }, [])
  const handleMinusAssist = useCallback(() => {
    if(assist - 1 >= 0) {
      setAssist(state => state - 1)
    }
  }, [assist])

  return (
    <View style={styles.container}>
      <Text style={styles.name} numberOfLines={1}>Nome</Text>
      <View style={styles.content}>
        <Image source={soccerBall} style={styles.image} />
        <Text style={styles.value}>{ goal }</Text>
        <View style={styles.action}>
          <TouchableOpacity activeOpacity={0.8} style={styles.touchPlus} onPress={handlePlusGoal}>
            <Feather name="plus" size={10} color={theme.colors.white} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.touchMinus} onPress={handleMinusGoal}>
            <Feather name="minus" size={10} color={theme.colors.white}  />
          </TouchableOpacity>
        </View>
        <Image source={shoots} style={styles.image} />
        <Text style={styles.value}>{ assist }</Text>
        <View style={styles.action}>
          <TouchableOpacity activeOpacity={0.8} style={styles.touchPlus} onPress={handlePlusAssist}>
            <Feather name="plus" size={10} color={theme.colors.white} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.touchMinus} onPress={handleMinusAssist}>
            <Feather name="minus" size={10} color={theme.colors.white}  />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}