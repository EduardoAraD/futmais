import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[600],
    height: '80%',
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    overflow: 'hidden',
    borderRadius: 20,
  },
  scroll: {
    marginTop: 15,
    marginBottom: 30,
    gap: 10,
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.fonts.rajdhani.bold,
    color: theme.colors.white,
    fontSize: 20,
  },
  touchClose: {
    height: 30,
    width: 30,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
    marginTop: -10,
    alignSelf: 'flex-end',
  },
  content: {
    marginBottom: 20,
    gap: 4,
  },
  viewHorizontal: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  playerSelectView: {
    width: '100%',
    backgroundColor: theme.colors.gray[500],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingRight: 6,
    borderRadius: 6,
  },
  playerSelect: {
    fontFamily: theme.fonts.rajdhani.regular,
    fontSize: 16,
    color: theme.colors.white,
  },
  touch: {
    padding: 6,
  },
  subtitle: {
    fontFamily: theme.fonts.rajdhani.medium,
    fontSize: 16,
    color: theme.colors.white,
    textAlign: 'center',
  },
  touchClub: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  touchClubText: {
    fontFamily: theme.fonts.oxanium.bold,
    fontSize: 16,
    color: theme.colors.white,
  },
  playerView: {
    width: '100%',
    backgroundColor: theme.colors.gray[500],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 6,
  },
  player: {
    fontFamily: theme.fonts.rajdhani.regular,
    fontSize: 14,
    color: theme.colors.white,
  },
  club: {
    fontFamily: theme.fonts.oxanium.medium,
    fontSize: 14,
    color: theme.colors.white,
  },
})