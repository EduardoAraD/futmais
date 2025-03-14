import AsyncStorage from "@react-native-async-storage/async-storage";

import { Championship, ChampionshipResume } from "../../Model/chempionship";
import { StatsWithPlayer } from "../../Model/stats";
import { KEY_LIST_CHAMPIONSHIP, KEY_PLAYERS_CHAMPIONSHIP, KEY_STATS_CHAMPIONSHIP } from "./database";
import { getListPlayersAS } from "./player";
import { emptyPlayer, PlayerWithClub, PlayerWithClubResume } from "../../Model/players";

export async function saveAllChampionshipAS(
  { championships }: { championships: ChampionshipResume[]}
) {
  await AsyncStorage.setItem(KEY_LIST_CHAMPIONSHIP, JSON.stringify(championships))
}
export async function getAllChampionshipAS(): Promise<ChampionshipResume[]> {
  const response = await AsyncStorage.getItem(KEY_LIST_CHAMPIONSHIP)
  if(response !== null) {
    const championships = JSON.parse(response) as ChampionshipResume[]
    return championships
  }
  return []
}

export async function saveNewChampionshipAS(
  { championship }: { championship: Championship }
) {
  const { players, playersReserve } = championship
  const championshipReseume: ChampionshipResume = {
    id: championship.id,
    status: championship.status,
    date: championship.date,
  }

  const list = await getAllChampionshipAS()

  await Promise.all([
    saveAllChampionshipAS({ championships: [...list, championshipReseume ]}),
    savePlayersChampionshipAS({
      playersClub: players, playersReserve, idChampionship: championship.id
    }),
  ])
}
export async function getChampionshipAS(
  { idChampionship }: { idChampionship: string }
): Promise<Championship | undefined> {
  const championships = await getAllChampionshipAS()

  const championship = championships.find(item => item.id === idChampionship)
  if(championship === undefined) return undefined

  const stats = await getStatsChampionshipAS({ idChampionship })
  const { playersClub, playersReserve } = await getPlayersChamíonshipAS({ idChampionship })

  return {
    ...championship,
    players: playersClub,
    playersReserve,
    stats, 
  }
}

export async function saveStatsChampionshipAS(
  { idChampionship, stats }: { idChampionship: string, stats: StatsWithPlayer[] }
) {
  await AsyncStorage.setItem(
    `${KEY_STATS_CHAMPIONSHIP}-${idChampionship}`,
    JSON.stringify(stats)
  );
}
export async function getStatsChampionshipAS(
  { idChampionship }: { idChampionship: string }
): Promise<StatsWithPlayer[]> {
  const response = await AsyncStorage.getItem(`${KEY_STATS_CHAMPIONSHIP}-${idChampionship}`)
  if(response !== null) {
    const stats = JSON.parse(response) as StatsWithPlayer[]
    return stats
  }
  return []
}

interface PlayersChampionship {
  playersClub: PlayerWithClubResume[]
  playersReserve: string[]
}
interface SavePlayersChampionshipProps extends PlayersChampionship {
  idChampionship: string
}
export async function savePlayersChampionshipAS(
  { idChampionship, playersClub, playersReserve }: SavePlayersChampionshipProps
) {
  const obj: PlayersChampionship = {
    playersClub,
    playersReserve,
  }
  await AsyncStorage.setItem(
    `${KEY_PLAYERS_CHAMPIONSHIP}-${idChampionship}`,
    JSON.stringify(obj)
  );
}
export async function getPlayersChamíonshipAS(
  { idChampionship }: { idChampionship: string }
): Promise<PlayersChampionship> {
  const response = await AsyncStorage.getItem(`${KEY_PLAYERS_CHAMPIONSHIP}-${idChampionship}`)
  if(response !== null) {
    const players = JSON.parse(response) as PlayersChampionship
    return players
  }
  return {
    playersClub: [],
    playersReserve: [],
  }
}
