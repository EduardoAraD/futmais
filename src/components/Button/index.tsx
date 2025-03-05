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

type OptionButtonType = 'PRIMARY' | 'SECUNDARY'
type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
  type?: OptionButtonType
}

function Button({ children, type = 'PRIMARY', style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, type === 'SECUNDARY' && styles.containerSecundary, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      testID="touch"
      {...rest}
    >
      {isLoading ?
        <ActivityIndicator size='small'
          color={type === 'PRIMARY' ? theme.colors.gray[100] : theme.colors.gray[600]}
        />
        : children
      }
    </TouchableOpacity>
  )
}

interface TitleProps extends TextProps {
  children: React.ReactNode
  type?: OptionButtonType
}

function Title({ children, type, ...rest }: TitleProps) {
  return (
    <Text
      style={[styles.text, type === 'SECUNDARY' && styles.textSecundary]}
      {...rest}
    >
      {children}
    </Text>
  )
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