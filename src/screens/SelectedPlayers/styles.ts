import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {},
  scroll: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  content: {
    marginTop: 30,
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.gray[400],
    borderRadius: 10,
  },
  title: {
    fontFamily: theme.fonts.rajdhani.bold,
    fontSize: 16,
    color: theme.colors.white,
    textAlign: 'center',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60,
    paddingHorizontal: 10,
  },
  touch: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
  },
  textOption: {
    textAlign: 'center',
    width: 90,
    fontFamily: theme.fonts.rajdhani.bold,
    fontSize: 36,
    color: theme.colors.white,
  },
})