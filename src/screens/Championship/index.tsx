import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { ChampionshipRoutesProps } from "../../routes/routesStack/championship.routes";
import { ChampionshipResume, StatusChampionship } from "../../model/chempionship";
import { Background } from "../../components/Background";
import { CardFlatlist } from "../../components/CardFlatlist";
import { Title } from "../../components/Title";
import { TitleFlatlist } from "../../components/TitleFlatlist";
import { TouchPlusScreen } from "../../components/TouchPlusScreen";

import { getAllChampionshipsServices } from "../../services/championship";
import theme from "../../theme";
import { styles } from "./styles";

export function Championship() {
  const { navigate } = useNavigation<ChampionshipRoutesProps>()
  const [championship, setChampionship] = useState<ChampionshipResume[]>([])
  const [refreshing, setRefreshing] = useState(false);

  const handleGoCreateChampionship = useCallback(() => {
    navigate('selectedPlayers')
  }, [])

  const handleGoProxScreen = useCallback((
    { idChampionship, status } : { idChampionship: string, status: StatusChampionship }
  ) => {
    if(status === 'current') {
      navigate('detailsChampionship', { idChampionship })
    } else {
      navigate('statsChampionship', { idChampionship })
    }
  }, [])

  const loadChampionship = useCallback(async () => {
    const championships = await getAllChampionshipsServices()

    setChampionship(championships)
  }, [])


  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    
    await loadChampionship()
    
    setRefreshing(false);
  }, [loadChampionship]);

  useFocusEffect(useCallback(() => {
    loadChampionship()
  }, [loadChampionship]))

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <Title title="Gerenciamento de Rachas" />
        <TitleFlatlist title="Rachas" value={championship.length} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.contentScroll}>
            {championship.map(item => (
              <CardFlatlist
                key={item.id}
                name={`Racha - ${new Date(item.date).toLocaleDateString()}`}
                status={item.status}
                onPress={() => handleGoProxScreen({ idChampionship: item.id, status: item.status })}
              />
            ))}
          </View>
        </ScrollView>

        <TouchPlusScreen
          icon="championship"
          onPress={handleGoCreateChampionship}
        />
      </Background.Padding>
    </Background>
  )
}
