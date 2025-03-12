import { useCallback, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../../components/Button";

import { changeDisablePlayerService } from "../../../services/players";
import theme from "../../../theme";
import { styles } from "./styles";

interface Props {
  idPlayer: string
  disabled: boolean
  onEditPlayer: () => void
}

export function PlusOptions({ idPlayer, disabled, onEditPlayer }: Props) {
  const { goBack } = useNavigation()

  const [loading, setLoading] = useState(false)

  const handleChangeDisabledPlayer = useCallback(async () => {
    setLoading(true)
    await changeDisablePlayerService({ idPlayer })
    setLoading(false)

    goBack()
  }, [idPlayer])

  const textButton = disabled ? 'Ativar Jogador' : 'Desativar Jogador'

  return (
    <View style={styles.container}>
      <Button onPress={onEditPlayer}>
        <Button.Title>Editar Jogador</Button.Title>
      </Button>
      <Button
        isLoading={loading}
        onPress={handleChangeDisabledPlayer}
        type={disabled ? 'SECUNDARY' : 'PRIMARY'}
        style={!disabled && { backgroundColor: theme.colors.gray[500]}}>
        <Button.Title
          type={disabled ? 'SECUNDARY' : 'PRIMARY'}
        >{ textButton }</Button.Title>
      </Button>
    </View>
  )
}