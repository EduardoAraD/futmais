import * as Crypto from 'expo-crypto'

import { Championship } from "../Model/chempionship"
import { PlayerWithClub, PlayerWithClubResume } from '../Model/players'
import { Club } from '../Model/club'
import { getAllChampionshipAS, getChampionshipAS, getPlayersChamíonshipAS, saveNewChampionshipAS } from '../lib/asyncstorage/championship'
import { getListPlayersAS } from '../lib/asyncstorage/player'

export async function getAllChampionshipsServices() {
  return await getAllChampionshipAS()
}

export async function createNewChampionshipServices({ clubs }: { clubs: Club[] }) {
  const players: PlayerWithClubResume[] = []
  clubs.forEach(club => {
    club.players.forEach((item, index) => {
      players.push({ idPlayer: item.id, clubIndex: index })
    })
  })

  const newChampionship: Championship = {
    id: Crypto.randomUUID(),
    date: new Date().toISOString(),
    status: 'current',
    players,
    playersReserve: [],
    stats: [],
  }

  await saveNewChampionshipAS({ championship: newChampionship })
}

export async function getChampionshipCompleteServices({ idChampionship }: { idChampionship: string }) {
  const championship = await getChampionshipAS({ idChampionship })
  if(championship === undefined) return undefined
  
  const listPlayers = await getListPlayersAS()
  const playersClub: PlayerWithClub[] = championship.players.map(playerClub => {
    const player = listPlayers.find(item => item.id === playerClub.idPlayer)
    if(player !== undefined) {
      return { ...player, clubIndex: playerClub.clubIndex }
    }
    return null
  }).filter(item => item !== null)
  const playersReserve = championship.playersReserve.map(playerReserve => {
    return listPlayers.find(item => item.id === playerReserve)
  }).filter(item => item !== undefined)

  return {
    id: championship.id,
    date: championship.date,
    status: championship.status,
    playersClub,
    playersReserve,
    stats: championship.stats,
  }
}
