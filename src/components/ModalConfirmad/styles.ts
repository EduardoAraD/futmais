import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[600],
    padding: 30,
    borderRadius: 20,
    gap: 40,
    width: '80%',
  },
  touchClose: {
    height: 30,
    width: 30,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
    marginTop: -10,
    alignSelf: 'flex-end',
  },
  title: {
    fontFamily: theme.fonts.rajdhani.bold,
    fontSize: 20,
    color: theme.colors.white,
    textAlign: 'center',
    marginTop: -40,
  },
  text: {
    fontFamily: theme.fonts.rajdhani.regular,
    fontSize: 16,
    color: theme.colors.white,
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    gap: 10
  },
})
