import { Contract } from '@ethersproject/contracts'
import { CRYPTO_ENUM } from "../../settings/enums";

export interface INetworks {
  name: string,
  symbol: string,
  chainId: number,
  contractInstance: Contract,
  icon: any
  typeToken?: TOKEN_TYPE_ENUM
  disabled: boolean
  routerAddress?: string
}

export interface ITokenByChain {
  chainId: CRYPTO_ENUM,
  tokens: IToken[]
}
export interface IToken {
  name: string
  address: string
}

export enum TOKEN_TYPE_ENUM {
  SIMPLE = 'SIMPLE',
  BASIC = 'BASIC',
  STANDARD = 'STANDARD',
  ADVANCED = 'ADVANCED'
}