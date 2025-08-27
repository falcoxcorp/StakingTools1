import { BNBIcon, DAOIcon, MATICIcon, ETHIcon } from "../../components/CryptoCurrencyIcons";
import BaseETHIcon from "../../components/CryptoCurrencyIcons/BaseETHIcon";
import GenesysIcon from "../../components/CryptoCurrencyIcons/GenesysIcon";
import ShibariumIcon from "../../components/CryptoCurrencyIcons/ShibariumIcon";
import SireIcon from "../../components/CryptoCurrencyIcons/SireIcon";
import SoneiumIcon from "../../components/CryptoCurrencyIcons/SoneiumIcon";

export const SONEIUM_INSTANCE = {
  chainId: 1868,
  name: "Soneium Mainnet",
  symbol: "ETH",
  icon: <SoneiumIcon />,
  disabled: false,
}

export const ETH_INSTANCE = {
  chainId: 1,
  name: "Mainnet",
  symbol: "ETH",
  icon: <ETHIcon />,
  disabled: false,
}

export const CORE_INSTANCE = {
  chainId: 1116,
  name: "Core Mainnet",
  symbol: "Core",
  icon: <DAOIcon />,
  disabled: false,
}

export const CORE_TESTNET_INSTANCE = {
  chainId: 1115,
  name: 'Core Dao Tesnet',
  symbol: 'TCore',
  icon: <DAOIcon />,
  disabled: false,
}

export const BSC_INSTANCE = {
  chainId: 56,
  name: "BSC Mainnet",
  symbol: "BNB",
  icon: <BNBIcon />,
  disabled: false,
}

export const BASE_ETH_INSTANCE = {
  chainId: 8453,
  name: "Base Mainnet",
  symbol: "ETH",
  icon: <BaseETHIcon />,
  disabled: false,
}

export const POLYGON_INSTANCE = {
  chainId: 137,
  name: "Polygon Mainnet",
  symbol: "MATIC",
  icon: <MATICIcon />,
  disabled: false,
}
export const GENESYS_INSTANCE = {
  chainId: 16507,
  name: "Genesys Mainnet",
  symbol: "GSYS",
  icon: <GenesysIcon />,
  disabled: false,
}
export const SIRE_INSTANCE = {
  chainId: 995,
  name: "5ireChain Mainnet",
  symbol: "5ire",
  icon: <SireIcon />,
  disabled: false,
}

export const SHIBARIUM_INSTANCE = {
  chainId: 109,
  name: 'Shibarium Mainnet',
  symbol: 'BONE',
  icon: <ShibariumIcon />,
  disabled: false
}