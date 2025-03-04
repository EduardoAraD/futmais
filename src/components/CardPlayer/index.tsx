import { useCallback } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'

import { PlayerRoutesProps } from "../../routes/routesStack/player.routes";

import theme from "../../theme";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  name: string
}

export function CardPlayer({ name, ...rest }: Props) {
  const { navigate } = useNavigation<PlayerRoutesProps>()

  const handleGoDetailsPlayer = useCallback(() => {
    navigate('detailsPlayer')
  }, [])

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={handleGoDetailsPlayer}
    >
      <Text style={styles.text}>{name}</Text>
      <Feather
        name="chevron-right"
        size={20}
        color={theme.colors.white}
      />
    </TouchableOpacity>
  )
}