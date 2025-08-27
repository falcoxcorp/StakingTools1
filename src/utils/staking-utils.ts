import { formatUnits } from "ethers/lib/utils"
import { isArray } from "lodash"
import { exclude_staking } from "../settings/config/staking.factory"

export const getStakingContractMapper = (stakingList: any[]) => {
  if (isArray(stakingList)) {
    const inverse = getInverseArray(stakingList)
    return inverse?.filter(staking => !exclude_staking.includes(staking[0]))?.map(staking => {
      return ({
        stakingContact: staking[0],
        rewardToken: staking[1],
        stakedToken: staking[2],
        startBlock: Number(formatUnits?.(staking[3], 0)),
        bonusEndBlock: Number(formatUnits?.(staking[4], 0)),
        rewardPerBlock: Number(formatUnits?.(staking[5], 18)),
        stakingActive: staking[6]
      })
    })
  }
  return []
}


export const getInverseArray = (staking: any[]) => {
  const length = staking.length;
  let stakingInverse = [];
  for (let i = length - 1; i >= 0; i--) {
    stakingInverse.push(staking[i]);
  }
  return stakingInverse
}

export const getTokenInfo = (staking: any[]) => {
  const tokens: { [key: string]: any } = {};
  staking.forEach(item => {    
    tokens[item.rewardToken] = ({
      name: '',
      symbol: '',
      price: '',
      image: ''
    })
    tokens[item.stakedToken] = ({
      name: '',
      symbol: '',
      price: '',
      image: ''
    })
  });

  return tokens
}