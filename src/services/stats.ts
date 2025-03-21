import { getStatsChampionshipAS } from "../lib/asyncstorage/championship";
import { getStatsAS } from "../lib/asyncstorage/stats";
import { emptyStats, emptyStatsComplete, StatsComplete, StatsWithPlayer } from "../model/stats";
import { getAllChampionshipsServices } from "./championship";

export async function getAllStatsToPlayerIdServices({ idPlayer }: { idPlayer: string }) {
  const championships = await getAllChampionshipsServices()

  const listStats: StatsWithPlayer[] = await Promise.all(championships.map(async champ => {
    const stats = await getStatsChampionshipAS({ idChampionship: champ.id })

    const statsFind = stats.find(item => item.idPlayer === idPlayer)
    if(statsFind !== undefined) {
      return statsFind
    } else {
      return {...emptyStats, idPlayer }
    }
  }))

  const statsAdd = await getStatsAS({ idPlayer })
  listStats.push({ ...statsAdd, idPlayer })

  const statsComplete: StatsComplete = { ...emptyStatsComplete }
  listStats.forEach(stats => {
    statsComplete.assistence += stats.assistence;
    statsComplete.games += stats.games;
    statsComplete.goal += stats.goal
    statsComplete.mvp += stats.mvp
    statsComplete.numberChampionship += stats.games > 0 ? 1 : 0
    statsComplete.pp += stats.pp
    statsComplete.sumStars += stats.sumStars
  })

  return statsComplete
}