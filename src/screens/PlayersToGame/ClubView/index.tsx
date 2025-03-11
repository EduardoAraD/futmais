import { Text, View } from "react-native";
import { useState } from "react";

import { Button } from "../../../components/Button";
import { ModalChooseClub } from "../../../components/ModalChooseClub";

import { styles } from "./styles";

export function ClubView() {
  const [showModal, setShowModal] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Time 1</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Nome 1</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Nome 1</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Nome 1</Text>
        </View>
      </View>
      <Button style={{ height: 40 }} onPress={() => setShowModal(true)}>
        <Button.Title>Editar Time 1</Button.Title>
      </Button>
      <ModalChooseClub visible={showModal} onClose={() => setShowModal(false)} />
    </View>
  )
}