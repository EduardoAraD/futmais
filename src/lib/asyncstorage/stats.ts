import AsyncStorage from "@react-native-async-storage/async-storage";

import { KEY_STATS_PLAYER } from "./database";
import { emptyStats, Stats } from "../../model/stats";

export async function getStatsExtraToPlayerAS({ idPlayer }: { idPlayer: string }) {
  const response = await AsyncStorage.getItem(`${KEY_STATS_PLAYER}${idPlayer}`)

  if(response) {
    const stats = JSON.parse(response) as Stats
    return stats
  }

  return emptyStats
}

export async function saveStatsExtraToPlayerAS(
  { idPlayer, stats }: { idPlayer: string, stats: Stats }
) {
  await AsyncStorage.setItem(`${KEY_STATS_PLAYER}${idPlayer}`, JSON.stringify(stats))
}