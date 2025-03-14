import { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { Player, PlayerWithClub } from "../../../Model/players";
import { Button } from "../../../components/Button";
import { ModalAddPlayer } from "../../../components/ModalAddPlayer";

import { styles } from "./styles";

interface Props {
  playersToModal: Player[]
  onConfirmPlayers: (players: Player[]) => void
  players: PlayerWithClub[]
  playersReserve: Player[]
}

export function PlayersDetailsChampionship(
  { playersToModal, players, playersReserve, onConfirmPlayers }: Props
) {
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = useCallback(() => {
    return setShowModal(false)
  }, [])
  const handleOpenModal = useCallback(() => {
    return setShowModal(true)
  }, [])

  return (
    <View style={styles.container}>
      <ModalAddPlayer
        players={playersToModal}
        visible={showModal}
        onClose={handleCloseModal}
        onConfirmPlayers={onConfirmPlayers}
      />
      <Button style={{ height: 40 }} onPress={handleOpenModal}>
        <Button.Title>Adicionar jogadores penetras</Button.Title>
      </Button>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>Jogadores do racha</Text>
        {players.map(item => (
          <View key={item.id} style={styles.playerView}>
            <Text style={styles.player}>{item.name}</Text>
            <Text style={styles.textClub}>T{item.clubIndex}</Text>
          </View>
        ))}

        <Text style={styles.subtitle}>Reservas/Penetras</Text>
        {playersReserve.map(item => (
          <View style={styles.playerView} key={item.id}>
            <Text style={styles.player}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
