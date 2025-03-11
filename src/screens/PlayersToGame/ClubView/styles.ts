import { StyleSheet } from "react-native";
import theme from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 25,
  },
  content: {
    borderRadius: 10,
    gap: 2,
    overflow: 'hidden',
  },
  title: {
    fontFamily: theme.fonts.oxanium.bold,
    fontSize: 20,
    color: theme.colors.white,
  },
  titleView: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.darkPrimary,
    marginBottom: -2,
  },
  text: {
    fontFamily: theme.fonts.rajdhani.regular,
    fontSize: 16,
    color: theme.colors.white,
  },
  textView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.gray[500],
    height: 30,
  },
})