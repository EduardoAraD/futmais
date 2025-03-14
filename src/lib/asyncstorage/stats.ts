import AsyncStorage from "@react-native-async-storage/async-storage";

import { KEY_STATS_PLAYER } from "./database";
import { emptyStats, Stats } from "../../Model/stats";

export async function getStatsAS({ idPlayer }: { idPlayer: string }) {
  const response = await AsyncStorage.getItem(`${KEY_STATS_PLAYER}${idPlayer}`)

  if(response) {
    const stats = JSON.parse(response) as Stats
    return stats
  }

  return emptyStats
}