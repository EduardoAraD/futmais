import { useCallback, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import theme from "../../theme";
import { styles } from "./styles";

type Option = 'players' | 'racha' | 'game'

export function Tab() {
  const [option, setOption] = useState<Option>('players')

  const handleSetOption = useCallback((value: Option) => {
    setOption(value)
  }, [])

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.touch}
        onPress={() => handleSetOption('players')}
      >
        <Feather name="users" size={16}
          color={option === 'players' ? theme.colors.white : theme.colors.gray[200]} />
        <Text style={option === 'players'? styles.textSelect : styles.text}>Jogaodores</Text>
      </Pressable>
      <Pressable
        style={styles.touch}
        onPress={() => handleSetOption('racha')}
      >
        <Feather name="users" size={16}
          color={option === 'racha' ? theme.colors.white : theme.colors.gray[200]} />
        <Text style={option === 'racha'? styles.textSelect : styles.text}>Racha</Text>
      </Pressable>
      <Pressable
        style={styles.touch}
        onPress={() => handleSetOption('game')}
      >
        <Feather name="users" size={16}
          color={option === 'game' ? theme.colors.white : theme.colors.gray[200]} />
        <Text style={option === 'game'? styles.textSelect : styles.text}>Jogo</Text>
      </Pressable>
    </View>
  )
}