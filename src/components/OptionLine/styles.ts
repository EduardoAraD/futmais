import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    borderColor: theme.colors.white,
    borderBottomWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontFamily: theme.fonts.rajdhani.regular,
    color: theme.colors.white,
    fontSize: 18,
  },
  nameSelected: {
    fontFamily: theme.fonts.rajdhani.semibold,
    color: theme.colors.primary,
    fontSize: 18,
  }
})