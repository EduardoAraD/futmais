import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Init } from '../screens/Init'
import { TabRoutes } from './tab.routes'

type AppRoutesProps = {
  init: undefined
  home: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesProps>()

export type AppRoutesNavigationProps = NativeStackNavigationProp<AppRoutesProps>

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="init"
    >
      <Screen name="init" component={Init} />
      <Screen name='home' component={TabRoutes} />
    </Navigator>
  )
}

