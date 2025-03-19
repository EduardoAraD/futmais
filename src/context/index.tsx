import { ReactNode } from 'react'

import { ChampionshipProvider } from './championship'

interface Props {
  children: ReactNode
}

export function ProvidersApp({ children }: Props) {
  return (
    <ChampionshipProvider>
      {children}
    </ChampionshipProvider>
  )
}
