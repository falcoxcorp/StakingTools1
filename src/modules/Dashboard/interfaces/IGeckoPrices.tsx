export interface TokenPrices {
  [tokenAddress: string]: string;
}

export interface IGeckoPriceApiResponse {
  type: string;
  attributes: {
      token_prices: TokenPrices
  };
}