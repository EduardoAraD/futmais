import { useContext } from 'react'

import { ChampionshipContext } from '../context/championship'

export function useChampionship() {
  const context = useContext(ChampionshipContext)

  return context
}
