import { useCallback, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { Player } from "../../Model/players";
import { Button } from "../Button";
import { CardSelectPlayerStar } from "../CardSelectPlayerStar";
import { LineBackground } from "../LineBackground";
import { ModalBase } from "../ModalBase";

import theme from "../../theme";
import { styles } from "./styles";

interface PlayerWithSelected extends Player {
  selected: boolean
}

interface Props {
  players: Player[]
  visible: boolean
  onClose: () => void
  onConfirmPlayers: (players: Player[]) => void
}

export function ModalAddPlayer({ players, visible, onClose, onConfirmPlayers }: Props) {
  const [list, setList] = useState<PlayerWithSelected[]>([])

  useEffect(() => {
    setList(players.map(item => ({...item, selected: false })))
  }, [players])

  const handleSelectedPlayer = useCallback((idPlayer: string) => {
    setList(state => state.map(item => item.id === idPlayer ?
      ({ ...item, selected: !item.selected }) :
      item
    ))
  }, [])

  const handleConfirmPlayers = useCallback(() => {
    const playersSelected = list.filter(item => item.selected)

    onConfirmPlayers(playersSelected)
    onClose()
  }, [list])

  return (
    <ModalBase visible={visible} onClose={onClose}>
      <View style={styles.container}>
        <LineBackground color={theme.colors.gray[600]} />
        <TouchableOpacity style={styles.touchClose} onPress={onClose}>
          <Feather name="x" size={16} color={theme.colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>Adicionar jogadores</Text>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardSelectPlayerStar
              name={item.name}
              stars={item.stars}
              selected={item.selected}
              onPress={() => handleSelectedPlayer(item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          contentContainerStyle={styles.flat}
        />
        <Button onPress={handleConfirmPlayers} style={{ height: 48 }}>
          <Button.Title>Adicionar Jogador</Button.Title>
        </Button>
      </View>
    </ModalBase>
  )
}