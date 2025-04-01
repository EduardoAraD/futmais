import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[600],
    height: '60%',
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    overflow: 'hidden',
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.fonts.rajdhani.regular,
    color: theme.colors.white,
    fontSize: 20,
    marginTop: 15,
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
  scroll: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  contentScroll: {
    gap: 10,
  }
})