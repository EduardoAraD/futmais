import { Image, Platform, StyleSheet, Text } from 'react-native'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import { ChampionshipRoutes } from './routesStack/championship.routes'
import { Game } from '../screens/Game'
import { PlayerRoutes } from './routesStack/player.routes'

import theme from '../theme'
import championshipImg from '../assets/racha.png'

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
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: {
          backgroundColor: theme.colors.gray[500],
          // height: Platform.OS === 'android' ? 60 : 90,
          // position: 'absolute',
          // marginHorizontal: 20,
          // paddingTop: 4,
          // bottom: Platform.OS === 'android' ? 20 : 25,
          // borderRadius: 99,
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
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.textSelect : styles.text}>Jogadores</Text>
          ),
        }}
      />
      <Tab.Screen
        name='rachaTab'
        component={ChampionshipRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={championshipImg}
              alt="racha"
              style={{
                height: size,
                width: size,
                tintColor: color,
                objectFit: 'contain',
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.textSelect : styles.text}>Rachas</Text>
          ),
        }}
      />
      <Tab.Screen
        name="currentGame"
        component={Game}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="play" size={size} color={color} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.textSelect : styles.text}>Jogo</Text>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.rajdhani.regular,
    fontSize: 12,
  },
  textSelect: {
    color: theme.colors.white,
    fontFamily: theme.fonts.rajdhani.bold,
    fontSize: 12,
  },
})