import { Club } from "../Model/club";
import { Player } from "../Model/players";

function optionsClub(clubsSort: Club[], limitPlayer: number) {
  let max = 999999
  let indexClubsOptions: number[] = []

  clubsSort.forEach((club, index) => {
    if (club.players.length < limitPlayer) {
      const points = club.players
        .map((p) => p.stars)
        .reduce(function (accumulator, value) {
          return accumulator + value
        }, 0)

      if (max > points) {
        max = points
        indexClubsOptions = [index]
      } else if (max === points) {
        indexClubsOptions.push(index)
      }
    }
  })
  return indexClubsOptions
}

function chooseClub(indexsClub: number[]): number {
  if (indexsClub.length === 1) {
    return indexsClub[0]
  } else {
    const coeficient = 100 / indexsClub.length

    const numberRandom = Math.random() * 100
    const indexRandomCLub = Math.floor(numberRandom / coeficient)

    return indexsClub[indexRandomCLub]
  }
}

function getWorstPlayer(club: Player[]): Player {
  let star = 6
  let indexPlayer = 0
  club.forEach((item, index) => {
    if (item.stars < star) {
      star = item.stars
      indexPlayer = index
    }
  })

  return club[indexPlayer]
}

export function sortClubsByPlayers(
  { playersForClub, players }: { playersForClub: number, players: Player[]}
): Club[] {
  const numberClubs = Math.ceil(players.length / playersForClub)
  const clubsSort: Club[] = []
  Array.from({ length: numberClubs }).forEach(() => {
    clubsSort.push({ players: [] })
  })

  const playersKey: number[] = []
  while(playersKey.length < numberClubs) {
    const coeficient = 100 / players.length
    const numberRandom = Math.random() * 100
    const indexRandomCLub = Math.floor(numberRandom / coeficient)

    const find = playersKey.find(item => item === indexRandomCLub)
    if(find === undefined) {
      playersKey.push(indexRandomCLub)
    }
  }
  const playersRest: Player[] = []
  players.forEach((player, index) => {
    const findIndex = playersKey.findIndex(item => item === index)
    if(findIndex !== -1) {
      clubsSort[findIndex].players.push(player)
    } else {
      playersRest.push(player)
    }
  })

  playersRest.forEach((player) => {
    const optionsIndex = optionsClub(clubsSort, playersForClub)
    const indexClub = chooseClub(optionsIndex)

    clubsSort[indexClub].players.push(player)
  })

  let qtdClubNotLimit = clubsSort.filter(
    (item) => item.players.length < playersForClub,
  ).length

  if (qtdClubNotLimit > 1) {
    const clubsWithIndex = clubsSort.map((item, index) => ({
      players: item.players,
      index,
    }))

    while (qtdClubNotLimit > 1) {
      const clubNotLimit = clubsWithIndex.filter(
        (club) => club.players.length !== playersForClub,
      )
      const worstPlayer = getWorstPlayer(
        clubNotLimit[qtdClubNotLimit - 1].players,
      )
      clubsSort[clubNotLimit[0].index].players.push(worstPlayer)
      clubsSort[clubNotLimit[qtdClubNotLimit - 1].index].players = clubsSort[
        clubNotLimit[qtdClubNotLimit - 1].index
      ].players.filter((item) => item.name !== worstPlayer.name)

      qtdClubNotLimit = clubsSort.filter(
        (item) => item.players.length !== playersForClub,
      ).length
    }
  }

  return clubsSort.sort((a, b) => (a.players.length < b.players.length ? 1 : -1))
}
