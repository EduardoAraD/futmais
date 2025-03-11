import { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { Button } from "../../../components/Button";
import { ModalAddPlayer } from "../../../components/ModalAddPlayer";

import { styles } from "./styles";

export function PlayersDetailsChampionship() {
  const list = [1, 2, 3, 4, 5]
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
        list={list}
        visible={showModal}
        onClose={handleCloseModal}
      />
      <Button style={{ height: 40 }} onPress={handleOpenModal}>
        <Button.Title>Adicionar jogadores penetras</Button.Title>
      </Button>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>Jogadores do racha</Text>
        <View style={styles.playerView}>
          <Text style={styles.player}>PLAYER</Text>
          <Text style={styles.textClub}>T1</Text>
        </View>

        <Text style={styles.subtitle}>Reservas/Penetras</Text>
        <View style={styles.playerView}>
          <Text style={styles.player}>PLAYER</Text>
        </View>
      </ScrollView>
    </View>
  )
}