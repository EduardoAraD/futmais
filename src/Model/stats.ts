export interface Stats {
  goal: number
  assistence: number
  mvp: number
  pp: number
}

export interface StatsComplete extends Stats {
  sumStars: number
  numberChampionship: number
}

export const emptyStats: Stats = {
  goal: 0,
  assistence: 0,
  mvp: 0,
  pp: 0,
}

export const emptyStatsComplete: StatsComplete = {
  ...emptyStats,
  sumStars: 0,
  numberChampionship: 0,
}

export interface StatsWithPlayer extends Stats {
  idPlayer: string
}
