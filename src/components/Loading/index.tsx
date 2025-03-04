import { ActivityIndicator, View } from 'react-native'

import theme from '../../theme'
import { styles } from './styles'

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={theme.colors.gray[100]} />
    </View>
  )
}
