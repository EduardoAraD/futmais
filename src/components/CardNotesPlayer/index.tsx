import { useCallback, useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import { ModalDefinedStars } from '../ModalDefinedStars'
import { Stars } from '../Stars'

import { styles } from './styles'

interface CardNotesProps {
  onUpdateStar(star: number): void
}

export function CardNotesPlayer({ onUpdateStar }: CardNotesProps) {
  const [showModal, setShowModal] = useState(false)
  const [star, setStar] = useState(0)

  const handleUpdateStars = useCallback(
    (value: number) => {
      setStar(value)
      onUpdateStar(value)
    },
    [onUpdateStar],
  )

  return (
    <>
      <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => setShowModal(true)}>
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>Nome</Text>
          <Stars note={star} hasAllStars={false} style={{ justifyContent: 'flex-end'}} />
        </View>
      </TouchableOpacity>
      <ModalDefinedStars
        visible={showModal}
        onClose={() => setShowModal(false)}
        onUpdateStar={handleUpdateStars}
      />
    </>
  )
}
