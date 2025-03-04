import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    gap: 40,
  },
  scroll: {
    paddingTop: 40,
    gap: 40,
    paddingBottom: 40,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  touch: {
    height: 180,
    width: 140,
    backgroundColor: theme.colors.gray[400],
    gap: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 120,
  },
  player: {
    fontFamily: theme.fonts.rajdhani.semibold,
    fontSize: 20,
    color: theme.colors.white,
  },
})