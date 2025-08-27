export interface ICreateTokenERC20 {
  _NAME: string 
  _SYMBOL: string 
  _DECIMALS: number 
  _supply: number 
  _txFee: number 
  _lpFee: number 
  _DexFee: number 
  feeAddress: string 
  tokenOwner: string 
  tokenAddress: string 
  paidByToken: boolean
}

export enum METHODS_ERC20 {
  DEPLOY_PAID_BY_TOKEN = 'deployPaidByToken',
  DEPLOY_PAID_ETHER = 'deployPaidByEther',
  OWNER = 'owner',

  //mapper token
  REMOVE_TOKEN_CONFIG = 'removeTokenConfig',
  UPDATE_TOKEN_CONFIG = 'updateTokenConfig',
  UPDATE_ETHER_CONFIG = 'updateEtherConfig',
  
  //call
  TOKEN_MATRIX = 'tokenMatrix', //args : tokenAddress
  CONFIG_ETHER = 'configEther',

  GET_CONTRACT_TOKEN_BY_ADDRESS = 'getContractTokenByAddress',

  GET_BALANCE_ETHER = 'getBalanceEther',
  GET_BALANCE_TOKEN = 'getBalanceToken',
  WITHDRAW_BY_ETHER ='withdrawByEther',
  WITHDRAW_BY_TOKEN ='withdrawByToken'
}


export enum TOKEN_FACTORY_COIN_TOKEN {
  APPROVE = 'approve',
}