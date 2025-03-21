import { useCallback } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Button } from '../Button'
import { ModalBase } from '../ModalBase'

import theme from '../../theme'
import { styles } from './styles'

interface ModalConfirmedProps {
  visible: boolean
  onClose(): void
  title: string
  text?: string
  dualOption?: boolean
  onConfirmad(): void
}

export function ModalConfirmad({
  visible,
  onClose,
  title,
  text = '',
  dualOption = false,
  onConfirmad,
}: ModalConfirmedProps) {
  const handleConfirmed = useCallback(() => {
    onConfirmad()
    onClose()
  }, [onConfirmad, onClose])

  return (
    <ModalBase visible={visible} onClose={onClose}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchClose} onPress={onClose}>
          <Feather name="x" size={16} color={theme.colors.white} />
        </TouchableOpacity>

        <Text style={styles.title}>{ title }</Text>

        {text && <Text style={styles.text}>{text}</Text>}

        <View style={styles.actions}>
          {dualOption && (
            <Button type='SECUNDARY' style={{ flex: 1, height: 48 }} onPress={onClose}>
              <Button.Title type='SECUNDARY'>Cancelar</Button.Title>
            </Button>
          )}
          <Button style={{ backgroundColor: theme.colors.green, flex: 1, height: 48 }} onPress={handleConfirmed}>
            <Button.Title>Confirmar</Button.Title>
          </Button>
        </View>
      </View>
    </ModalBase>
  )
}
