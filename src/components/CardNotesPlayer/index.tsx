import { useCallback, useState } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'

import { Stats } from '../../model/stats'
import { ModalDefinedStars } from '../ModalDefinedStars'
import { Stars } from '../Stars'

import { styles } from './styles'
import starPlayer from '../../assets/best-player.png'
import deflatedBall from '../../assets/soccer-ball-emoji.png'

interface CardNotesProps {
  name: string
  stats: Stats
  onUpdateStatsPlayer(data: { star: number, mvp: boolean, pp: boolean }): void
}

export function CardNotesPlayer(
  { onUpdateStatsPlayer, name, stats }: CardNotesProps)
{
  const [showModal, setShowModal] = useState(false)

  const handleUpdateData = useCallback(
    ({ star, mvp, pp }: { star: number, mvp: boolean, pp: boolean }) => {
      onUpdateStatsPlayer({ star, mvp, pp })
    }, [onUpdateStatsPlayer]
  )

  return (
    <>
      <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => setShowModal(true)}>
        <View style={styles.content}>
          {stats.mvp === 1 && (
            <Image source={starPlayer} style={styles.image} />
          )}
          {stats.pp === 1 && (
            <Image source={deflatedBall} style={styles.image} />
          )}
          <Text style={styles.title} numberOfLines={1}>{ name }</Text>
          <Stars note={stats.sumStars} hasAllStars={false} style={{ justifyContent: 'flex-end'}} />
        </View>
      </TouchableOpacity>
      <ModalDefinedStars
        visible={showModal}
        onClose={() => setShowModal(false)}
        stats={stats}
        onUpdateData={handleUpdateData}
        namePlayer={name}
      />
    </>
  )
}
