import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    padding: 12,
    gap: 6,
    borderRadius: 20,
    width: '100%',
    overflow: 'hidden',
  },
  secundary: {
    backgroundColor: theme.colors.gold,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 62,
  },
  title: {
    fontFamily: theme.fonts.rajdhani.bold,
    fontSize: 30,
    color: theme.colors.white,
  },
  subTitle: {
    fontFamily: theme.fonts.oxanium.medium,
    fontSize: 10,
    color: theme.colors.white,
  },
})