export type RolePlayer = 'Goalkeeper' | 'Player'

export interface Player {
  id: string
  name: string
  role: RolePlayer
  stars: number
  disabled: boolean
}

export const emptyPlayer: Player = {
  id: '-1',
  name: '',
  role: 'Player',
  stars: 0,
  disabled: false,
} 