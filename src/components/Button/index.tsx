import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
  ActivityIndicator,
} from "react-native";

import { styles } from "./styles";
import theme from '../../theme'
// import { IconProps as TablerIconProps } from '@tabler/icons-react-native'
// import { s } from "./styles";
// import { colors } from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      testID="touch"
      {...rest}
    >
      {isLoading ?
        <ActivityIndicator size='small' color={theme.colors.gray[100]} />
        : children
      }
    </TouchableOpacity>
  )
}

function Title({ children, ...rest }: TextProps) {
  return <Text style={styles.text}{...rest}>{children}</Text>
}

// type IconProps = {
//   icon: React.ComponentType<TablerIconProps>
// }
// function Icon({icon: Icon}: IconProps) {
//   return <Icon size={24} color={colors.gray[100]} />
// }

Button.Title = Title
// Button.Icon = Icon

export { Button }