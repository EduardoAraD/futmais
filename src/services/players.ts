import { createPlayerAS, getListPlayersAS, getPlayerAS, changeDisabledPlayerAS, saveListPlayersAS } from "../lib/asyncstorage/player";

import { Player } from "../model/players";
import { StatsComplete } from "../model/stats";
import { getAllStatsToPlayerIdServices } from "./stats";

export async function getAllPlayersServices() {
  const list = await getListPlayersAS()

  return list
}

export async function createPlayerServices(player: Player) {
  await createPlayerAS({ player })
}

interface ResponseDetailsPlayer {
  stats: StatsComplete
  player: Player
}
export async function getDetailsPlayerService({ idPlayer }: { idPlayer: string }): Promise<ResponseDetailsPlayer | null> {
  const player = await getPlayerAS({ idPlayer })
  if(!player) {
    return null
  }

  const stats = await getAllStatsToPlayerIdServices({ idPlayer })

  return { player, stats }
}

export async function changeDisablePlayerService({ idPlayer }: { idPlayer: string }) {
  await changeDisabledPlayerAS({ idPlayer })
}

export async function hasExistingNamePlayer({ newName, nameOld }: { newName: string, nameOld: string }) {
  if(newName === nameOld) { return false }

  const list = await getAllPlayersServices()

  return list.find(item => item.name === newName) !== undefined
}

export async function editPlayerServices({ player }: { player: Player }) {
  const list = await getAllPlayersServices()
  const newList = list.map(item => item.id === player.id ? player : item)

  await saveListPlayersAS({ players: newList })
}