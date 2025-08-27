import { BSC, Mainnet, Polygon } from "@usedapp/core";
import { CoreDAO, CoreDAOTestnet } from "../networks/coreDao";
import { baseETH } from "../networks/baseETH";
import { Sire } from "../networks/Sire";
import { genesys } from "../networks/genesys";
import { soneium } from "../networks/soneium";

export const GECKO_NETWORK_API = {
  [Mainnet.chainId]: 'eth',
  [CoreDAOTestnet.chainId]: 'core',
  [CoreDAO.chainId]: "core",
  [BSC.chainId]: "bsc",
  [baseETH.chainId]: "base",
  [Polygon.chainId]: "polygon_pos",
  [Sire.chainId]: "5ire",

  [soneium.chainId]:'gsoneium',
  [genesys.chainId]:'genesys-network'
}