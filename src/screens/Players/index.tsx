import { useCallback } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons'

import { PlayerRoutesProps } from "../../routes/routesStack/player.routes";
import { Background } from "../../components/Background";
import { CardPlayer } from "../../components/CardPlayer";
import { Tab } from "../../components/Tab";

import theme from "../../theme";
import { styles } from "./styles";

export function Players() {
  const { navigate } = useNavigation<PlayerRoutesProps>()
  const list = [1, 2, 3, 4, 5]

  const handleGoCreatePlayer = useCallback(() => {
    navigate('createPlayer')
  }, [])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <Text style={styles.title}>Gerencimento de Jogadores</Text>
        <View style={styles.content}>
          <Text style={styles.textFlat}>Jogadores</Text>
          <Text style={styles.textFlat}>100</Text>
        </View>

        <FlatList
          data={list}
          keyExtractor={item => String(item)}
          renderItem={() => <CardPlayer name="Nome do Jogador" />}
          ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.touch}
          onPress={handleGoCreatePlayer}
        >
          <Feather
            name="user"
            size={40}
            color={theme.colors.white}
          />
        </TouchableOpacity>
        <Tab />
      </Background.Padding>
    </Background>
  )
}