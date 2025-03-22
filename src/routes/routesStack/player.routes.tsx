import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import { DetailsPlayer, DetailsPlayerRouteParams } from '../../screens/DetailsPlayer'
import { Players } from '../../screens/Players'
import { CreatePlayer, CreatePlayerRouteParams } from '../../screens/CreatePlayer'
import { EditStatsPlayer, EditStatsRouteParams } from '../../screens/EditStatsPlayer'

type PlayerRoutesType = {
  players: undefined
  detailsPlayer: DetailsPlayerRouteParams
  createPlayer: CreatePlayerRouteParams
  editStats: EditStatsRouteParams
}

const { Navigator, Screen } = createNativeStackNavigator<PlayerRoutesType>()

export type PlayerRoutesProps =
  NativeStackNavigationProp<PlayerRoutesType>

export function PlayerRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="players" component={Players} />
      <Screen name="detailsPlayer" component={DetailsPlayer} />
      <Screen name="createPlayer" component={CreatePlayer} />
      <Screen name="editStats" component={EditStatsPlayer} />
    </Navigator>
  )
}
