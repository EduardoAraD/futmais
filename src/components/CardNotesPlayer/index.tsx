import { useCallback, useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import { Stats } from '../../model/stats'
import { ModalDefinedStars } from '../ModalDefinedStars'
import { Stars } from '../Stars'

import { styles } from './styles'

interface CardNotesProps {
  name: string
  stats: Stats
  onUpdateStar(star: number): void
  onUpdateMVP(value: boolean): void
  onUpdatePP(value: boolean): void
}

export function CardNotesPlayer(
  { onUpdateStar, name, stats, onUpdateMVP, onUpdatePP }: CardNotesProps)
{
  const [showModal, setShowModal] = useState(false)

  const handleUpdateData = useCallback(
    ({ star, mvp, pp }: { star: number, mvp: boolean, pp: boolean }) => {
      onUpdateStar(star)
      onUpdateMVP(mvp)
      onUpdatePP(pp)
    }, [onUpdateStar, onUpdateMVP, onUpdatePP]
  )

  return (
    <>
      <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => setShowModal(true)}>
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>{ name }</Text>
          <Stars note={stats.sumStars} hasAllStars={false} style={{ justifyContent: 'flex-end'}} />
        </View>
      </TouchableOpacity>
      <ModalDefinedStars
        visible={showModal}
        onClose={() => setShowModal(false)}
        stats={stats}
        onUpdateData={handleUpdateData}
      />
    </>
  )
}
