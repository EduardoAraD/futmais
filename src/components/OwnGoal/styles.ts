import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[500],
    gap: 4,
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  text: {
    fontFamily: theme.fonts.rajdhani.semibold,
    fontSize: 14,
    color: theme.colors.white,
  },
  touch: {
    padding: 4,
  },
})