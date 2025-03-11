import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[600],
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    overflow: 'hidden',
    borderRadius: 20,
    gap: 20,
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
    textAlign: 'center',
    color: theme.colors.white,
  },
  content: {
    backgroundColor: theme.colors.gray[500],
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 12,
    gap: 20,
  },
  statsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitle: {
    fontFamily: theme.fonts.rajdhani.medium,
    fontSize: 18,
    color: theme.colors.white,
  },
  value: {
    fontFamily: theme.fonts.oxanium.bold,
    fontSize: 18,
    color: theme.colors.white,
  },
})
