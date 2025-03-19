import { PlayerInGame, PlayerWithClub, PlayerWithClubResume } from "./players"
import { StatsWithPlayer } from "./stats"

export type StatusChampionship = 'current' | 'final'

export interface Championship {
  id: string
  date: string
  status: StatusChampionship
  qtdPlayersForClub: number
  players: PlayerWithClubResume[]
  playersReserve: string[]
  stats: StatsWithPlayer[]
}

export interface ChampionshipComplete {
  id: string
  date: string
  status: StatusChampionship
  qtdPlayersForClub: number
  players: PlayerWithClub[]
  playersReserve: PlayerWithClub[]
  stats: StatsWithPlayer[]
}

export interface ChampionshipResume {
  id: string
  date: string
  status: StatusChampionship
  qtdPlayersForClub: number
}

export const emptyChampionship: Championship = {
  id: '-1',
  date: '2025-01-01',
  status: 'current',
  players: [],
  playersReserve: [],
  stats: [],
  qtdPlayersForClub: 0,
}
