import { createContext, ReactNode, useCallback, useState } from 'react'

import { ChampionshipComplete } from '../model/chempionship'
import { GameCurrent } from '../model/gameCurrent'
import { PlayerInGame, PlayerWithClub } from '../model/players'
import { saveStatsChampionshipServices } from '../services/championship'

interface ChampionshipProviderProps {
  children: ReactNode
}

type ChampionshipContextProps = {
  championship: ChampionshipComplete | null
  gameCurrent: GameCurrent | null
  // loading: boolean
  createGameCurrent: (game: GameCurrent) => void
  endGameCurrent: (players: PlayerInGame[]) => Promise<void>
  createChampionship: (championship: ChampionshipComplete) => void
  addPlayerReserve: (newPlayers: PlayerWithClub[]) => void
}

export const ChampionshipContext = createContext<ChampionshipContextProps>(
  {} as ChampionshipContextProps,
)

export function ChampionshipProvider({ children }: ChampionshipProviderProps) {
  const [championship, setChampionship] = useState<ChampionshipComplete | null>(null)
  const [gameCurrent, setGameCurrent] = useState<GameCurrent | null>(null)

  const createGameCurrent = useCallback((game: GameCurrent) => {
    setGameCurrent(game);
  }, [])

  const addPlayerReserve = useCallback((newPlayers: PlayerWithClub[]) => {
    if(championship !== null) {
      setChampionship({
        ...championship,
        playersReserve: [...championship.playersReserve, ...newPlayers]
      })
    }
  }, [championship])

  const endGameCurrent = useCallback(async (players: PlayerInGame[]) => {
    if(championship !== null) {
      const stats = championship.stats
      players.filter(item => {
        const find = stats.findIndex(stat => stat.idPlayer === item.player.id)
        if(find === -1) {
          return stats.push({
            goal: item.goal,
            assistence: item.assistence,
            idPlayer: item.player.id,
            mvp: 0,
            pp: 0,
            sumStars: 0,
            games: 1,
          })
        } else {
          stats[find].assistence += item.assistence,
          stats[find].goal += item.goal
          stats[find].games += 1
        }
      })

      await saveStatsChampionshipServices({ idChampionship: championship.id, stats })
      setChampionship({
        ...championship,
        stats,
      })
    }
    setGameCurrent(null)
  }, [championship])

  const createChampionship = useCallback((championshipComplete: ChampionshipComplete) => {
    setChampionship(championshipComplete)
  }, [])

  return (
    <ChampionshipContext.Provider
      value={{
        // loading,
        championship,
        gameCurrent,
        createChampionship,
        addPlayerReserve,
        endGameCurrent,
        createGameCurrent,
      }}
    >
      {children}
    </ChampionshipContext.Provider>
  )
}
