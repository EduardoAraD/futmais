import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 10,
    gap: 2,
  },
  title: {
    fontFamily: theme.fonts.oxanium.bold,
    color: theme.colors.white,
    fontSize: 20,
  },
  titleView: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  starView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueTitle: {
    fontFamily: theme.fonts.rajdhani.bold,
    color: theme.colors.white,
    fontSize: 20,
  },
  content: {
    backgroundColor: theme.colors.gray[500],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  text: {
    fontFamily: theme.fonts.rajdhani.medium,
    color: theme.colors.white,
    fontSize: 16,
  },
})