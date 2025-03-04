import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.gray[500],
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 12,
    borderRadius: 99,
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.rajdhani.regular,
    fontSize: 14,
  },
  textSelect: {
    color: theme.colors.white,
    fontFamily: theme.fonts.rajdhani.bold,
    fontSize: 14,
  },
})