import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
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
})