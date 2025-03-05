import { ReactNode } from 'react'
import { Modal, ModalProps, View } from 'react-native'

import { styles } from './styles'

interface ModalBaseProps extends ModalProps {
  visible: boolean
  onClose(): void
  children: ReactNode
}

export function ModalBase({
  onClose,
  children,
  visible,
  ...rest
}: ModalBaseProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      {...rest}
    >
      <View style={styles.container}>{children}</View>
    </Modal>
  )
}
