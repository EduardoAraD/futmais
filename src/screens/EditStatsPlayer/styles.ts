import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {},
  content: {
    marginTop: 20,
    gap: 6,
  },
  title: {
    marginTop: 40,
    fontFamily: theme.fonts.oxanium.bold,
    color: theme.colors.white,
    fontSize: 18,
    textAlign: 'center',
  },
  scroll: {
    paddingBottom: 40,
  },
})