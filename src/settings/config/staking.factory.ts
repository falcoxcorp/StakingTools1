import { BSC, Polygon /* Mainnet */ } from "@usedapp/core";
import { CoreDAO, CoreDAOTestnet } from "../networks/coreDao";
import { baseETH } from "../networks/baseETH";
import { soneium } from "../networks/soneium";
import { genesys } from "../networks/genesys";
 

export const STAKING_CONFIG = {
  [CoreDAOTestnet.chainId]: "0x25321aD786847C486E9e15dA1AEECFf4504C2a20", 
  [CoreDAO.chainId]: "0x55E6f90239cE6eC160F1C3bc037265abEc97FaC4",  
  [BSC.chainId]: "0xBA9e2bDFF7c3CCb124aFAB73350A305F8721516b",
  [baseETH.chainId]: "0x18D84f4305b24DF99c58d7Ba92D31213d68b5455",
  [Polygon.chainId]: "0xB7be2e7A639aAbf7c4CEe837a3794775475a1F30",

  [soneium.chainId]: '0xc6508E9215fbB816B81E3c1D9cB4ac7b2dBC753C',
  [genesys.chainId]: '0x7F097723a37e80478E8bf9a9A63978Ba185331B8'
 
};

export const DEFAULT_GAS_LIMIT_BY_STAKING = 300000;

export const exclude_staking = [
  "0x3DE1697a00EEEE52d012D9C4D45967F39FBbE876",
  "0xaECc6263b27E216FcD799103255bac2422a9930C",
  "0xDFcc9786393EF59cc7A5161c23e44EE27581Ea71",
  "0xa95710e931a74202b5fa5D4140cfD3679C5cD96f",
  "0x242D8369873121C1093ef3eD9aFB1b4A6D38CFfA",
  "0xA32Ed716C9CA44e9239A7BFb998b38edC931Ee2c" //Doggy staking
  /* '0x774E4B939B453e5e4c068BFc9C80a9B1e6455438' */,
];
