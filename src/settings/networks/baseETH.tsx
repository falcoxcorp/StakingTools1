import { Chain } from "@usedapp/core"
import { getAddressLink, getTransactionLink } from "./utils"

const baseScanUrl = 'https:/basescan.org'

export const baseETH: Chain = {
  chainId: 8453,
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xca11bde05977b3631167028862be2a173976ca11',
  multicall2Address: '0xca11bde05977b3631167028862be2a173976ca11',
  chainName: 'Base Mainnet',
  rpcUrl: 'https://mainnet.base.org',
  nativeCurrency: {
    name: 'BASE',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrl: baseScanUrl,
  getExplorerAddressLink: getAddressLink(baseScanUrl),
  getExplorerTransactionLink: getTransactionLink(baseScanUrl),
}

export default {
  baseETH
}