import { BSC, Mainnet, Polygon } from "@usedapp/core";
import { CryptoIcon } from "../components/IconSVG/CryptoIcons";
import { Config } from '@usedapp/core'
import { CoreDAO, CoreDAOTestnet } from './networks/coreDao'
import { baseETH } from './networks/baseETH'
import { soneium } from "./networks/soneium";
import { genesys } from "./networks/genesys";

// svg
import btc_icon from "../assets/currency/btc.svg"
import matic_icon from "../assets/currency/matic.svg"
import eth_icon from "../assets/currency/eth.svg"
import bnb_icon from "../assets/currency/bnb.svg"
import trx_icon from "../assets/currency/trx.svg"
import sol_icon from "../assets/currency/sol.svg"

export const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  gasLimitBufferPercentage: 100,
  fastMulticallEncoding: true,
  readOnlyUrls: {
    [BSC.chainId]: 'https://bsc-dataseed.binance.org',
    [Polygon.chainId]: 'https://polygon-rpc.com',
    [CoreDAO.chainId]: 'https://rpc.ankr.com/core',
    [baseETH.chainId]: 'https://mainnet.base.org',
    [soneium.chainId]: 'https://rpc.soneium.org',
    [genesys.chainId]: 'https://rpc.genesys.network',
    //testnets
    [CoreDAOTestnet.chainId]: 'https://rpc.test.btcs.network'

  },
  networks: [
    BSC,
    Polygon,
    CoreDAO,
    baseETH,
    soneium,
    genesys,
    
    /* testnet */
    CoreDAOTestnet,
  ]
}


export interface INetworks {
  chainId: number
  title: string
  icon: any
  name: string
  disabled?: boolean
}

export const networks: INetworks[] = [
  {
    chainId: 56, //bsc,
    title: "Red BSC",
    icon: <CryptoIcon name='bsc' />,
    name: 'bsc',
    disabled: false
  },
  {
    chainId: 1, //bsc,
    title: "Red ETH",
    icon: <CryptoIcon name='eth' />,
    name: 'eth',
    disabled: false
  },
  {
    chainId: 137,
    title: 'Polygon',
    icon: <CryptoIcon name='matic' />,
    name: 'matic',
    disabled: false
  }
]

export const networks_testnet: INetworks[] = [

  {
    chainId: 80001, //bsc,
    title: "Red Mumbai",
    icon: <CryptoIcon name='mumbai' />,
    name: 'mumbai',
  },
  {
    chainId: 97, //bsc_testnet,
    title: "Red BSC Testnet",
    icon: <CryptoIcon name='bsc_testnet' />,
    name: 'bsc_testnet'
  },
]


export interface ICurrencyNetworks {
  id: string
  name: string
  icon: any
}






export const currency_networks: ICurrencyNetworks[] = [
  {
    id: 'bitcoin',
    name: "BTC",
    icon: btc_icon
  },

  {
    id: 'ethereum',
    name: "ETH",
    icon: eth_icon
  },
  {
    id: 'binancecoin',
    name: "BNB",
    icon: bnb_icon
  },
  {
    id: 'matic-network',
    name: "MATIC",
    icon: matic_icon
  },
  {
    id: 'tron',
    name: "TRX",
    icon: trx_icon
  },
  {
    id: 'solana',
    name: "SOLANA",
    icon: sol_icon
  },

]
