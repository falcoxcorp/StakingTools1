import BASIC_COIN_ABI from './basic.coin.abi.json'
import { Interface } from "ethers/lib/utils";
import { Contract } from '@ethersproject/contracts'

export const BASIC_COIN_INTERFACE_ABI = new Interface(BASIC_COIN_ABI)

export const CommonErc20CoinInstance = (_tokenAddress: string) => {
  return new Contract(_tokenAddress, BASIC_COIN_INTERFACE_ABI)
}
