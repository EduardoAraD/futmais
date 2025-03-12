export interface StatsPlayer {
  goal: number
  assistence: number
  mvp: number
  pp: number
}

export interface StatsPlayerComplete extends StatsPlayer {
  sumStars: number
  numberChampionship: number
}

export const emptyStatsPlayer: StatsPlayer = {
  goal: 0,
  assistence: 0,
  mvp: 0,
  pp: 0,
}

export const emptyStatsPlayerComplete: StatsPlayerComplete = {
  ...emptyStatsPlayer,
  sumStars: 0,
  numberChampionship: 0,
}

