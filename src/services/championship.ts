import * as Crypto from 'expo-crypto'

import { Championship, ChampionshipResume } from "../model/chempionship"
import { Player, PlayerWithClub, PlayerWithClubResume } from '../model/players'
import { Club } from '../model/club'
import { getAllChampionshipAS, getChampionshipAS, getPlayersChampionshipAS, saveAllChampionshipAS, saveNewChampionshipAS, savePlayersChampionshipAS, saveStatsChampionshipAS } from '../lib/asyncstorage/championship'
import { getListPlayersAS } from '../lib/asyncstorage/player'
import { StatsWithPlayer } from '../model/stats'

export async function getAllChampionshipsServices() {
  return await getAllChampionshipAS()
}

export async function createNewChampionshipServices(
  { clubs, qtdPlayersForClub }: { clubs: Club[], qtdPlayersForClub: number }
) {
  const players: PlayerWithClubResume[] = []
  clubs.forEach((club, index) => {
    club.players.forEach((item) => {
      players.push({ idPlayer: item.id, clubIndex: index })
    })
  })

  const newChampionship: Championship = {
    id: Crypto.randomUUID(),
    date: new Date().toISOString(),
    status: 'current',
    qtdPlayersForClub,
    players,
    playersReserve: [],
    stats: [],
  }

  await saveNewChampionshipAS({ championship: newChampionship })
}

export async function getChampionshipCompleteServices(
  { idChampionship }: { idChampionship: string }
) {
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
    qtdPlayersForClub: championship.qtdPlayersForClub,
    playersClub,
    playersReserve,
    stats: championship.stats,
  }
}

export async function addPlayersReserveChampionshipServices(
  { newPlayers, idChampionship }: { newPlayers: Player[], idChampionship: string }
) {
  const players = await getPlayersChampionshipAS({ idChampionship })
  const idPlayers = newPlayers.map(item => item.id)

  await savePlayersChampionshipAS({
    playersClub: players.playersClub,
    playersReserve: [...players.playersReserve, ...idPlayers],
    idChampionship,
  })
}

export async function saveStatsChampionshipServices(
  { stats, idChampionship }: { stats: StatsWithPlayer[], idChampionship: string }
) {
  await saveStatsChampionshipAS({ stats, idChampionship })
}

export async function finishChampionship(
  { stats, idChampionship }: { stats: StatsWithPlayer[], idChampionship: string }
) {
  const listChampions = await getAllChampionshipsServices()
  const newList: ChampionshipResume[] = listChampions.map(item => item.id === idChampionship ? 
    { ...item, status: 'final' } : item
  )
  await saveAllChampionshipAS({ championships: newList })
  await saveStatsChampionshipAS({ stats, idChampionship })
}
