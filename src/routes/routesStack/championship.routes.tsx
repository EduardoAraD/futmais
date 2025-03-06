import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import { Championship } from '../../screens/Championship'
import { DetailsChampionship } from '../../screens/DetailsChampionship'
import { PrizeDown } from '../../screens/PrizeDawn'
import { SelectedPlayers } from '../../screens/SelectedPlayers'

type ChampionshipRoutesType = {
  championship: undefined
  selectedPlayers: undefined
  prizeDawn: undefined
  detailsChampionship: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<ChampionshipRoutesType>()

export type ChampionshipRoutesProps =
  NativeStackNavigationProp<ChampionshipRoutesType>

export function ChampionshipRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="championship" component={Championship} />
      <Screen name="selectedPlayers" component={SelectedPlayers} />
      <Screen name="prizeDawn" component={PrizeDown} />
      <Screen name="detailsChampionship" component={DetailsChampionship} />
    </Navigator>
  )
}
