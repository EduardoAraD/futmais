import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.gray[500],
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  select: {
    backgroundColor: theme.colors.primary,
  },
  text: {
    flex: 1,
    color: theme.colors.white,
    fontFamily: theme.fonts.rajdhani.medium,
    fontSize: 16,
  },
})
