import { Text, View } from "react-native";
import { useState } from "react";

import { Player, PlayerWithClub } from "../../../model/players";
import { Button } from "../../../components/Button";
import { ModalChooseClub } from "../../../components/ModalChooseClub";

import { styles } from "./styles";

interface Props {
  players: Player[]
  playersAvailable: PlayerWithClub[]
  qtdPlayersForClub: number
  clubs: number[]
  onSaveClub: (players: Player[]) => void
  title: string
}

export function ClubView({
  players, playersAvailable, qtdPlayersForClub, clubs, onSaveClub, title
}: Props) {
  const [showModal, setShowModal] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{ title }</Text>
        </View>
        {players.map(item => (
          <View
            key={item.id}
            style={styles.textView}>
            <Text style={styles.text}>{ item.name }</Text>
          </View>
        ))}
      </View>
      <Button style={{ height: 40 }} onPress={() => setShowModal(true)}>
        <Button.Title>Editar Jogadores</Button.Title>
      </Button>
      <ModalChooseClub
        players={players}
        playersAvailable={playersAvailable}
        visible={showModal}
        onClose={() => setShowModal(false)}
        qtdPlayersForClub={qtdPlayersForClub}
        clubs={clubs}
        onSaveClub={onSaveClub}
      />
    </View>
  )
}