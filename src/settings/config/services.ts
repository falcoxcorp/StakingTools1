import { BSC, Polygon /* Mainnet */ } from "@usedapp/core";
import { CoreDAO, CoreDAOTestnet } from "../networks/coreDao";
import { baseETH } from "../networks/baseETH";
import { soneium } from "../networks/soneium";
import { genesys } from "../networks/genesys";
/* import { Sire } from "../networks/Sire";
import { genesys } from "../networks/genesys"; */

export const SERVICE_CONFIG = {
  [CoreDAOTestnet.chainId]: "0xcf546fc482e939de2f2a740c283b28ac964c34a0",
  [CoreDAO.chainId]: "0xd7788509FBb24f3C87de1AbbC774B42880730826", //"0x851120a97248a161ef9f80c226062b79c9075393",
  [BSC.chainId]: "0xeA533a459A9c7052Bf872CD41835408B3f7fF756", //old "0x58852f348e2a40b3592caed3bc20a34b54eaf1e9",
  [baseETH.chainId]: "0xa371523ae6435fFE5F87971AAb111a28af55e470", // old "0x45842fc26ecd98c8a31606f29f47b06073fb67f1",
  [Polygon.chainId]: "0xa371523ae6435fFE5F87971AAb111a28af55e470", // old "0x7759f7a08896a038465c82a9a1ab1ab0559efb74"

  [soneium.chainId]: "0x4f67689cAe80f0Bb418B4eaB3FBC496d12B70D8a",
  
  [genesys.chainId]: "0xc6508E9215fbB816B81E3c1D9cB4ac7b2dBC753C",  

  /* [Mainnet.chainId]: '0xE9d879b8107bB9A6d5800332A843442081634060',
  [Sire.chainId]: '0x7F097723a37e80478E8bf9a9A63978Ba185331B8',
  */
};

export const SERVICE_OWNER = [
  "0x732df6e20f723D4b3A056D876d98dF22c9207de1",
  "0x9AD2598BBFa657d5555465693fA1935870b64DC8",
];
