import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  infoPlayer: {
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  namePlayer: {
    fontFamily: theme.fonts.oxanium.bold,
    fontSize: 32,
    color: theme.colors.white,
  },
  image: {
    height: 180,
    width: 180,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray[600],
    overflow: 'hidden',
    paddingHorizontal: 30,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  scroll: {
    paddingBottom: 20,
  },
  titleFlat: {
    paddingTop: 30,
    fontFamily: theme.fonts.rajdhani.semibold,
    fontSize: 14,
    color: theme.colors.white,
  },
})