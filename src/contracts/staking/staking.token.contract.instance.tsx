import STAKING_TOKEN_ABI from './staking.token.abi.json'
import { Interface } from "ethers/lib/utils";
import { Contract } from '@ethersproject/contracts'

export const STAKING_TOKEN_INTERFACE_ABI = new Interface(STAKING_TOKEN_ABI)

export const StakingTokenInstance = (_tokenAddress: string) => {
  return new Contract(_tokenAddress, STAKING_TOKEN_INTERFACE_ABI)
}

export enum STAKING_TOKEN_METHOD {
  START_BLOCK ='startBlock',
  END_BLOCK ='bonusEndBlock',
  CURRENT_BLOCK ='getCurrentBlock'
}