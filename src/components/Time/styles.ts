import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  timer: {
    fontFamily: theme.fonts.oxanium.bold,
    color: theme.colors.white,
    fontSize: 64,
  },
  bar: {
    height: 20,
    backgroundColor: theme.colors.gray[400],
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -8,
    overflow: 'hidden',
  },
  textBar: {
    fontFamily: theme.fonts.oxanium.bold,
    color: theme.colors.white,
    fontSize: 14,
    zIndex: 5,
  },
  barGreen: {
    backgroundColor: theme.colors.green,
    height: 20,
    position: 'absolute',
    left: 0,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    gap: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  timeView: {
    flexDirection: 'row',
  },
  timeExtra: {
    fontFamily: theme.fonts.oxanium.bold,
    color: theme.colors.white,
    fontSize: 20,
  },
  touch: {
    backgroundColor: theme.colors.green,
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontFamily: theme.fonts.rajdhani.medium,
    color: theme.colors.white,
    fontSize: 14,
  },
})