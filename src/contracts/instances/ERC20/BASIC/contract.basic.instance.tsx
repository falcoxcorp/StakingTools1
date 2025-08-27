import { Interface } from "ethers/lib/utils";
import { Contract } from '@ethersproject/contracts'
import abi from './basic-abi.json'
import { config } from "../../../../settings/config";
import { INetworks, TOKEN_TYPE_ENUM } from "../../interfaces";
import { BNBIcon, DAOIcon, ETHIcon, MATICIcon } from "../../../../components/CryptoCurrencyIcons";



const ABI = new Interface(abi)

const contractFactoryBSC = config.createToken.tokenFactory.bsc
const contractFactoryETH = config.createToken.tokenFactory.eth
const contractFactoryPolygon = config.createToken.tokenFactory.polygon
const contractFactoryCoreDao = config.createToken.tokenFactory.core_dao
// const contractFactoryCoreDaoTestnet = config.createToken.tokenFactory.core_dao_testnet

const contractFactoryBSC_TESTNET = config.createToken.tokenFactory.bsc_testnet
const contractFactoryMumbai = config.createToken.tokenFactory.mumbai


export const contractFactoryBSCInstance = new Contract(contractFactoryBSC[1].address, ABI)
export const contractFactoryETHInstance = new Contract(contractFactoryETH[1].address, ABI)
export const contractFactoryPolygonInstance = new Contract(contractFactoryPolygon[1].address, ABI)
export const contractFactoryCoreDaoInstance = new Contract(contractFactoryCoreDao[1].address, ABI)
// export const contractFactoryCoreDaoTestnetInstance = new Contract(contractFactoryCoreDaoTestnet[1].address, ABI)

export const contractFactoryMumbaiInstance = new Contract(contractFactoryMumbai[1].address, ABI)
export const contractFactoryBSC_TESTNETInstance = new Contract(contractFactoryBSC_TESTNET[1].address, ABI)

export const NETWORKS_ERC20: INetworks[] = [
  {
    chainId: 1,
    name: 'Ethereum Mainnet',
    symbol: 'ETH',
    contractInstance: contractFactoryETHInstance,
    typeToken: TOKEN_TYPE_ENUM.BASIC,
    icon: <ETHIcon />,
    disabled: false
  },
  {
    chainId: 56,
    name: 'Binance Mainnet',
    symbol: 'BNB',
    contractInstance: contractFactoryBSCInstance,
    typeToken: TOKEN_TYPE_ENUM.BASIC,
    icon: <BNBIcon />,
    disabled: false
  },
  {
    chainId: 137,
    name: 'Polygon Mainnet',
    symbol: 'MATIC',
    contractInstance: contractFactoryPolygonInstance,
    typeToken: TOKEN_TYPE_ENUM.BASIC,
    icon: <MATICIcon />,
    disabled: false
  },
  {
    chainId: 1116,
    name: 'Core Mainnet',
    symbol: 'Core',
    contractInstance: contractFactoryCoreDaoInstance,
    typeToken: TOKEN_TYPE_ENUM.SIMPLE,
    icon: <DAOIcon />,
    disabled: false
  },
 /*  {
    chainId: 1115,
    name: 'Core Dao',
    symbol: 'TCore',
    contractInstance: contractFactoryCoreDaoInstance,
    typeToken: TOKEN_TYPE_ENUM.BASIC,
    icon: <DAOIcon />,
    disabled: false
  }, */
  /* {
   chainId:97,
   name:'Binance Coin Testnet',
   symbol: 'tBNB',
   contractInstance: contractFactoryBSC_TESTNETInstance,
   typeToken: TOKEN_TYPE_ENUM.BASIC,
   icon: <BNB/>,
   disabled: true
 }, */
 /*  {
    chainId:80001,
    name:'Mumbai Polygon',
    symbol:'MATIC',
    contractInstance: contractFactoryMumbaiInstance,
    typeToken: TOKEN_TYPE_ENUM.BASIC,
    icon: <MATICIcon/>,
    disabled: false
  }, */
]
