export enum COIN_ENUM {
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

  //by standard token
  LOCK = 'lock',
  
  SET_DEV_FEE_PERCENT ='setDevFeePercent',
  DEV_FEE ='_devFee',
  
  SET_LIQUIDITY_FEE_PERCENT= 'setLiquidityFeePercent',
  LIQUIDITY_FEE = '_liquidityFee',
  
  SET_TAX_FEE_PERCENT='setTaxFeePercent',
  TAX_FEE = '_taxFee',
  
  SET_DEV_WALLET_ADDRESS ='setDevWalletAddress',
  DEV_WALLET_ADDRESS ='_devWalletAddress',
  
  SET_MAX_TX_PERCENT ='setMaxTxPercent',
  MAX_TX_AMOUNT ='_maxTxAmount',
  
  SET_ROUTER_ADDRESS='setRouterAddress',
  UNISWAP_V2_ROUTER='uniswapV2Router',
  
  SET_NUM_TOKENS_SELL_TO_ADD_TO_LIQUIDITY = 'setNumTokensSellToAddToLiquidity',
  NUM_TOKENS_SELL_TO_ADD_TO_LIQUIDITY = 'numTokensSellToAddToLiquidity',

  SET_SWAP_AND_LIQUIFY_ENABLED ='setSwapAndLiquifyEnabled',
  SWAP_AND_LIQUIFY_ENABLED= 'swapAndLiquifyEnabled'


}