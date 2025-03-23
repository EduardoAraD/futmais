import { Stats } from "./stats"

export type RolePlayer = 'Goalkeeper' | 'Player'

export interface Player {
  id: string
  name: string
  role: RolePlayer
  stars: number
  disabled: boolean
}

export interface PlayerWithClubResume {
  idPlayer: string
  clubIndex: number
}

export interface PlayerWithClub extends Player {
  clubIndex: number
}

export interface PlayerInGame {
  player: Player
  goal: number
  assistence: number
  ownGoal: number
}

export interface PlayerWithStats {
  player: Player
  stats: Stats
}

export const emptyPlayer: Player = {
  id: '-1',
  name: '',
  role: 'Player',
  stars: 0,
  disabled: false,
}
