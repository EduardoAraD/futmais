import { useCallback, useState } from 'react'
import StarRating from 'react-native-star-rating-widget'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { ModalBase } from '../ModalBase'

import { styles } from './styles'
import { LineBackground } from '../LineBackground'
import theme from '../../theme'
import { Button } from '../Button'

interface ModalDefinedStarsProps {
  visible: boolean
  onClose(): void
  onUpdateStar(star: number): void
}

export function ModalDefinedStars({
  visible,
  onClose,
  onUpdateStar,
}: ModalDefinedStarsProps) {
  const [star, setStar] = useState(0)

  function handleUpdateValueStar(starValue: number) {
    setStar(starValue)
  }

  const handleConfirmadStar = useCallback(() => {
    onUpdateStar(star)
    onClose()
  }, [onClose, onUpdateStar, star])

  return (
    <ModalBase visible={visible} onClose={onClose}>
      <View style={styles.container}>
        <LineBackground color={theme.colors.gray[600]} />
        <TouchableOpacity style={styles.touchClose} onPress={onClose}>
          <Feather name="x" size={16} color={theme.colors.white} />
        </TouchableOpacity>
        
        <Text style={styles.title}>Definindo nota do NOME</Text>
        <View style={styles.content}>
          <View style={styles.statsView}>
            <Text style={styles.subtitle}>Gols</Text>
            <Text style={styles.value}>4</Text>
          </View>
          <View style={styles.statsView}>
            <Text style={styles.subtitle}>Assistência</Text>
            <Text style={styles.value}>4</Text>
          </View>
          <View style={styles.statsView}>
            <Text style={styles.subtitle}>Melhor do Racha</Text>
            <Text style={styles.value}>SIM</Text>
          </View>
          <View style={styles.statsView}>
            <Text style={styles.subtitle}>Pior do Racha</Text>
            <Text style={styles.value}>SIM</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <StarRating
            rating={star}
            onChange={handleUpdateValueStar}
            starSize={30}
          />
        </View>
        <Button style={{ height: 48, marginTop: 20 }} onPress={handleConfirmadStar}>
          <Button.Title>Definir Nota</Button.Title>
        </Button>
      </View>
    </ModalBase>
  )
}
