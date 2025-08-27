import { useCall, useEthers } from "@usedapp/core"
import { STAKING_TOKEN_METHOD, StakingTokenInstance } from "../../../contracts/staking/staking.token.contract.instance"
import { formatUnits } from "ethers/lib/utils"
import { IStakingContractInfo, ITokenInfo } from "../interfaces/ISmartChef"
import { useCallback, useMemo } from "react"
import { getBlockEndInDays, getBlockEndIn, getBlockPerDay } from "../../../utils/block-time"
import { getDaysInYear } from "date-fns"

const useCurrentBlock = (item: IStakingContractInfo) => {
  const { account } = useEthers()
  const { value } = useCall(account && item?.stakingContact && { contract: StakingTokenInstance(item?.stakingContact), method: STAKING_TOKEN_METHOD.CURRENT_BLOCK, args: [] }) ?? {}
  return {
    currentBlock: value ? Number(formatUnits?.(value?.[0], 0)) : 0
  }
}

export const useStakingToken = (item: IStakingContractInfo) => {
  const { chainId } = useEthers()
  const { currentBlock } = useCurrentBlock(item)
  const endBlocks = getBlockEndIn(item?.bonusEndBlock, currentBlock)
  const startBlocks = getBlockEndIn(item?.startBlock, currentBlock)

  const endIn = useMemo(() => getBlockEndInDays(endBlocks, chainId as number), [endBlocks, chainId, getBlockEndInDays])
  const startIn = useMemo(() => getBlockEndInDays(startBlocks, chainId as number), [startBlocks, chainId, getBlockEndInDays])

  const getApy = useCallback((rewardByBlock: number, totalTokenStaking: number, stakedTokenInfo: ITokenInfo, rewardTokenInfo: ITokenInfo) => {
    if (chainId && rewardByBlock && totalTokenStaking) {
      const blockPerDay = getBlockPerDay(chainId)
      const daysPerYear = getDaysInYear(new Date())
      if (stakedTokenInfo && rewardTokenInfo) {
        const rewardPerDay = rewardByBlock * blockPerDay * rewardTokenInfo?.price
        const apy = Math.pow((1 + (rewardPerDay / (totalTokenStaking * stakedTokenInfo?.price))), daysPerYear) - 1
        return apy 
      }
      const rewardPerDay = rewardByBlock * blockPerDay
      const apy = Math.pow((1 + (rewardPerDay / totalTokenStaking)), daysPerYear) - 1
      return apy
    }
    return 0
  }, [chainId, getBlockPerDay, getDaysInYear])

  return {
    currentBlock,
    endIn,
    startIn,
    getApy,
    endBlocks,

  }


}

