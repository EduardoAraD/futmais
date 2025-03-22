import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { Stars } from "../Stars";

import theme from "../../theme";
import { styles } from "./styles";

interface Props {
  name: string
  value: number
  star?: number
  onChangeValue?: (value: number) => void
}

export function LineStats({ name, value, star = -1, onChangeValue = undefined }: Props) {
  const handleMinusValue = useCallback(() => {
    if(onChangeValue !== undefined) {
      const newValue = value <= 0 ? value : value - 1
      onChangeValue(newValue)
    }
  }, [onChangeValue, value])

  const handlePlusValue = useCallback(() => {
    if(onChangeValue !== undefined) {
      onChangeValue(value + 1)
    }
  }, [onChangeValue, value])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ name }</Text>
      <View style={styles.content}>
        {onChangeValue !== undefined && (
          <TouchableOpacity
            onPress={handleMinusValue}
            activeOpacity={0.8}
            style={[styles.touch, styles.touchMinus]}>
            <Feather name="minus" size={20} color={theme.colors.white} />
          </TouchableOpacity>
        )}
        { star === -1 ? (
          <View style={styles.viewValue}>
            <Text style={styles.text}>{ value }</Text>
          </View>
        ) : (
          <Stars style={{ justifyContent: 'flex-end' }} hasAllStars={false} note={star} />
        )}
        {onChangeValue !== undefined && (
          <TouchableOpacity
            onPress={handlePlusValue}
            activeOpacity={0.8}
            style={[styles.touch, styles.touchPlus]}>
            <Feather name="plus" size={20} color={theme.colors.white} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}