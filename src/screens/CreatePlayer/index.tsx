import { useCallback, useEffect, useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import * as Crypto from 'expo-crypto'
import StarRating from 'react-native-star-rating-widget';

import { Player, RolePlayer } from "../../model/players";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import { createPlayerServices, editPlayerServices, hasExistingNamePlayer } from "../../services/players";
import theme from "../../theme";
import { styles } from "./styles";
import goalkeeperImg from '../../assets/goalkeeper.png'
import playerImg from '../../assets/player.png'

export interface CreatePlayerRouteParams {
  player: Player
  newPlayer: boolean
}

type ParamList = {
  Create: CreatePlayerRouteParams
}

export function CreatePlayer() {
  const { goBack } = useNavigation()
  const { player, newPlayer } = useRoute<RouteProp<ParamList, 'Create'>>().params

  const [role, setRole] = useState<RolePlayer | ''>('')
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(!newPlayer) {
      setRole(player.role)
      setName(player.name)
      setRating(player.stars)
    }
  }, [newPlayer, player.role, player.name, player.stars])

  const isValidatePlayer = useCallback(async (nameString: string, roleString: string) => {
    if(roleString === '' || nameString === '') {
      return false
    }
    const hasNamePlayer = await hasExistingNamePlayer({ newName: nameString, nameOld: player.name })

    return hasNamePlayer === false
  }, [player.name])

  const handleCreatePlayer = useCallback(async () => {
    const isValidate = await isValidatePlayer(name, role)
    if (!isValidate) {
      return
    }

    const newPlayer: Player = {
      id: Crypto.randomUUID(),
      name,
      role: role === '' ? 'Player' : role,
      stars: rating,
      disabled: false,
    }

    await createPlayerServices(newPlayer)
    goBack()
  }, [name, role, rating, goBack, isValidatePlayer])

  const handleEditPlayer = useCallback(async () => {
    const isValidate = await isValidatePlayer(name, role)
    if (!isValidate) {
      return
    }

    const newPlayer: Player = {
      id: player.id,
      name,
      role: role === '' ? 'Player' : role,
      stars: rating,
      disabled: player.disabled,
    }

    await editPlayerServices({ player: newPlayer })
    goBack()
  }, [player.id, name, role, rating, goBack, isValidatePlayer])

  const handleRegister = useCallback(async () => {
    setLoading(true)
    if(newPlayer) {
      handleCreatePlayer()
    } else {
      handleEditPlayer()
    }
    setLoading(false)
  }, [newPlayer, handleCreatePlayer, handleEditPlayer])

  const title = newPlayer ? 'Criar novo jogador' : 'Editar jogador'
  const textRegister = newPlayer ? 'Cadastrar' : 'Salvar'

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Background color={theme.colors.gray[700]}>
          <Background.Padding>
            <TouchBackWithTitle title={title} />
            <ScrollView
              contentContainerStyle={styles.scroll}
              showsVerticalScrollIndicator={false}>
              <View style={styles.options}>
                <Pressable
                  onPress={() => setRole('Player')}
                  style={[
                  styles.touch,
                  role === 'Player' && { backgroundColor: theme.colors.primary }
                ]}>
                  <Image source={playerImg} style={styles.image} />
                  <Text style={styles.player}>Jogador</Text>
                </Pressable>
                <Pressable
                  onPress={() => setRole('Goalkeeper')}
                  style={[
                    styles.touch,
                    role === 'Goalkeeper' && { backgroundColor: theme.colors.primary }
                  ]}
                >
                  <Image source={goalkeeperImg} style={styles.image} />
                  <Text style={styles.player}>Goleiro</Text>
                </Pressable>
              </View>
              <Input placeholder="Nome do jogador" value={name} onChangeText={setName} />
              <StarRating
                rating={rating}
                onChange={setRating}
                starSize={60}
              />
              <Button
                style={{ marginTop: 40 }}
                onPress={handleRegister}
                isLoading={loading}
              >
                <Button.Title>{ textRegister }</Button.Title>
              </Button>
            </ScrollView>
          </Background.Padding>
        </Background>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
