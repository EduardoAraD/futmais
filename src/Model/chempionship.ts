import { PlayerWithClubResume } from "./players"
import { StatsWithPlayer } from "./stats"

export type StatusChampionship = 'current' | 'final'

export interface Championship {
  id: string
  date: string
  status: StatusChampionship
  players: PlayerWithClubResume[]
  playersReserve: string[]
  stats: StatsWithPlayer[]
}

export interface ChampionshipResume {
  id: string
  date: string
  status: StatusChampionship
}

export const emptyChampionship: Championship = {
  id: '-1',
  date: '2025-01-01',
  status: 'current',
  players: [],
  playersReserve: [],
  stats: [],
}
