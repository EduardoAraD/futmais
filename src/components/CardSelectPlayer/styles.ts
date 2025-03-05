import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.gray[400],
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: theme.fonts.rajdhani.medium,
    fontSize: 20,
    color: theme.colors.white,
  },
  touch: {
    padding: 6,
  },
})