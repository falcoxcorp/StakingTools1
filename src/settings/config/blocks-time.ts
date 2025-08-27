import { BSC, Mainnet, Polygon } from "@usedapp/core";
import { CoreDAO, CoreDAOTestnet } from "../networks/coreDao";
import { shibarium } from "../networks/shibarium";
import { baseETH } from "../networks/baseETH";
import { Sire } from "../networks/Sire";
import { genesys } from "../networks/genesys";
import { soneium } from "../networks/soneium";

export const BLOCK_TIME_SECOND = {
  [Mainnet.chainId]: 15,
  [shibarium.chainId]:15,
  [baseETH.chainId]:15,
  [Polygon.chainId]: 5,
  [BSC.chainId]: 3,
  [CoreDAO.chainId]: 5,
  [CoreDAOTestnet.chainId]: 5,
  [Sire.chainId]: 10,
  [genesys.chainId]: 4,
  
  [soneium.chainId]: 10,
}