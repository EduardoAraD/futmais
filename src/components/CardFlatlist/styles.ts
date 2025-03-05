import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
  },
  text: {
    fontFamily: theme.fonts.rajdhani.regular,
    fontSize: 18,
    color: theme.colors.white,
    flex: 1,
  },
})