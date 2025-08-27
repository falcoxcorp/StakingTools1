import { BLOCK_TIME_SECOND } from "../settings/config/blocks-time"
import { addDays, differenceInSeconds } from 'date-fns'

export const DAY_IN_SECUND = 24 * 60 * 60

export const getTimeByBlock = (chainId: number) => {
  const timeByBlock = BLOCK_TIME_SECOND[chainId]
  return timeByBlock
}

export const getBlockPerDay = (chainId: number) => {
  const timePerBlock = getTimeByBlock(chainId)
  return DAY_IN_SECUND / timePerBlock
}


export const getBlockBetweenStartAndEnd = (start: Date, end: Date, chainId: number) => {
  if (chainId) {
    const diff = differenceInSeconds(end, start)
    const timePerBlock = getTimeByBlock(chainId)
    const blocks = diff / timePerBlock
    return blocks
  }
  return 0
}

export const getBlockEndInDays = (block: number, chainId: number) => {
  if (block && chainId) {
    const blockTime = getTimeByBlock(chainId)
    const days = block * blockTime / DAY_IN_SECUND
    return Number(days.toFixed(2))
  }
  return 0
}

export const getBlockEndInDate = (days: number) => {
  const nDay = new Date()
  const date = addDays(nDay, days)
  return date
}

export const getBlockEndIn = (end: number, current: number) => {
  if (end > current) {
    return end - current
  }
  return 0
}


export const getBlockByDate = (date: Date | undefined, chainId: number) => {
  if (date) {
    const now = new Date()
    const currentDate = Math.floor(now.getTime() / 1000);
    const startDate = Math.floor(date.getTime() / 1000);
    const timeBlock = getTimeByBlock(chainId)
    const blocks = (startDate - currentDate) / timeBlock
    return blocks > 0 ? Math.floor(blocks) : 0
  }
  return 0
}


export const getBlockPerYear = (chainId: number) => {
  if (chainId) {
    const blockTime = getTimeByBlock(chainId)
    // const days = getDaysInYear(date)
    const blockPerYear = (365 * DAY_IN_SECUND) / blockTime
    return blockPerYear
  }
  return 0
}