import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  contentStats: {
    flexDirection: 'row',
    gap: 10,
  },
  stats: {
    gap: 5,
    flex: 1,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  touch: {
    height: 64,
    width: 64,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  touchDisabled: {
    backgroundColor: theme.colors.gray[400]
  }
})