import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    height: 360,
    width: '100%',
    flexDirection: 'row',
    gap: 72,
    marginTop: -60
  },
  line: {
    height: 400,
    width: 54,
    opacity: 0.1,
    transform: [{ rotate: '35deg' }]
  },
})
