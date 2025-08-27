import STAKING_FACTORY_ABI from "./staking.factory.abi.json";
import STAKING_TOKEN_ABI from "./staking.token.abi.json";
import { Interface } from "ethers/lib/utils";
import { Contract } from "@ethersproject/contracts";
import { config } from "../../settings/config";
import { CoreDAO, CoreDAOTestnet } from "../../settings/networks/coreDao";
import { INetworks } from "../instances/interfaces";
import {
  BASE_ETH_INSTANCE,
  BSC_INSTANCE,
  CORE_INSTANCE,
  CORE_TESTNET_INSTANCE,
  GENESYS_INSTANCE,
  POLYGON_INSTANCE,
  SONEIUM_INSTANCE,
} from "../../settings/config/network.instances";
import { SERVICE_CONFIG } from "../../settings/config/services";
import { baseETH } from "../../settings/networks/baseETH";
import { BSC, Polygon } from "@usedapp/core";
import { ACTIVE_NETWORK_STAKING_TESTNET } from "../../settings/global";
import { soneium } from "../../settings/networks/soneium";
import { genesys } from "../../settings/networks/genesys";


export const STAKING_FACTORY_INTERFACE_ABI = new Interface(STAKING_FACTORY_ABI);
export const STAKING_TOKEN_INTERFACE_ABI = new Interface(STAKING_TOKEN_ABI);

// CONTRACT STACKING FACTORY
export const StakingFactoryInstance = (_stackingFactoryAddress: string) => {
  return new Contract(_stackingFactoryAddress, STAKING_FACTORY_INTERFACE_ABI);
};

// CONTRACT STAKING TOKEN
export const StakingInstance = (_stackingAddress: string) => {
  return new Contract(_stackingAddress, STAKING_TOKEN_INTERFACE_ABI);
};

const stakingConfig = config.staking;
 
export const stakingGenesysInstance = new Contract(
  stakingConfig[genesys.chainId],
  STAKING_FACTORY_ABI
);

export const stakingSoneiumInstance = new Contract(
  stakingConfig[soneium.chainId],
  STAKING_FACTORY_ABI
);

export const stakingCoreInstance = new Contract(
  stakingConfig[CoreDAO.chainId],
  STAKING_FACTORY_ABI
);
export const stakingCoreTestnetInstance = new Contract(
  stakingConfig[CoreDAOTestnet.chainId],
  STAKING_FACTORY_ABI
);

export const stakingBSCInstance = new Contract(
  stakingConfig[BSC.chainId],
  STAKING_FACTORY_ABI
);

export const stakingBASEInstance = new Contract(
  stakingConfig[baseETH.chainId],
  STAKING_FACTORY_ABI
);

export const stakingPOLYGONInstance = new Contract(
  stakingConfig[Polygon.chainId],
  STAKING_FACTORY_ABI
);

 

const _GENESYS = {
  ...GENESYS_INSTANCE,
  contractInstance: stakingGenesysInstance,
  service: SERVICE_CONFIG[GENESYS_INSTANCE.chainId],
};

const _SONEIUM = {
  ...SONEIUM_INSTANCE,
  contractInstance: stakingSoneiumInstance,
  service: SERVICE_CONFIG[SONEIUM_INSTANCE.chainId],
};

const _CORE = {
  ...CORE_INSTANCE,
  contractInstance: stakingCoreInstance,
  service: SERVICE_CONFIG[CORE_INSTANCE.chainId],
};

const _CORE_TESTNET = {
  ...CORE_TESTNET_INSTANCE,
  contractInstance: stakingCoreTestnetInstance,
  service: SERVICE_CONFIG[CORE_TESTNET_INSTANCE.chainId],
};

const _BSC = {
  ...BSC_INSTANCE,
  contractInstance: stakingBSCInstance,
  service: SERVICE_CONFIG[BSC_INSTANCE.chainId],
};

const _BASE_ETH = {
  ...BASE_ETH_INSTANCE,
  contractInstance: stakingBASEInstance,
  service: SERVICE_CONFIG[BASE_ETH_INSTANCE.chainId],
};

const _POLYGON = {
  ...POLYGON_INSTANCE,
  contractInstance: stakingPOLYGONInstance,
  service: SERVICE_CONFIG[POLYGON_INSTANCE.chainId],
};

 

export const NETWORKS_STAKING_FACTORY: INetworks[] = [
  ...(ACTIVE_NETWORK_STAKING_TESTNET ? [_CORE_TESTNET] : []), 
  _CORE,
  _BSC, 
  _BASE_ETH,
  _POLYGON, 
  _SONEIUM,
  _GENESYS
];

export const NETWORKS_STAKING_FACTORY_MAP = {
  [CoreDAOTestnet.chainId]: _CORE_TESTNET,
  [CoreDAO.chainId]: _CORE,
  [BSC.chainId]: _BSC,
  [baseETH.chainId]: _BASE_ETH,
  [Polygon.chainId]: _POLYGON,
  [soneium.chainId]: _SONEIUM,
  [genesys.chainId]: _GENESYS,
 
};
