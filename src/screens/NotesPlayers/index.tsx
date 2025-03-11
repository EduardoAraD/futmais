import { useCallback, useState } from 'react'
import { FlatList, View } from 'react-native'

import { Background } from '../../components/Background'
import { Button } from '../../components/Button'
import { CardNotesPlayer } from '../../components/CardNotesPlayer'
import { ModalConfirmad } from '../../components/ModalConfirmad'
import { TitleFlatlist } from '../../components/TitleFlatlist'
import { TouchBackWithTitle } from '../../components/TouchBackWithTitle'

import theme from '../../theme'
import { styles } from './styles'

export function NotesPlayers() {
  const list = [1, 2, 3, 4, 5]
  const [showModalConfirmad, setShowModalConfirmad] = useState(false)

  const handleUpdateStarPlayer = useCallback(
    (star: number) => {
      console.log('test')
    },
    [],
  )

  function handleCloseRacha() {
    console.log('close rch')
  }

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <TouchBackWithTitle title="Definir notas" />
        <TitleFlatlist
          title="Lista de jogadores presentes"
          value={4}
        />
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.toFixed()}
          contentContainerStyle={{ paddingBottom: 50 }}
          renderItem={({ item }) => (
            <CardNotesPlayer
              onUpdateStar={(star) => handleUpdateStarPlayer(star)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
        />
        <Button onPress={() => setShowModalConfirmad(true)}>
          <Button.Title>Finalizar Racha</Button.Title>
        </Button>
        <ModalConfirmad
          visible={showModalConfirmad}
          onClose={() => setShowModalConfirmad(false)}
          title="Finalizar Racha"
          text="Deseja finalizar o racha?"
          dualOption
          onConfirmad={handleCloseRacha}
        />
      </Background.Padding>
    </Background>
  )
}
