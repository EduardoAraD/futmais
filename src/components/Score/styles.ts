import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderBottomWidth: 100,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: theme.colors.gray[700],
    borderLeftColor: 'transparent',
  },
  triangleLeft: {
    borderRightWidth: 20,
    borderLeftWidth: 0,
    marginRight: -20,
    zIndex: 3,
  },
  triangleRight: {
    borderRightWidth: 0,
    borderLeftWidth: 20,
    marginLeft: -20,
  },
  linear: {
    flex: 1,
    height: 100,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  line: {
    width: 5,
    height: 100,
    backgroundColor: theme.colors.gray[700],
  },
  rotateRight: {
    transform: [{ rotate: '10deg' }]
  },
  rotateLeft: {
    transform: [{ rotate: '-10deg' }]
  },
  image: {
    height: 80,
    width: 80,
  },
  score: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textScore: {
    color: theme.colors.white,
    fontFamily: theme.fonts.oxanium.bold,
    fontSize: 50,
    textAlign: 'center',
    width: 60,
    flex: 1,
  },
})