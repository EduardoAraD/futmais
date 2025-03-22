import { useCallback, useEffect, useMemo, useState } from 'react'
import { FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ChampionshipRoutesProps } from '../../routes/routesStack/championship.routes'
import { useChampionship } from '../../hook/useChampionship'

import { Player } from '../../model/players'
import { emptyStats, Stats, StatsWithPlayer } from '../../model/stats'
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
  const { championship, closeChampionship } = useChampionship()

  const [listPlayers, setListPlayers] = useState<PlayerStats[]>([])
  const [showModalConfirmad, setShowModalConfirmad] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleUpdateStatsPlayer = useCallback((
    {star, mvp, pp, idPlayer}: { star: number, mvp: boolean, pp: boolean, idPlayer: string}
  ) => {
    setListPlayers(state => state.map(item => item.player.id === idPlayer ?
      {
        ...item,
        stats: {
          ...item.stats,
          sumStars: star,
          mvp: mvp ? 1 : 0,
          pp: pp ? 1 : 0
        }
      } : {
        ...item,
        stats: {
          ...item.stats,
          mvp: mvp ? 0: item.stats.mvp,
          pp: pp ? 0 : item.stats.pp
        }
      }
    ))
  }, [])

  const handleFinishChampionship = useCallback(async () => {
    setLoading(true)
    const stats: StatsWithPlayer[] = listPlayers.map(item => ({
      idPlayer: item.player.id, ...item.stats,
    }))
    await closeChampionship(stats)
    setLoading(false)
    navigate('championship')
  }, [championship, listPlayers])

  const disabled = useMemo(() => {
    return listPlayers.filter(item => item.stats.mvp === 1 || item.stats.pp === 1).length < 2
  }, [listPlayers])

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
              onUpdateStatsPlayer={(data) => handleUpdateStatsPlayer(
                {...data, idPlayer: item.player.id }
              )}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
        />
        <Button
          onPress={() => setShowModalConfirmad(true)}
          disabled={disabled}
          isLoading={loading}
        >
          <Button.Title>Finalizar Racha</Button.Title>
        </Button>
        <ModalConfirmad
          visible={showModalConfirmad}
          onClose={() => setShowModalConfirmad(false)}
          title="Finalizar Racha"
          text="Deseja finalizar o racha?"
          dualOption
          onConfirmad={handleFinishChampionship}
        />
      </Background.Padding>
    </Background>
  )
}
