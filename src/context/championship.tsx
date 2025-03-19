import { createContext, ReactNode, useCallback, useState } from 'react'

import { ChampionshipComplete } from '../model/chempionship'
import { GameCurrent } from '../model/gameCurrent'

interface ChampionshipProviderProps {
  children: ReactNode
}

type ChampionshipContextProps = {
  championship: ChampionshipComplete | null
  gameCurrent: GameCurrent | null
  // loading: boolean
  createGameCurrent: (game: GameCurrent) => void
  endGameCurrent: () => void
  createChampionship: (championship: ChampionshipComplete) => void
}

export const ChampionshipContext = createContext<ChampionshipContextProps>(
  {} as ChampionshipContextProps,
)

export function ChampionshipProvider({ children }: ChampionshipProviderProps) {
  const [championship, setChampionship] = useState<ChampionshipComplete | null>(null)
  const [gameCurrent, setGameCurrent] = useState<GameCurrent | null>(null)
  // const [loading, setLoading] = useState(true)

  const createGameCurrent = useCallback((game: GameCurrent) => {
    setGameCurrent(game);
  }, [])

  const endGameCurrent = useCallback(() => {
    setGameCurrent(null)
  }, [])

  const createChampionship = useCallback((championship: ChampionshipComplete) => {
    setChampionship(championship)
  }, [])

  return (
    <ChampionshipContext.Provider
      value={{
        // loading,
        championship,
        gameCurrent,
        createChampionship,
        endGameCurrent,
        createGameCurrent,
      }}
    >
      {children}
    </ChampionshipContext.Provider>
  )
}
