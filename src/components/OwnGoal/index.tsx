import { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { Player, PlayerInGame } from "../../model/players";
import { Button } from "../Button";
import { ModalOwnGoal } from "../ModalOwnGoal";

import theme from "../../theme";
import { styles } from "./styles";

interface Props {
  players: PlayerInGame[]
  onPressAddOwnGoal: (idPlayer: string) => void
  onPressRemoveOwnGoal: (idPlayer: string) => void
}

export function OwnGoal({ players, onPressAddOwnGoal, onPressRemoveOwnGoal }: Props) {
  const [showModal, setShowModal] = useState(false)

  const playersOwnGoal = useMemo(() => {
    const list: Player[] = []
    players.forEach(item => {
      for(let i = item.ownGoal; i > 0; i --){
        list.push(item.player)
      }
    })

    return list
  }, [players])

  return (
    <View style={styles.container}>
      <Button style={{ height: 30 }} onPress={() => setShowModal(true)}>
        <Button.Title>Adicionar Gol Contra</Button.Title>
      </Button>
      {playersOwnGoal.map((player, index) => (
        <View style={styles.content} key={`${index}-${player.id}`}>
          <Text style={styles.text}>{ player.name }</Text>
          <Pressable
            style={styles.touch}
            onPress={() => onPressRemoveOwnGoal(player.id)}>
            <Feather name="trash-2" color={theme.colors.primary} />
          </Pressable>
        </View>
      ))}
      <ModalOwnGoal
        visible={showModal}
        onClose={() => setShowModal(false)}
        players={players.map(item => item.player)}
        onConfirm={onPressAddOwnGoal}
      />
    </View>
  )
}
