export interface ICreateTokenStandardERC20 {
  _NAME: string 
  _SYMBOL: string 
  _DECIMALS: number 
  _supply: number 
  _txFee: number 
  _lpFee: number 
  _DexFee: number 
  feeAddress: string 
  routerAddress: string 
  tokenOwner: string 
  tokenAddress: string 
  paidByToken: boolean
}


export enum TOKEN_FACTORY_COIN_TOKEN {
  APPROVE = 'approve',
}