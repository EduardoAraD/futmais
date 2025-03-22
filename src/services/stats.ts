import { getStatsChampionshipAS } from "../lib/asyncstorage/championship";
import { getStatsExtraToPlayerAS, saveStatsExtraToPlayerAS } from "../lib/asyncstorage/stats";
import { emptyStats, emptyStatsComplete, Stats, StatsComplete, StatsWithPlayer } from "../model/stats";
import { getAllChampionshipsServices } from "./championship";

export async function getAllStatsInChampionshipToPlayerServices({ idPlayer }: { idPlayer: string }) {
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

export async function getStatsExtraToPlayerServices({ idPlayer }: { idPlayer: string }) {
  const statsAdd = await getStatsExtraToPlayerAS({ idPlayer })
  return statsAdd
}

export async function getAllStatsToPlayerIdServices({ idPlayer }: { idPlayer: string }) {
  const statsChampionship = await getAllStatsInChampionshipToPlayerServices({ idPlayer })
  const statsExtra = await getStatsExtraToPlayerServices({ idPlayer })

  const stats: StatsComplete = {
    assistence: statsChampionship.assistence + statsExtra.assistence,
    games: statsChampionship.games + statsExtra.games,
    goal: statsChampionship.goal + statsExtra.goal,
    mvp: statsChampionship.mvp + statsExtra.mvp,
    numberChampionship: statsChampionship.numberChampionship,
    pp: statsChampionship.pp + statsExtra.pp,
    sumStars: statsChampionship.sumStars + statsExtra.sumStars,
  }
  return stats
}

export async function saveStatsExtraToPlayerServices(
  data: { stats: Stats, idPlayer: string}
) {
  await saveStatsExtraToPlayerAS(data)
}