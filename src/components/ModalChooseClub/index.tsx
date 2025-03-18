import { useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { Player, PlayerWithClub } from "../../model/players";
import { Button } from "../Button";
import { LineBackground } from "../LineBackground";
import { ModalBase } from "../ModalBase";

import theme from "../../theme";
import { styles } from "./styles";

interface Props {
  visible: boolean
  onClose: () => void
  players: Player[]
  playersAvailable: PlayerWithClub[]
  qtdPlayersForClub: number
  clubs: number[]
  onSaveClub: (players: Player[]) => void
}

export function ModalChooseClub({
  visible, onClose, players, playersAvailable, qtdPlayersForClub, clubs, onSaveClub
}: Props) {
  const [playersChoose, setPlayersChoose] = useState<Player[]>([])

  const hasGreaterThan6 = clubs.length > 6

  const handleAddPlayer = useCallback((player: Player) => {
    if(qtdPlayersForClub > playersChoose.length) {
      setPlayersChoose(state => [...state, player])
    }
  }, [playersChoose, qtdPlayersForClub])

  const handleRemovePlayer = useCallback(( idPlayer: string) => {
    setPlayersChoose(state => state.filter(item => item.id !== idPlayer))
  }, [])

  const handleChooseClub = useCallback((clubIndex: number) => {
    setPlayersChoose(playersAvailable.filter(item => item.clubIndex === clubIndex))
  }, [playersAvailable])

  const handleSavePlayers = useCallback(() => {
    onSaveClub(playersChoose)
    onClose()
  }, [playersChoose])

  const playersList = useMemo(() => {
    return playersAvailable.filter(player => {
      const find = playersChoose.find(item => item.id === player.id)
      return find === undefined
    })
  }, [playersAvailable, playersChoose])

  const disabledOptionPlayers = useMemo(() => {
    return qtdPlayersForClub <= playersChoose.length
  }, [qtdPlayersForClub, playersChoose.length])

  useEffect(() => {
    setPlayersChoose(players)
  }, [players])

  return (
    <ModalBase visible={visible} onClose={onClose}>
      <View style={styles.container}>
        <LineBackground color={theme.colors.gray[600]} />
        <TouchableOpacity style={styles.touchClose} onPress={onClose}>
          <Feather name="x" size={16} color={theme.colors.white} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.title}>Jogadores do Time 1</Text>
          <View style={styles.content}>
            {playersChoose.map(item => (
              <View key={item.id} style={styles.playerSelectView}>
                <Text style={styles.playerSelect}>{item.name}</Text>
                <Pressable style={styles.touch} onPress={() => handleRemovePlayer(item.id)}>
                  <Feather name="trash-2" size={16} color={theme.colors.white} />
                </Pressable>
              </View>
            ))}
          </View>

          <Text style={styles.subtitle}>Times Fechados</Text>
          <View style={styles.viewHorizontal}>
            {hasGreaterThan6 ? (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 10 }}>
                {clubs.map(item => (
                  <TouchableOpacity
                    key={item}
                    activeOpacity={0.8}
                    style={styles.touchClub}
                    onPress={() => handleChooseClub(item)}
                  >
                    <Text style={styles.touchClubText}>{ item + 1}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            ) : clubs.map(item => (
              <TouchableOpacity
                key={item}
                activeOpacity={0.8}
                style={styles.touchClub}
                onPress={() => handleChooseClub(item)}
              >
                <Text style={styles.touchClubText}>T{ item + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.subtitle}>Jogadores</Text>
          <View  style={styles.content}>
            {playersList.map(item => (
              <TouchableOpacity
                key={item.id}
                disabled={disabledOptionPlayers}
                activeOpacity={0.8}
                style={[styles.playerView,
                  disabledOptionPlayers && { opacity: 0.6 }
                ]}
                onPress={() => handleAddPlayer(item)}
              >
                <Text style={styles.player}>{item.name}</Text>
                {item.clubIndex !== -1 && (
                  <Text style={styles.club}>T{item.clubIndex + 1}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <Button onPress={handleSavePlayers}>
          <Button.Title>Adicionar</Button.Title>
        </Button>
      </View>
    </ModalBase>
  )
}
