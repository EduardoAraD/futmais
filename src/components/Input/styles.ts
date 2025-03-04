import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    borderRadius: 6,
    backgroundColor: theme.colors.gray[600],
    paddingHorizontal: 16,
    gap: 10,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.gray[600],
  },
  input: {
    fontFamily: theme.fonts.rajdhani.regular,
    fontSize: 16,
    color: theme.colors.white,
    flex: 1,
  },
  focus: {
    borderColor: theme.colors.gray[200],
  }
})