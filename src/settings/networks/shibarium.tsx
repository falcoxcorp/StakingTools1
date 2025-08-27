import { Chain } from "@usedapp/core"
import { getAddressLink, getTransactionLink } from "./utils"

const shibariumScanUrl = 'https://www.shibariumscan.io'

export const shibarium: Chain = {
  chainId: 109,
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
  multicall2Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
  chainName: 'Shibarium Mainnet',
  rpcUrl: 'https://www.shibrpc.com',
  nativeCurrency: {
    name: 'BONE',
    symbol: 'BONE',
    decimals: 18,
  },
  blockExplorerUrl: shibariumScanUrl,
  getExplorerAddressLink: getAddressLink(shibariumScanUrl),
  getExplorerTransactionLink: getTransactionLink(shibariumScanUrl),
}

export default {
  shibarium
}