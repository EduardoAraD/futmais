import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import { Championship } from '../../screens/Championship'
import { SelectedPlayers } from '../../screens/SelectedPlayers'
import { PrizeDown } from '../../screens/PrizeDawn'

type ChampionshipRoutesType = {
  championship: undefined
  selectedPlayers: undefined
  prizeDawn: undefined
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
    </Navigator>
  )
}
