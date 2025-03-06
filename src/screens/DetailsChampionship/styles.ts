import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {},
  scroll: {
    paddingBottom: 40,
  },
  subtitle: {
    fontFamily: theme.fonts.rajdhani.semibold,
    fontSize: 16,
    color: theme.colors.white,
    marginTop: 30,
  },
  playerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 8,
    marginTop: 5,
    backgroundColor: theme.colors.gray[500],
  },
  player: {
    fontFamily: theme.fonts.rajdhani.regular,
    fontSize: 20,
    color: theme.colors.white,
  },
  textClub: {
    fontFamily: theme.fonts.oxanium.bold,
    fontSize: 20,
    color: theme.colors.white,
  },
})