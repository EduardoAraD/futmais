import { SafeAreaView, Text, View } from 'react-native'

import { LineBackground } from '../LineBackground';

import { styles } from './styles'

interface Props {
  color: string
  children: React.ReactNode
}

export function Background({ color, children }: Props ) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <LineBackground color={color} />
      <SafeAreaView style={styles.safe}>
        <View style={{flex: 1, padding: 30 }}>
          {children}
        </View>
      </SafeAreaView>
    </View>
  )
}
