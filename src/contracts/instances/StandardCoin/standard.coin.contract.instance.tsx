import STANDARD_COIN_ABI from './standard.coin.abi.json'
import { Interface } from "ethers/lib/utils";
import { Contract } from '@ethersproject/contracts'

export const STANDARD_COIN_INTERFACE_ABI = new Interface(STANDARD_COIN_ABI)

export const StandardCoinInstance = (_tokenAddress: string) => {
  return new Contract(_tokenAddress, STANDARD_COIN_INTERFACE_ABI)
}
