import { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'

import { ChampionshipRoutesProps } from "../../routes/routesStack/championship.routes";

import { Player } from "../../model/players";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { CardSelectPlayer } from "../../components/CardSelectPlayer";
import { ModalAddPlayer } from "../../components/ModalAddPlayer";
import { TitleFlatlist } from "../../components/TitleFlatlist";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import { getAllPlayersServices } from "../../services/players";
import theme from "../../theme";
import { styles } from "./styles";

export function SelectedPlayers() {
  const { navigate } = useNavigation<ChampionshipRoutesProps>()
  const [playersForClub, setPlayersForClub] = useState(2)
  const [allPlayers, setAllPlayers] = useState<Player[]>([])
  const [players, setPlayers] = useState<Player[]>([])
  const [showModal, setShowModal] = useState(false)

  const handlePlusNumberPlayer = useCallback(() => {
    if(playersForClub + 1 <= 10) {
      setPlayersForClub(state => state + 1)
    }
  }, [playersForClub])

  const handleMinusNumberPlayer = useCallback(() => {
    if(playersForClub - 1 >= 1) {
      setPlayersForClub(state => state - 1)
    }
  }, [playersForClub])

  const handleGoPrizeDawn = useCallback(() => {
    navigate('prizeDawn', {
      qtdPlayersForClub: playersForClub,
      players: players.sort((a, b) => (a.stars < b.stars ? 1 : -1)),
    })
  }, [playersForClub, players])

  const handleRemovePlayer = useCallback((idPlayer: string) => {
    setPlayers(state => state.filter(item => item.id !== idPlayer))
  }, [])

  const addPlayers = useCallback((listPlayers: Player[]) => {
    setPlayers(state => [...state, ...listPlayers])
  }, [])

  const loadPlayers = useCallback(async () => {
    const listPlayers = await getAllPlayersServices()
    setAllPlayers(listPlayers)
  }, [])

  useEffect(() => {
    loadPlayers()
  }, [loadPlayers])

  const playersModal = useMemo(() => {
    const filterPlayers = allPlayers.filter(player => {
      const find = players.find(item => item.id === player.id)
      return find === undefined
    })

    return filterPlayers
  }, [allPlayers, players])

  const disabledButtonSort = useMemo(() => {
    return playersForClub * 2 > players.length
  }, [playersForClub, players])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <TouchBackWithTitle title="Criar novo Racha" />
        <ModalAddPlayer
          players={playersModal}
          visible={showModal}
          onClose={() => setShowModal(false)}
          onConfirmPlayers={addPlayers}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Quantos jogadores por time?</Text>
          <View style={styles.options}>
            <TouchableOpacity activeOpacity={0.8}
              onPress={handleMinusNumberPlayer}
              style={[styles.touch, { backgroundColor: theme.colors.primary }]}
            >
              <Feather name="minus" size={24} color={theme.colors.white} />
            </TouchableOpacity>
            <Text style={styles.textOption}>{playersForClub}</Text>
            <TouchableOpacity activeOpacity={0.8}
              onPress={handlePlusNumberPlayer}
              style={[styles.touch, { backgroundColor: theme.colors.green }]}
            >
              <Feather name="plus" size={24} color={theme.colors.white} />
            </TouchableOpacity>
          </View>
        </View>
        <TitleFlatlist title="Lista de jogadores" value={players.length} />
        <Button style={{ height: 40 }} onPress={() => setShowModal(true)}>
          <Button.Title>Adicionar Jogador</Button.Title>
        </Button>

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ gap: 10 }}>
            {players.map(item => (
              <CardSelectPlayer
                key={item.id}
                name={item.name}
                onPressTrash={() => handleRemovePlayer(item.id)}
              />
            ))}
          </View>
        </ScrollView>

        {/* <FlatList
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          data={players}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardSelectPlayer
              name={item.name}
              onPressTrash={() => handleRemovePlayer(item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        /> */}

        <Button
          disabled={disabledButtonSort}
          style={[{ height: 48 }, disabledButtonSort && { backgroundColor: theme.colors.gray[500]}]} 
          onPress={handleGoPrizeDawn}
        >
          <Button.Title>Sortear</Button.Title>
        </Button>
      </Background.Padding>
    </Background>
  )
}