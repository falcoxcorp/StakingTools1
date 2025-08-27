import SERVICE_ABI from './service.abi.json'
import { Interface } from "ethers/lib/utils";
import { Contract } from '@ethersproject/contracts'
import { SERVICE_CONFIG } from '../../settings/config/services';
import { CoreDAO, CoreDAOTestnet } from '../../settings/networks/coreDao';
import { BSC, Polygon } from '@usedapp/core';
import { baseETH } from '../../settings/networks/baseETH';
import { soneium } from '../../settings/networks/soneium';
import { genesys } from '../../settings/networks/genesys';

export const SERVICE_ABI_INTERFACE_ABI = new Interface(SERVICE_ABI)

export const ServiceContractInstance = (_serviceAddress: string) => {
  return new Contract(_serviceAddress, SERVICE_ABI_INTERFACE_ABI)
}


export const serviceCore = new Contract(SERVICE_CONFIG[CoreDAO.chainId], SERVICE_ABI_INTERFACE_ABI)
export const serviceCoreTestnet = new Contract(SERVICE_CONFIG[CoreDAOTestnet.chainId], SERVICE_ABI_INTERFACE_ABI)
export const serviceBSC = new Contract(SERVICE_CONFIG[BSC.chainId], SERVICE_ABI_INTERFACE_ABI)
export const serviceBaseETH = new Contract(SERVICE_CONFIG[baseETH.chainId], SERVICE_ABI_INTERFACE_ABI)
export const servicePolygon = new Contract(SERVICE_CONFIG[Polygon.chainId], SERVICE_ABI_INTERFACE_ABI)
export const serviceSoneium = new Contract(SERVICE_CONFIG[soneium.chainId], SERVICE_ABI_INTERFACE_ABI)
export const serviceGenesys = new Contract(SERVICE_CONFIG[genesys.chainId], SERVICE_ABI_INTERFACE_ABI)


export const SERVICE_MAP = {
  [CoreDAO.chainId]: serviceCore,
  [CoreDAOTestnet.chainId]: serviceCoreTestnet,
  [BSC.chainId]: serviceBSC,
  [baseETH.chainId]: serviceBaseETH,
  [Polygon.chainId]: servicePolygon,
  [soneium.chainId]: serviceSoneium,
  [genesys.chainId]: serviceGenesys,
}

