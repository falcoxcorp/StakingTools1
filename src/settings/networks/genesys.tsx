import { Chain } from "@usedapp/core"
import { getAddressLink, getTransactionLink } from "./utils"

const genesysScanUrl = 'https://gchainexplorer.genesys.network'

export const genesys: Chain = {
  chainId: 16507,
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0xf09c86A56077f41aC46FE8cf9dB8075e239D3b28' ,
  multicall2Address: '0xf09c86A56077f41aC46FE8cf9dB8075e239D3b28',
  chainName: 'Genesys Mainnet',
  rpcUrl: 'https://rpc.genesys.network',
  nativeCurrency: {
    name: 'GSYS',
    symbol: 'GSYS',
    decimals: 18,
  },
  blockExplorerUrl: genesysScanUrl,
  getExplorerAddressLink: getAddressLink(genesysScanUrl),
  getExplorerTransactionLink: getTransactionLink(genesysScanUrl),
}

export default {
  genesys
}