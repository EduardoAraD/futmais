import { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { PlayerRoutesProps } from "../../routes/routesStack/player.routes";
import { emptyPlayer, Player } from "../../Model/players";
import { Background } from "../../components/Background";
import { CardFlatlist } from "../../components/CardFlatlist";
import { Loading } from "../../components/Loading";
import { Title } from "../../components/Title";
import { TitleFlatlist } from "../../components/TitleFlatlist";
import { TouchPlusScreen } from "../../components/TouchPlusScreen";

import { getAllPlayersServices } from "../../services/players";
import theme from "../../theme";

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
          <FlatList
            data={players}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CardFlatlist
                name={item.name}
                onPress={() => handleGoDetailsPlayer(item.id)}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
            showsVerticalScrollIndicator={false}
          />
        )}

        <TouchPlusScreen
          icon="user"
          onPress={handleGoCreatePlayer}
        />
        {/* <Tab /> */}
      </Background.Padding>
    </Background>
  )
}
