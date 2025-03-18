import AsyncStorage from '@react-native-async-storage/async-storage';

import { Player } from "../../model/players";
import { KEY_LIST_PLAYERS } from './database';

export async function getListPlayersAS() {
  const response = await AsyncStorage.getItem(KEY_LIST_PLAYERS)
  if(response) {
    const listPlayers = JSON.parse(response) as Player[]

    return listPlayers
  }

  return []
}

export async function saveListPlayersAS({ players }: { players: Player[] }) {
  await AsyncStorage.setItem(KEY_LIST_PLAYERS, JSON.stringify(players))
}

export async function createPlayerAS({ player }: { player: Player }) {
  const list = await getListPlayersAS()
  await saveListPlayersAS({ players: [...list, player]})
}

export async function getPlayerAS({ idPlayer }: { idPlayer: string }) {
  const list = await getListPlayersAS()

  return list.find(item => item.id === idPlayer)
}

export async function changeDisabledPlayerAS({ idPlayer }: { idPlayer: string }) {
  const list = await getListPlayersAS()

  const players: Player[] = list.map(item => item.id === idPlayer ?
    ({...item, disabled: !item.disabled }) : item
  )
  await saveListPlayersAS({ players })
}