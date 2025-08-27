import { Interface } from "ethers/lib/utils";
import { config } from "../../../../settings/config";
import { Contract } from '@ethersproject/contracts'
import STANDARD_ABI from './standard.abi.json'
import { INetworks, TOKEN_TYPE_ENUM } from "../../interfaces";
import { BNBIcon, DAOIcon, ETHIcon, MATICIcon } from "../../../../components/CryptoCurrencyIcons";


const ABI = new Interface(STANDARD_ABI)

const contractFactoryBSC = config.createToken.tokenFactory.bsc
const contractFactoryETH = config.createToken.tokenFactory.eth
const contractFactoryPolygon = config.createToken.tokenFactory.polygon
// const contractFactoryCoreDaoTesnet = config.createToken.tokenFactory.core_dao_testnet
const contractFactoryCoreDao = config.createToken.tokenFactory.core_dao

/* const contractFactoryBSC_TESTNET = config.createToken.tokenFactory.bsc_testnet
const contractFactoryMumbai = config.createToken.tokenFactory.mumbai */


export const contractFactoryBSCInstance = new Contract(contractFactoryBSC[2].address, ABI)
export const contractFactoryETHInstance = new Contract(contractFactoryETH[2].address, ABI)
export const contractFactoryPolygonInstance = new Contract(contractFactoryPolygon[2].address, ABI)
// export const contractFactoryCoreDaoTesnetInstance = new Contract(contractFactoryCoreDaoTesnet[2].address, ABI)
export const contractFactoryCoreDaoInstance = new Contract(contractFactoryCoreDao[2].address, ABI)

/* export const contractFactoryMumbaiInstance = new Contract(contractFactoryMumbai[2].address, ABI)
export const contractFactoryBSC_TESTNETInstance = new Contract(contractFactoryBSC_TESTNET[2].address, ABI) */

export const NETWORKS_STANDARD_ERC20: INetworks[] = [
  {
    chainId: 1,
    name: 'Ethereum Mainnet',
    symbol: 'ETH',
    contractInstance: contractFactoryETHInstance,
    typeToken: TOKEN_TYPE_ENUM.STANDARD,
    icon: <ETHIcon />,
    disabled: true
  },
  {
    chainId: 56,
    name: 'Binance Mainnet',
    symbol: 'BNB',
    contractInstance: contractFactoryBSCInstance,
    typeToken: TOKEN_TYPE_ENUM.STANDARD,
    icon: <BNBIcon />,
    disabled: false
  },
  {
    chainId: 137,
    name: 'Polygon Mainnet',
    symbol: 'MATIC',
    contractInstance: contractFactoryPolygonInstance,
    typeToken: TOKEN_TYPE_ENUM.STANDARD,
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
    name: 'Core Dao',
    symbol: 'TCore',
    contractInstance: contractFactoryCoreDaoInstance,
    typeToken: TOKEN_TYPE_ENUM.STANDARD,
    icon: <DAOIcon />,
    disabled: false
  }, */
  /* {
    chainId: 97,
    name: 'Binance Coin Testnet',
    symbol: 'tBNB',
    contractInstance: contractFactoryBSC_TESTNETInstance,
    typeToken: TOKEN_TYPE_ENUM.STANDARD,
    icon: <BNBIcon />,
    disabled: true
  },
  {
    chainId: 80001,
    name: 'Mumbai Polygon',
    symbol: 'MATIC',
    contractInstance: contractFactoryMumbaiInstance,
    typeToken: TOKEN_TYPE_ENUM.STANDARD,
    icon: <MATICIcon />,
    disabled: false
  }, */
]
