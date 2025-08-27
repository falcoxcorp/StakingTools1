export interface ICreateTokenAdvancedERC20 {
  _name: string;
  _symbol: string;
  _supply: number;
  _tokenOwner: string;
  _devWallet: string;
  _marketingWallet: string;
  _charityTaxWallet: string;

  _devTaxBuy: number;
  _marketingTaxBuy: number;
  _charityTaxBuy: number;
  _liquidityTaxBuy: number;

  _devTaxSell: number;
  _marketingTaxSell: number;
  _charityTaxSell: number;
  _liquidityTaxSell: number;
}

export enum TOKEN_FACTORY_COIN_TOKEN {
  APPROVE = "approve",
}

export enum TAX_ENUM{
  'DEVELOPER',
  'MARKETING',
  'CHARITY',
  'LIQUIDITY'
  }