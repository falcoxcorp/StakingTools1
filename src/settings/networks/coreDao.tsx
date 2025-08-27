import { Chain } from "@usedapp/core"
import { getAddressLink, getTransactionLink } from "./utils"

const creDaoScanUrl = 'https://scan.coredao.org'
const creDaoTestnetScanUrl = 'https://scan.test.btcs.network'

export const CoreDAO: Chain = {
  chainId: 1116,
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
  multicall2Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
  chainName: 'Core Mainnet',
  rpcUrl: 'https://rpc.ankr.com/core',
  nativeCurrency: {
    name: 'CORE',
    symbol: 'CORE',
    decimals: 18,
  },
  blockExplorerUrl: creDaoScanUrl,
  getExplorerAddressLink: getAddressLink(creDaoScanUrl),
  getExplorerTransactionLink: getTransactionLink(creDaoScanUrl),
}

export const CoreDAOTestnet: Chain = {
  chainId: 1115,
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
  multicall2Address: '0xcA11bde05977b3631167028862bE2a173976CA11',
  chainName: 'Core Testnet',
  rpcUrl: 'https://rpc.test.btcs.network/',
  nativeCurrency: {
    name: 'TCORE',
    symbol: 'TCORE',
    decimals: 18,
  },
  blockExplorerUrl: creDaoTestnetScanUrl,
  getExplorerAddressLink: getAddressLink(creDaoTestnetScanUrl),
  getExplorerTransactionLink: getTransactionLink(creDaoTestnetScanUrl),
}


export default {
  CoreDAO,
  CoreDAOTestnet
}