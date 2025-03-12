export function secundsToStringMinuteSecunds(time: number) {
  const minute = Math.floor(time / 60)
  const secunds = time % 60

  const secundString = secunds < 10 ? `0${secunds}` : secunds

  return `${minute}:${secundString}`
}
