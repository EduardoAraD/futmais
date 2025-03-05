import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { Button } from "../Button";
import { CardSelectPlayerStar } from "../CardSelectPlayerStar";
import { LineBackground } from "../LineBackground";
import { ModalBase } from "../ModalBase";

import theme from "../../theme";
import { styles } from "./styles";

interface Props {
  list: number[]
  visible: boolean
  onClose: () => void
}

export function ModalAddPlayer({ list, visible, onClose }: Props) {
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
          keyExtractor={(item) => String(item)}
          renderItem={({ item, index }) => (
            <CardSelectPlayerStar
              name="PLAYER"
              stars={3}
              selected={index % 2 === 0}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          contentContainerStyle={styles.flat}
        />
        <Button>
          <Button.Title>Adicionar Jogador</Button.Title>
        </Button>
      </View>
    </ModalBase>
  )
}