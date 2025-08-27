import { Chain } from "@usedapp/core"
import { getAddressLink, getTransactionLink } from "./utils"

const soneiumScanUrl = 'https://soneium.blockscout.com'

export const soneium: Chain = {
  chainId: 1868,
  isTestChain: false,
  isLocalChain: false,
  
  multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
  multicall2Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
  chainName: 'Soneium Network',
  rpcUrl: 'https://rpc.soneium.org',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrl: soneiumScanUrl,
  getExplorerAddressLink: getAddressLink(soneiumScanUrl),
  getExplorerTransactionLink: getTransactionLink(soneiumScanUrl),
}
 