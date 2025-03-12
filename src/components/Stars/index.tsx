import { View, ViewProps } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from "./styles";
import theme from "../../theme";

type OptionStar = 'star' | 'star-outline' | 'star-half-full'
interface Props extends ViewProps {
  note: number
  hasAllStars?: boolean
}

export function Stars({ note, hasAllStars = true, style, ...rest }: Props) {
  const arrayNumberStar = hasAllStars ?
    [0, 1, 2, 3, 4] :
    Array.from({ length: Math.floor(note) })

  function handleNote(grau: number): OptionStar {
    if (note > grau + 0.75) return 'star'
    else if (note < grau + 0.25) return 'star-outline'
    else return 'star-half-full'
  }

  return (
    <View style={[styles.container, style]} {...rest}>
      {arrayNumberStar.length === 0 && (
        <MaterialCommunityIcons
          name='star-outline'
          color={theme.colors.yellow}
          size={24}
        />
      )}
      {arrayNumberStar.map((_, index) => (
        <MaterialCommunityIcons
          key={index.toString()}
          name={handleNote(index)}
          color={theme.colors.yellow}
          size={24}
        />
      ))}
    </View>
  )
}