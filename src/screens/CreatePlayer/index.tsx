import { useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import StarRating from 'react-native-star-rating-widget';

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TouchBackWithTitle } from "../../components/TouchBackWithTitle";

import theme from "../../theme";
import goalkeeperImg from '../../assets/goalkeeper.png'
import playerImg from '../../assets/player.png'
import { styles } from "./styles";

type RolePlayer = 'Goalkeeper' | 'Player'

export function CreatePlayer() {
  const [role, setRole] = useState<RolePlayer | ''>('')
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Background color={theme.colors.gray[700]}>
          <Background.Padding>
            <TouchBackWithTitle title="Criar novo jogador" />
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
              <Button style={{ marginTop: 40 }}>
                <Button.Title>Cadastrar</Button.Title>
              </Button>
            </ScrollView>
          </Background.Padding>
        </Background>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
