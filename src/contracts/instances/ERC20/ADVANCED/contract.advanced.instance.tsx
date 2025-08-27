import { Interface } from "ethers/lib/utils";
import { config } from "../../../../settings/config";
import { Contract } from '@ethersproject/contracts'
import abi from './abi.advanced.json'
import { INetworks } from "../../interfaces";

const ABI_MYCHIQUITO = new Interface(abi)

const contractFactoryBSC = config.createToken.tokenFactory.bsc
/* const contractFactoryETH = config.createToken.tokenFactory.eth
const contractFactoryPolygon = config.createToken.tokenFactory.polygon

const contractFactoryBSC_TESTNET = config.createToken.tokenFactory.bsc_testnet */
const contractFactoryMumbai = config.createToken.tokenFactory.mumbai


export const contractFactoryBSCInstance = new Contract(contractFactoryBSC[3].address, ABI_MYCHIQUITO)
/*export const contractFactoryETHInstance = new Contract(contractFactoryETH[3].address, ABI_MYCHIQUITO)
export const contractFactoryPolygonInstance = new Contract(contractFactoryPolygon[3].address, ABI_MYCHIQUITO) */

export const contractFactoryMumbaiInstance = new Contract(contractFactoryMumbai[3].address, ABI_MYCHIQUITO)
// export const contractFactoryBSC_TESTNETInstance = new Contract(contractFactoryBSC_TESTNET[3].address, ABI_MYCHIQUITO)

export const NETWORKS_ADVANCED_ERC20: INetworks[] = [
  /* {
    chainId: 1,
    name: 'Ethereum Mainnet',
    symbol: 'ETH',
    contractInstance: contractFactoryETHInstance,
    typeToken: TOKEN_TYPE_ENUM.ADVANCED,
    icon: <ETH />,
    disabled: false
  },
   {
    chainId: 137,
    name: 'Polygon Mainnet',
    symbol: 'MaticIcon',
    contractInstance: contractFactoryBSCInstance,
    typeToken: TOKEN_TYPE_ENUM.ADVANCED,
    icon: <MaticIcon />,
    disabled: false,
  },*/
  /* {
    chainId: 56,
    name: 'Binance Mainnet',
    symbol: 'BNB',
    contractInstance: contractFactoryBSCInstance,
    typeToken: TOKEN_TYPE_ENUM.ADVANCED,
    icon: <BNBIcon />,
    disabled: false,
    routerAddress: '0x10ed43c718714eb63d5aa57b78b54704e256024e'
  }, */

  /* {
    chainId: 97,
    name: 'Binance Coin Testnet',
    symbol: 'tBNB',
    contractInstance: contractFactoryBSC_TESTNETInstance,
    typeToken: TOKEN_TYPE_ENUM.ADVANCED,
    icon: <BNB />,
    disabled: true
  }, */
  /* {
    chainId: 80001,
    name: 'Mumbai Polygon',
    symbol: 'MaticIcon',
    contractInstance: contractFactoryMumbaiInstance,
    typeToken: TOKEN_TYPE_ENUM.ADVANCED,
    icon: <MATICIcon />,
    disabled: false,
    routerAddress: '0x8954afa98594b838bda56fe4c12a09d7739d179b'
  }, */
]
