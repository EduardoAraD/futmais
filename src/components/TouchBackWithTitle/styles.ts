import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingRight: 36,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    flex: 1,
    color: theme.colors.white,
    fontFamily: theme.fonts.rajdhani.bold,
    fontSize: 20,
  },
})