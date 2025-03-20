import { useCallback, useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ChampionshipRoutesProps } from '../../routes/routesStack/championship.routes'
import { useChampionship } from '../../hook/useChampionship'

import { Player } from '../../model/players'
import { emptyStats, Stats } from '../../model/stats'
import { Background } from '../../components/Background'
import { Button } from '../../components/Button'
import { CardNotesPlayer } from '../../components/CardNotesPlayer'
import { ModalConfirmad } from '../../components/ModalConfirmad'
import { TitleFlatlist } from '../../components/TitleFlatlist'
import { TouchBackWithTitle } from '../../components/TouchBackWithTitle'

import theme from '../../theme'

interface PlayerStats {
  player: Player
  stats: Stats
}

export function NotesPlayers() {
  const { navigate } = useNavigation<ChampionshipRoutesProps>()
  const { championship } = useChampionship()

  const [listPlayers, setListPlayers] = useState<PlayerStats[]>([])
  const [showModalConfirmad, setShowModalConfirmad] = useState(false)

  const handleUpdateStarPlayer = useCallback(
    ({ star, idPlayer }: { star: number, idPlayer: string }) => {
      setListPlayers(state => state.map(item => item.player.id === idPlayer ?
        {
          ...item,
          stats: {
            ...item.stats,
            sumStars: star,
          }
         } : { ...item }
      ))
    },
    [],
  )

  const handleUpdateMVPPlayer = useCallback(
    ({ mvp, idPlayer }: { mvp: boolean, idPlayer: string }) => {
      setListPlayers(state => state.map(item => item.player.id === idPlayer ?
        { ...item, stats: { ...item.stats, mvp: mvp ? 1 : 0 } } :
        { ...item, stats: { ...item.stats, mvp: 0 } }
      ))
    }, [],
  )

  const handleUpdatePPPlayer = useCallback(
    ({ pp, idPlayer }: { pp: boolean, idPlayer: string }) => {
      setListPlayers(state => state.map(item => item.player.id === idPlayer ?
        { ...item, stats: { ...item.stats, pp: pp ? 1 : 0 } } :
        { ...item, stats: { ...item.stats, pp: 0 } }
      ))
    }, [],
  )

  function handleCloseRacha() {
    navigate('championship')
  }

  const loadPlayers = useCallback(() => {
    if(championship !== null) {
      const stats = championship.stats
      const players = [...championship.players, ...championship.playersReserve]

      const list: PlayerStats[] = players.map(player => {
        const statsPlayer = stats.find(item => item.idPlayer === player.id)
        if(statsPlayer !== undefined) {
          return { player, stats: statsPlayer }
        } else {
          return { player, stats: emptyStats }
        }
      })
      setListPlayers(list)
    }
  }, [championship])

  useEffect(() => {
    loadPlayers()
  }, [loadPlayers])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <TouchBackWithTitle title="Definir notas" />
        <TitleFlatlist
          title="Lista de jogadores presentes"
          value={listPlayers.length}
        />
        <FlatList
          data={listPlayers}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.player.id}
          contentContainerStyle={{ paddingBottom: 50 }}
          renderItem={({ item }) => (
            <CardNotesPlayer
              name={item.player.name}
              stats={item.stats}
              onUpdateMVP={(mvp) => handleUpdateMVPPlayer({ mvp, idPlayer: item.player.id })}
              onUpdatePP={(pp) => handleUpdatePPPlayer({ pp, idPlayer: item.player.id })}
              onUpdateStar={(star) => handleUpdateStarPlayer({ star, idPlayer: item.player.id })}
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
