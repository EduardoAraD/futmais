import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.gray[500],
    borderRadius: 8,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 10,
    paddingTop: 6,
    paddingBottom: 4,
  },
  name: {
    fontFamily: theme.fonts.rajdhani.bold,
    color: theme.colors.primary,
    fontSize: 16,
    flex: 1,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 4,
    paddingBottom: 6,
    gap: 20,
  },
  itemStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  textStats: {
    fontFamily: theme.fonts.rajdhani.bold,
    color: theme.colors.white,
    fontSize: 16,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: theme.colors.white,
  },
  image: {
    height: 14,
    width: 14,
    tintColor: theme.colors.white,
  }
})