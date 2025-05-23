import { useCallback, useMemo, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Player } from '../../model/players'
import { Button } from '../Button'
import { CardSelectPlayerStar } from '../CardSelectPlayerStar'
import { ModalBase } from '../ModalBase'

import theme from '../../theme'
import { styles } from './styles'

interface ModalConfirmedProps {
  visible: boolean
  onClose(): void
  players: Player[]
  onConfirm: (idPlayer: string) => void
}

export function ModalOwnGoal({
  visible,
  onClose,
  players,
  onConfirm
}: ModalConfirmedProps) {
  const [selected, setSelected] = useState('')

  const handleConfirmed = useCallback(() => {
    if(selected === '') {
      return
    }
    onConfirm(selected)
    setSelected('')
    onClose()
  }, [onClose, selected, onConfirm])

  const disabled = useMemo(() => selected === '', [selected])

  return (
    <ModalBase visible={visible} onClose={onClose}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchClose} onPress={onClose}>
          <Feather name="x" size={16} color={theme.colors.white} />
        </TouchableOpacity>

        <Text style={styles.title}>Escolha o jogador do gol contra</Text>
        <ScrollView
          contentContainerStyle={styles.scroll}
        >
          <View style={styles.contentScroll}>
            {players.map(item => (
              <CardSelectPlayerStar
                key={item.id}
                name={item.name}
                stars={item.stars}
                selected={item.id === selected}
                onPress={() => setSelected(item.id)}
              />
            ))}
          </View>
        </ScrollView>

        <Button onPress={handleConfirmed} disabled={disabled} style={{ height: 48 }}>
          <Button.Title>Adicionar Jogador</Button.Title>
        </Button>
      </View>
    </ModalBase>
  )
}
