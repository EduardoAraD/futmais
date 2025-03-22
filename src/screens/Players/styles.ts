import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {},
  title: {
    textAlign: 'center',
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fonts.rajdhani.bold,
  },
  content: {
    flexDirection: 'row',
    paddingTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 6,
  },
  textFlat: {
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: theme.fonts.rajdhani.bold,
  },
  touch: {
    height: 72,
    width: 72,
    backgroundColor: theme.colors.primary,
    borderRadius: 37,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  scroll: {
    paddingBottom: 20,
  },
})