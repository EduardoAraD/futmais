import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  text: {
    fontFamily: theme.fonts.rajdhani.bold,
    fontSize: 20,
    color: theme.colors.white,
  },
  viewValue: {
    height: 40,
    width: 40,
    borderRadius: 6,
    backgroundColor: theme.colors.gray[500],
    justifyContent: 'center',
    alignItems: 'center',
  },
})