import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  touch: {
    height: 72,
    width: 72,
    backgroundColor: theme.colors.primary,
    borderRadius: 37,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
})