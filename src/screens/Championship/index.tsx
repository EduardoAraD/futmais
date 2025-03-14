import { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ChampionshipRoutesProps } from "../../routes/routesStack/championship.routes";
import { Background } from "../../components/Background";
import { CardFlatlist } from "../../components/CardFlatlist";
import { Title } from "../../components/Title";
import { TitleFlatlist } from "../../components/TitleFlatlist";
import { TouchPlusScreen } from "../../components/TouchPlusScreen";

import theme from "../../theme";
import { ChampionshipResume } from "../../Model/chempionship";
import { getAllChampionshipsServices } from "../../services/championship";

export function Championship() {
  const { navigate } = useNavigation<ChampionshipRoutesProps>()
  const [championship, setChampionship] = useState<ChampionshipResume[]>([])

  const handleGoCreateChampionship = useCallback(() => {
    navigate('selectedPlayers')
  }, [])

  const handleGoDetailsChampionship = useCallback((idChampionship: string) => {
    navigate('detailsChampionship', { idChampionship })
  }, [])

  const loadChampionship = useCallback(async () => {
    const championships = await getAllChampionshipsServices()

    setChampionship(championships)
  }, [])
  useEffect(() => {
    loadChampionship()
  }, [loadChampionship])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <Title title="Gerenciamento de Rachas" />
        <TitleFlatlist title="Rachas" value={championship.length} />
        <FlatList
          data={championship}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardFlatlist
              name={`Racha - ${new Date(item.date).toLocaleDateString()}`}
              status={item.status}
              onPress={() => handleGoDetailsChampionship(item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
          showsVerticalScrollIndicator={false}
        />

        <TouchPlusScreen
          icon="user"
          onPress={handleGoCreateChampionship}
        />
      </Background.Padding>
    </Background>
  )
}
