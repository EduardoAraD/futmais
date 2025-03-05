import { useCallback, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'

import { ChampionshipRoutesProps } from "../../routes/routesStack/championship.routes";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { CardSelectPlayer } from "../../components/CardSelectPlayer";
import { ModalAddPlayer } from "../../components/ModalAddPlayer";
import { TitleFlatlist } from "../../components/TitleFlatlist";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import theme from "../../theme";
import { styles } from "./styles";

export function SelectedPlayers() {
  const { navigate } = useNavigation<ChampionshipRoutesProps>()
  const [numberPlayers, setNumberPlayers] = useState(2)
  const [list, setList] = useState([1, 2, 3])
  const [showModal, setShowModal] = useState(false)

  const handlePlusNumberPlayer = useCallback(() => {
    if(numberPlayers + 1 <= 10) {
      setNumberPlayers(state => state + 1)
    }
  }, [numberPlayers])
  const handleMinusNumberPlayer = useCallback(() => {
    if(numberPlayers - 1 >= 1) {
      setNumberPlayers(state => state - 1)
    }
  }, [numberPlayers])

  const handleGoPrizeDawn = useCallback(() => {
    navigate('prizeDawn')
  }, [])

  const handleRemovePlayer = useCallback((player: number) => {
    console.log(player)
  }, [])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <TouchBackWithTitle title="Criar novo Racha" />
        <ModalAddPlayer list={list} visible={showModal} onClose={() => setShowModal(false)} />
        <View style={styles.content}>
          <Text style={styles.title}>Quantos jogadores por time?</Text>
          <View style={styles.options}>
            <TouchableOpacity activeOpacity={0.8}
              onPress={handleMinusNumberPlayer}
              style={[styles.touch, { backgroundColor: theme.colors.primary }]}
            >
              <Feather name="minus" size={24} color={theme.colors.white} />
            </TouchableOpacity>
            <Text style={styles.textOption}>{numberPlayers}</Text>
            <TouchableOpacity activeOpacity={0.8}
              onPress={handlePlusNumberPlayer}
              style={[styles.touch, { backgroundColor: theme.colors.green }]}
            >
              <Feather name="plus" size={24} color={theme.colors.white} />
            </TouchableOpacity>
          </View>
        </View>
        <TitleFlatlist title="Lista de jogadores" value={list.length} />
        <Button style={{ height: 40, marginBottom: 20, }} onPress={() => setShowModal(true)}>
          <Button.Title>Adicionar Jogador</Button.Title>
        </Button>
        <FlatList
          data={list}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <CardSelectPlayer
              name="Player"
              onPressTrash={() => handleRemovePlayer(item)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />

        <Button style={{ height: 48 }} onPress={handleGoPrizeDawn}>
          <Button.Title>Sortear</Button.Title>
        </Button>
      </Background.Padding>
    </Background>
  )
}