import { useCallback } from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ChampionshipRoutesProps } from "../../routes/routesStack/championship.routes";
import { Background } from "../../components/Background";
import { CardFlatlist } from "../../components/CardFlatlist";
import { Title } from "../../components/Title";
import { TitleFlatlist } from "../../components/TitleFlatlist";
import { TouchPlusScreen } from "../../components/TouchPlusScreen";

import theme from "../../theme";

export function Championship() {
  const { navigate } = useNavigation<ChampionshipRoutesProps>()
  const list = [1, 2, 3, 4, 5]

  const handleGoCreateChampionship = useCallback(() => {
    navigate('selectedPlayers')
  }, [])

  const handleGoDetailsChampionship = useCallback(() => {
    console.log('test')
  }, [])

  return (
    <Background color={theme.colors.gray[700]}>
      <Background.Padding>
        <Title title="Gerenciamento de Rachas" />
        <TitleFlatlist title="Rachas" value={3} />
        <FlatList
          data={list}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <CardFlatlist
              name="Racha - 01/03/2019"
              onPress={handleGoDetailsChampionship}
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
