import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.gray[500],
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 6,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.fonts.oxanium.bold,
    fontSize: 18,
    color: theme.colors.primary,
  },
})
