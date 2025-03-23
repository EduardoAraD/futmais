import { useCallback, useEffect, useState } from 'react'
import StarRating from 'react-native-star-rating-widget'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Stats } from '../../model/stats'
import { Button } from '../Button'
import { ButtonSwitch } from '../ButtonSwitch'
import { LineBackground } from '../LineBackground'
import { ModalBase } from '../ModalBase'

import { styles } from './styles'
import theme from '../../theme'

interface ModalDefinedStarsProps {
  visible: boolean
  onClose(): void
  stats: Stats
  onUpdateData(data: { star: number, mvp: boolean, pp: boolean }): void
  namePlayer: string
}

export function ModalDefinedStars({
  visible,
  onClose,
  stats,
  onUpdateData,
  namePlayer
}: ModalDefinedStarsProps) {
  const [star, setStar] = useState(0)
  const [mvpPlayer, setMvpPlayer] = useState(false)
  const [ppPlayer, setPpPlayer] = useState(false)

  const handleConfirmadStar = useCallback(() => {
    onUpdateData({ star, mvp: mvpPlayer, pp: ppPlayer })
    onClose()
  }, [onClose, star, mvpPlayer, ppPlayer, onUpdateData])

  const handleChangeMvp = useCallback((value: boolean) => {
    setPpPlayer(false)
    setMvpPlayer(value)
  }, [])

  const handleChangePP = useCallback((value: boolean) => {
    setPpPlayer(value)
    setMvpPlayer(false)
  }, [])

  useEffect(() => {
    setStar(stats.sumStars)
    setMvpPlayer(stats.mvp === 1)
    setPpPlayer(stats.pp === 1)
  }, [stats])

  return (
    <ModalBase visible={visible} onClose={onClose}>
      <View style={styles.container}>
        <LineBackground color={theme.colors.gray[600]} />
        <TouchableOpacity style={styles.touchClose} onPress={onClose}>
          <Feather name="x" size={16} color={theme.colors.white} />
        </TouchableOpacity>
        
        <Text style={styles.title}>Definindo nota do { namePlayer }</Text>
        <View style={styles.content}>
          <View style={styles.statsView}>
            <Text style={styles.subtitle}>Gols</Text>
            <Text style={styles.value}>{ stats.goal }</Text>
          </View>
          <View style={styles.statsView}>
            <Text style={styles.subtitle}>Assistência</Text>
            <Text style={styles.value}>{ stats.assistence }</Text>
          </View>
          <View style={styles.statsView}>
            <Text style={styles.subtitle}>Gols Contra</Text>
            <Text style={styles.value}>{ stats.ownGoal }</Text>
          </View>
          <View style={styles.statsView}>
            <Text style={styles.subtitle}>Jogos</Text>
            <Text style={styles.value}>{ stats.games }</Text>
          </View>
          <View style={styles.statsView}>
            <Text style={styles.subtitle}>Melhor do Racha</Text>
            <ButtonSwitch value={mvpPlayer} onChange={handleChangeMvp} />
          </View>
          <View style={styles.statsView}>
            <Text style={styles.subtitle}>Pior do Racha</Text>
            <ButtonSwitch value={ppPlayer} onChange={handleChangePP} />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <StarRating
            rating={star}
            onChange={setStar}
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
