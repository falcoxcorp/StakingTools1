import { useEthers } from "@usedapp/core"
import { useCallback } from "react"
import { getBlockPerYear, getTimeByBlock } from "../../../utils/block-time"

export const useApy = () => {
  const { chainId } = useEthers()

  const getRoi = useCallback(({ stakedTime, balance, apy }: { stakedTime: number, balance: number, apy: number }) => {
    const blockTime = getTimeByBlock(chainId as number)
    const blockPerYear = getBlockPerYear(chainId as number)
    const blockPerDay = stakedTime / blockTime
    const dayDecimal = blockPerYear / blockPerDay
    const roi = Number(balance) * (1 + (apy / dayDecimal))
    return roi
  }, [])


  return {
    getRoi
  }
}