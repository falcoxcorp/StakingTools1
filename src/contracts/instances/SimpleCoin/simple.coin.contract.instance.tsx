import SIMPLE_COIN_ABI from './simple.abi.json'
import { Interface } from "ethers/lib/utils";
import { Contract } from '@ethersproject/contracts'

export const SIMPLE_COIN_INTERFACE_ABI = new Interface(SIMPLE_COIN_ABI)

export const SimpleCoinInstance = (_tokenAddress: string) => {
  return new Contract(_tokenAddress, SIMPLE_COIN_INTERFACE_ABI)
}
