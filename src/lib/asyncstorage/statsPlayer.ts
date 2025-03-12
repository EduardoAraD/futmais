import AsyncStorage from "@react-native-async-storage/async-storage";

import { KEY_STATS_PLAYER } from "./database";
import { emptyStatsPlayer, StatsPlayer } from "../../Model/stats";

export async function getStatsPlayerAS({ idPlayer }: { idPlayer: string }) {
  const response = await AsyncStorage.getItem(`${KEY_STATS_PLAYER}${idPlayer}`)

  if(response) {
    const stats = JSON.parse(response) as StatsPlayer
    return stats
  }

  return emptyStatsPlayer
}