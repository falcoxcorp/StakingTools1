import { CRYPTO_ENUM } from "./enums";

export interface IRouterAddress {
  chainId: CRYPTO_ENUM,
  router: {
    nameRouter: string,
    address: string
  }
}

export const ROUTER_ADDRESS: IRouterAddress[] = [
  {
    chainId: CRYPTO_ENUM.BSC,
    router: {
      nameRouter: 'PancakeSwap',
      address: '0x10ed43c718714eb63d5aa57b78b54704e256024e'
    }
  },
  {
    chainId: CRYPTO_ENUM.POLYGON,
    router: {
      nameRouter: 'UniSwap',
      address: '0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff'
    }
  },
  {
    chainId: CRYPTO_ENUM.CORE,
    router: {
      nameRouter: 'IceCreamSwap',
      address: '0xBb5e1777A331ED93E07cF043363e48d320eb96c4'
    }
  },
  {
    chainId: CRYPTO_ENUM.MUMBAI,
    router: {
      nameRouter: 'Uniswap Polygon',
      address: '0x8954afa98594b838bda56fe4c12a09d7739d179b'
    }
  },

]