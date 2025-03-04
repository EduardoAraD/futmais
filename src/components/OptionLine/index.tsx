import { useCallback } from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";

interface Props {
  optionSelected: string
  options: string[]
  onSelected: (value: string) => void
}
export function OptionLine({ optionSelected, options, onSelected }: Props) {
  const handleSetOption = useCallback((value: string) => {
    onSelected(value)
  }, [])

  return (
    <View style={styles.container}>
      {options.map(item => (
        <Pressable key={item} onPress={() => handleSetOption(item)}>
          <Text style={item === optionSelected ? styles.nameSelected : styles.name}>
            { item }
          </Text>
        </Pressable>
      ))}
    </View>
  )
}
