export enum STANDARD_COIN_ENUM {
  _BURN_FEE = '_BURN_FEE',
  _CHARITY_FEE = '_CHARITY_FEE',
  _TAX_FEE = '_TAX_FEE',
  OWNER = 'owner',
  NAME = 'name',
  DECIMALS = 'decimals',
  SYMBOL = 'symbol',
  FEE_ADDRESS = 'FeeAddress',
  TOKEN_FROM_REFLECTION = 'tokenFromReflection',
  TOTAL_BURN = 'totalBurn',
  TOTAL_CHARITY = 'totalCharity',
  TOTAL_FEES = 'totalFees',
  TOTAL_SUPPLY = 'totalSupply',

  //write contract
  UPDATE_FEE = 'updateFee',
  DELIVER = 'deliver',
  RENOUNCE_OWNER_SHIP = 'renounceOwnership',
  TRANSFER_OWNER_SHIP = 'transferOwnership',
  SET_AS_CHARITY_ACCOUNT = 'setAsCharityAccount',
}