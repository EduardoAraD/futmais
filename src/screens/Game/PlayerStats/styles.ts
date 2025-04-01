import { StyleSheet } from "react-native";
import theme from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    // height: 28,
    backgroundColor: theme.colors.gray[500],
    paddingHorizontal: 5,
    // flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
  },
  name: {
    fontFamily: theme.fonts.oxanium.bold,
    fontSize: 14,
    color: theme.colors.white,
    paddingTop: 4,
    paddingBottom: 4,
  },
  content: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontFamily: theme.fonts.rajdhani.bold,
    fontSize: 16,
    color: theme.colors.white,
  },
  action: {
    gap: 2,
    flexDirection: 'row',
  },
  image: {
    height: 12,
    width: 12,
    tintColor: theme.colors.white,
  },
  touchPlus: {
    height: 20,
    width: 20,
    backgroundColor: theme.colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  touchMinus: {
    height: 20,
    width: 20,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
})