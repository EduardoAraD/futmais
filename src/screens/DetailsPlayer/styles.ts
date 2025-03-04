import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 20,
    marginTop: -20,
    marginBottom: -10,
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
    height: 260,
    width: 260,
    marginLeft: -80,
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
    paddingTop: 40,
    paddingBottom: 40,
  },
})