import { Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from '@expo/vector-icons';

import theme from "../../theme";
import { styles } from "./styles";
import championshipImg from '../../assets/racha.png'

interface Props extends TouchableOpacityProps {
  icon: keyof typeof Feather.glyphMap | 'championship'
}

export function TouchPlusScreen({ icon, style, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.touch, style]}
      {...rest}
    >
      {icon === 'championship' ? (
        <Image
          style={styles.image}
          source={championshipImg}
          alt="Racha"
        />
      ) : (
      <Feather
        name={icon}
        size={40}
        color={theme.colors.white}
      />
      )}
    </TouchableOpacity>
  )
}
