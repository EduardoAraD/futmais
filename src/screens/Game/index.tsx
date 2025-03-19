import { useCallback, useEffect, useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { PlayersStats } from "./PlayerStats";
import { Time, StatusTime } from "../../components/Time";
import { Score } from "../../components/Score";

import theme from "../../theme";
import { styles } from "./styles";
import { useChampionship } from "../../hook/useChampionship";
import { PlayerInGame } from "../../model/players";

export function Game() {
  const { gameCurrent } = useChampionship()
  const [statusTime, setStatusTime] = useState<StatusTime>('to start')
  const [playersCLub1, setPlayersClub1] = useState<PlayerInGame[]>([])
  const [playersCLub2, setPlayersClub2] = useState<PlayerInGame[]>([])

  function handleStart() {
    setStatusTime('started')
  }

  const handleRestart = useCallback(() => {
    setStatusTime('restart')
    loadPlayers()
  }, [])

  const onChangeStats = useCallback((
    { goal, assistence, idPlayer, club }: { goal: number, assistence: number, idPlayer: string, club: PlayerInGame[] }
  ) => {
    return club.map(item => item.player.id === idPlayer ?
      ({ ...item, goal, assistence }) : item
    )
  }, [])

  const handleChangeStatsClub1 = useCallback((
    { goal, assistence, idPlayer }: { goal: number, assistence: number, idPlayer: string }
  ) => {
    const newStatsOfClub = onChangeStats({ goal, assistence, idPlayer, club: playersCLub1 })
    setPlayersClub1(newStatsOfClub)
  }, [playersCLub1])
  const handleChangeStatsClub2 = useCallback((
    { goal, assistence, idPlayer }: { goal: number, assistence: number, idPlayer: string }
  ) => {
    const newStatsOfClub = onChangeStats({ goal, assistence, idPlayer, club: playersCLub2 })
    setPlayersClub2(newStatsOfClub)
  }, [playersCLub2])

  const loadPlayers = useCallback(() => {
    if(gameCurrent !== null) {
      setPlayersClub1(gameCurrent.club1)
      setPlayersClub2(gameCurrent.club2)
    }    
  }, [gameCurrent])

  useEffect(() => {
    loadPlayers()
  }, [loadPlayers])

  const goalClub1 = useMemo(() => {
    return playersCLub1.reduce(
      (accumulator, player) => accumulator + player.goal, 0,
    );
  }, [playersCLub1])
  const goalClub2 = useMemo(() => {
    return playersCLub2.reduce(
      (accumulator, player) => accumulator + player.goal, 0,
    );
  }, [playersCLub2])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <Score goalClub1={goalClub1} goalClub2={goalClub2} />
          <Time status={statusTime} />
          <View style={styles.contentStats}>
            <View style={styles.stats}>
              {playersCLub1.map(item => (
                <PlayersStats
                  key={item.player.id}
                  idPlayer={item.player.id}
                  name={item.player.name}
                  goal={item.goal}
                  assistence={item.assistence}
                  onChangeStats={handleChangeStatsClub1}
                />
              ))}
            </View>
            <View style={styles.stats}>
              {playersCLub2.map(item => (
                <PlayersStats
                  key={item.player.id}
                  idPlayer={item.player.id}
                  name={item.player.name}
                  goal={item.goal}
                  assistence={item.assistence}
                  onChangeStats={handleChangeStatsClub2}
                />
              ))}
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.action}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.touch, statusTime === 'started' && styles.touchDisabled]}
                disabled={statusTime === 'started'}
                onPress={handleStart}>
                <Feather name="play" style={{ marginRight: -5 }} size={36} color={theme.colors.white} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.touch}
                onPress={handleRestart}>
                <MaterialCommunityIcons name="restart" size={36} color={theme.colors.white} />
              </TouchableOpacity>
            </View>

            <Button style={{ height: 48 }}>
              <Button.Title>FINALIZAR JOGO</Button.Title>
            </Button>
          </View>
        </View>
      </Background.Padding>
    </Background>
  )
}