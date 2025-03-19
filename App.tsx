import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'
import {
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_600SemiBold,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani'
import { Oxanium_700Bold, Oxanium_500Medium } from '@expo-google-fonts/oxanium'
import { Routes } from './src/routes';
import theme from './src/theme';
import { ProvidersApp } from './src/context';

export default function App() {
  const [loaded, error] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_600SemiBold,
    Rajdhani_700Bold,
    Oxanium_500Medium,
    Oxanium_700Bold,
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  
  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ProvidersApp>
        <Routes />
      </ProvidersApp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.darkPrimary,
  },
});
