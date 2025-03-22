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
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  image: {
    tintColor: theme.colors.white,
    width: 36,
    height: 36,
    objectFit: 'contain',
  },
})