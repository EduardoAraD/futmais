import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  },
  text: {
    fontFamily: theme.fonts.rajdhani.bold,
    fontSize: 16,
    color: theme.colors.white,
  },
})
