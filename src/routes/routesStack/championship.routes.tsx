import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import { Championship } from '../../screens/Championship'
import { DetailsChampionship, DetailsChampionshipRouteParams } from '../../screens/DetailsChampionship'
import { PrizeDown, PrizeDownRouteParams } from '../../screens/PrizeDawn'
import { SelectedPlayers } from '../../screens/SelectedPlayers'
import { PlayersToGame } from '../../screens/PlayersToGame'
import { NotesPlayers } from '../../screens/NotesPlayers'
import { StatsChampionship, StatsChampionshipRouteParams } from '../../screens/StatsChampionship'

type ChampionshipRoutesType = {
  championship: undefined
  selectedPlayers: undefined
  prizeDawn: PrizeDownRouteParams
  detailsChampionship: DetailsChampionshipRouteParams
  playersGame: undefined
  notesPlayers: undefined
  statsChampionship: StatsChampionshipRouteParams
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
      <Screen name="playersGame" component={PlayersToGame} />
      <Screen name='notesPlayers' component={NotesPlayers} />
      <Screen name='statsChampionship' component={StatsChampionship} />
    </Navigator>
  )
}
