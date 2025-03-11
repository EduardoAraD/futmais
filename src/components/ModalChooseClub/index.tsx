import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { Button } from "../Button";
import { LineBackground } from "../LineBackground";
import { ModalBase } from "../ModalBase";

import theme from "../../theme";
import { styles } from "./styles";

interface Props {
  visible: boolean
  onClose: () => void
}

export function ModalChooseClub({ visible, onClose }: Props) {
  const clubs = [1, 2, 3, 4, 5]
  const players = [1, 2, 3, 4]
  const pleyrs = [1, 2, 3, 4, 5, 7, 6]

  const hasGreaterThan6 = clubs.length > 6

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
            {players.map(item => (
              <View key={String(item)} style={styles.playerSelectView}>
                <Text style={styles.playerSelect}>Nome</Text>
                <Pressable style={styles.touch}>
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
                  <TouchableOpacity key={item} activeOpacity={0.8} style={styles.touchClub}>
                    <Text style={styles.touchClubText}>2</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            ) : clubs.map(item => (
              <TouchableOpacity key={item} activeOpacity={0.8} style={styles.touchClub}>
                <Text style={styles.touchClubText}>2</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.subtitle}>Jogadores</Text>
          <View  style={styles.content}>
            {pleyrs.map(item => (
              <TouchableOpacity key={item} activeOpacity={0.8} style={styles.playerView}>
                <Text style={styles.player}>Nome</Text>
                <Text style={styles.club}>T1</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <Button>
          <Button.Title>Adicionar</Button.Title>
        </Button>
      </View>
    </ModalBase>
  )
}