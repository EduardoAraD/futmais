import { PlayerWithStats } from "../model/players";

export function sortListPlayerWithStats(list: PlayerWithStats[]) {
  return list.sort((a, b) => {
    if(a.stats.mvp > b.stats.mvp) return -1
    else if(a.stats.mvp < b.stats.mvp) return 1

    if(a.stats.pp < b.stats.pp) return -1
    else if(a.stats.pp > b.stats.pp) return 1

    else {
      if(a.stats.sumStars > b.stats.sumStars) return -1
      else if(a.stats.sumStars < b.stats.sumStars) return 1

      else {
        const partGoalsA = a.stats.goal + a.stats.assistence
        const partGoalsB = b.stats.goal + b.stats.assistence
        if (partGoalsA > partGoalsB) return -1
        else if (partGoalsA < partGoalsB) return 1
        
        else {
          if (a.stats.games > b.stats.games) return -1
          else return a.stats.games < b.stats.games ? 1 : 0
        }
      }
    }
  })
}