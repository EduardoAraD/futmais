import { SafeAreaView, View } from 'react-native'

import { LineBackground } from '../LineBackground';

import { styles } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  color: string
  children: React.ReactNode
}

function Background({ color, children }: Props ) {
  const { top } = useSafeAreaInsets()

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <LineBackground color={color} />
      <SafeAreaView style={[styles.safe, { paddingTop: top }]}>
        {children}
      </SafeAreaView>
    </View>
  )
}

interface PaddingProps {
  children: React.ReactNode
}

function Padding({ children }: PaddingProps) {
  return (
    <View style={{flex: 1, padding: 20 }}>
      {children}
    </View>
  )
}

Background.Padding = Padding
export { Background }
