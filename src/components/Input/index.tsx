import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import theme from "../../theme";
import { useCallback, useState } from "react";
import { Feather } from '@expo/vector-icons'

export interface InputProps extends TextInputProps {
  icon?: keyof typeof Feather.glyphMap
}

export function Input({ icon = undefined, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleOnInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleOutInputFocus = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <View style={[styles.container, isFocused && styles.focus]}>
      {icon !== undefined && (
        <Feather size={24} color={theme.colors.white} name={icon} />
      )}
      <TextInput
        placeholderTextColor={theme.colors.gray[200]}
        style={styles.input}
        onFocus={handleOnInputFocus}
        onBlur={handleOutInputFocus}
        {...rest}
      />
    </View>
  )
}