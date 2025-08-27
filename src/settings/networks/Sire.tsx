import { Chain } from "@usedapp/core"
import { getAddressLink, getTransactionLink } from "./utils"

const SireScanUrl = 'https://5irescan.io'

export const Sire: Chain = {
  chainId: 995,
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
  multicall2Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
  chainName: '5ireChain Mainnet',
  rpcUrl: 'https://rpc.5ire.network',
  nativeCurrency: {
    name: '5ire',
    symbol: '5ire',
    decimals: 18,
  },
  blockExplorerUrl: SireScanUrl,
  getExplorerAddressLink: getAddressLink(SireScanUrl),
  getExplorerTransactionLink: getTransactionLink(SireScanUrl),
}


export default {
  Sire
}