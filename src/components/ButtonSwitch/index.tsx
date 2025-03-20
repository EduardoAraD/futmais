import { Switch, TouchableOpacity, View } from "react-native";
import theme from "../../theme";

interface Props {
  // disabled: boolean
  value: boolean
  onChange: (value: boolean) => void
}

export function ButtonSwitch({ value, onChange }: Props) {
  return (
    <Switch
      trackColor={{true: theme.colors.gray[300], false: theme.colors.gray[400] }}
      thumbColor={value ? theme.colors.primary : theme.colors.gray[300]}
      ios_backgroundColor={theme.colors.gray[400]}
      onValueChange={onChange}
      value={value}
    />
  )
}