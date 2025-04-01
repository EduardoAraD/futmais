import { useCallback, useState } from "react";
import { ScrollView, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { PlayerRoutesProps } from "../../routes/routesStack/player.routes";
import { emptyPlayer, Player } from "../../model/players";
import { Background } from "../../components/Background";
import { CardFlatlist } from "../../components/CardFlatlist";
import { Loading } from "../../components/Loading";
import { Title } from "../../components/Title";
import { TitleFlatlist } from "../../components/TitleFlatlist";
import { TouchPlusScreen } from "../../components/TouchPlusScreen";

import { getAllPlayersServices } from "../../services/players";
import theme from "../../theme";
import { styles } from "./styles";

export function Players() {
  const { navigate } = useNavigation<PlayerRoutesProps>()
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(false)

  const loadPlayers = useCallback( async () => {
    setLoading(true)
    
    const list = await getAllPlayersServices()
    setPlayers(list)

    setLoading(false)
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadPlayers()
    }, [loadPlayers]),
  )

  const handleGoCreatePlayer = useCallback(() => {
    navigate('createPlayer', { player: emptyPlayer, newPlayer: true })
  }, [])

  const handleGoDetailsPlayer = useCallback((idPlayer: string) => {
    navigate('detailsPlayer', { idPlayer })
  }, [])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <Title title="Gerenciamento de Jogadores" />
        <TitleFlatlist title="Jogadores" value={players.length} />
        {loading ? (
          <Loading />
        ) : (
          <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ gap: 6 }}>
              {players.map(item => (
                 <CardFlatlist
                  key={item.id}
                  name={item.name}
                  onPress={() => handleGoDetailsPlayer(item.id)}
                  status='current'
                />
              ))}
            </View>
          </ScrollView>
        )}

        <TouchPlusScreen
          icon="user-plus"
          onPress={handleGoCreatePlayer}
        />
      </Background.Padding>
    </Background>
  )
}
