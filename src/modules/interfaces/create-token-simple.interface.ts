export interface ICreateTokenSimpleERC20 {
  _name: string 
  _symbol: string 
  _decimals: number 
  _initialMint: number 
  _owner: string 
  tokenAddress: string 
  paidByToken: boolean
}


export enum TOKEN_FACTORY_COIN_TOKEN {
  APPROVE = 'approve',
}