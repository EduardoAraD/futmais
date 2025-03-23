export interface Stats {
  goal: number
  assistence: number
  mvp: number
  pp: number
  sumStars: number
  games: number
  ownGoal: number
}

export interface StatsComplete extends Stats {
  numberChampionship: number
}

export const emptyStats: Stats = {
  goal: 0,
  assistence: 0,
  mvp: 0,
  pp: 0,
  sumStars: 0,
  games: 0,
  ownGoal: 0,
}

export const emptyStatsComplete: StatsComplete = {
  ...emptyStats,
  numberChampionship: 0,
}

export interface StatsWithPlayer extends Stats {
  idPlayer: string
}
