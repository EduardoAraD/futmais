import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'
import {
  Rajdhani_400Regular,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani'
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Init } from './src/screens/Init';

export default function App() {
  const [loaded, error] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
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
      <Init />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
