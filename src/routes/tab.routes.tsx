import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import { ChampionshipRoutes } from './routesStack/championship.routes'
import { Game } from '../screens/Game'
import { PlayerRoutes } from './routesStack/player.routes'

import theme from '../theme'

export type TabRoutes = {
  playerTab: undefined
  rachaTab: undefined
  currentGame: undefined
}

const Tab = createBottomTabNavigator<TabRoutes>()

export type TabNavigatorRoutesProps = BottomTabNavigationProp<TabRoutes>

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerBackgroundContainerStyle: {
          backgroundColor: theme.colors.darkPrimary,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.gray[500],
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="playerTab"
        component={PlayerRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),
          tabBarLabel: 'Jogadores',
        }}
      />
      <Tab.Screen
        name='rachaTab'
        component={ChampionshipRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="bold" size={size} color={color} />
          ),
          tabBarLabel: 'Rachas',
        }}
      />
      <Tab.Screen
        name="currentGame"
        component={Game}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="play" size={size} color={color} />
          ),
          tabBarLabel: 'Jogo',
        }}
      />
    </Tab.Navigator>
  )
}
