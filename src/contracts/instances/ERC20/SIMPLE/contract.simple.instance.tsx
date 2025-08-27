import { Interface } from "ethers/lib/utils";
import { config } from "../../../../settings/config";
import { Contract } from '@ethersproject/contracts'
import abi from './simple-abi.json'
import { INetworks, TOKEN_TYPE_ENUM } from "../../interfaces";
import { BNBIcon, DAOIcon, MATICIcon } from "../../../../components/CryptoCurrencyIcons";


const ABI = new Interface(abi)

const contractFactoryBSC = config.createToken.tokenFactory.bsc
const contractFactoryETH = config.createToken.tokenFactory.eth
const contractFactoryPolygon = config.createToken.tokenFactory.polygon
const contractFactoryCoreDao = config.createToken.tokenFactory.core_dao

// const contractFactoryBSC_TESTNET = config.createToken.tokenFactory.bsc_testnet
const contractFactoryMumbai = config.createToken.tokenFactory.mumbai
// const contractFactoryCoreDaoTestnet = config.createToken.tokenFactory.core_dao_testnet


export const contractFactoryBSCInstance = new Contract(contractFactoryBSC[0].address, ABI)
export const contractFactoryETHInstance = new Contract(contractFactoryETH[0].address, ABI)
export const contractFactoryPolygonInstance = new Contract(contractFactoryPolygon[0].address, ABI)
export const contractFactoryCoreDaoInstance = new Contract(contractFactoryCoreDao[0].address, ABI)

export const contractFactoryMumbaiInstance = new Contract(contractFactoryMumbai[0].address, ABI)
// export const contractFactoryCoreDaoTestnetInstance = new Contract(contractFactoryCoreDaoTestnet[0].address, ABI)
// export const contractFactoryBSC_TESTNETInstance = new Contract(contractFactoryBSC_TESTNET[0].address, ABI)

export const NETWORKS_SIMPLE_ERC20: INetworks[] = [
  /* {
    chainId: 1,
    name: 'Ethereum Mainnet',
    symbol: 'ETH',
    contractInstance: contractFactoryETHInstance,
    typeToken: TOKEN_TYPE_ENUM.SIMPLE,
    icon: <ETHIcon />,
    disabled: true
  }, */
  {
    chainId: 56,
    name: 'Binance Mainnet',
    symbol: 'BNB',
    contractInstance: contractFactoryBSCInstance,
    typeToken: TOKEN_TYPE_ENUM.SIMPLE,
    icon: <BNBIcon />,
    disabled: false
  },
  {
    chainId: 137,
    name: 'Polygon Mainnet',
    symbol: 'MATIC',
    contractInstance: contractFactoryPolygonInstance,
    typeToken: TOKEN_TYPE_ENUM.SIMPLE,
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
  /* {
    chainId: 1115,
    name: 'Core Dao Tesnet',
    symbol: 'TCore',
    contractInstance: contractFactoryCoreDaoTestnetInstance,
    typeToken: TOKEN_TYPE_ENUM.SIMPLE,
    icon: <DAOIcon />,
    disabled: false
  },*/
  {
    chainId: 80001,
    name: 'Mumbai Polygon',
    symbol: 'MATIC',
    contractInstance: contractFactoryMumbaiInstance,
    typeToken: TOKEN_TYPE_ENUM.SIMPLE,
    icon: <MATICIcon />,
    disabled: false
  },
]
