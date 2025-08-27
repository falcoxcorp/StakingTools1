import { ITokenByChain } from "../contracts/instances/interfaces";
import {
  ADDRESS_TOKENS_BASE_ENUM,
  ADDRESS_TOKENS_BSC_ENUM,
  ADDRESS_TOKENS_CORE_ENUM,
  ADDRESS_TOKENS_CORE_TESTNET_ENUM,
  ADDRESS_TOKENS_ETH_ENUM,
  //ADDRESS_TOKENS_GENESYS_ENUM,
  ADDRESS_TOKENS_MUMBAI_ENUM,
  ADDRESS_TOKENS_POLYGON_ENUM,
  CRYPTO_ENUM,
} from "./enums";

export const PAID_TOKENS: ITokenByChain[] = [
  {
    chainId: CRYPTO_ENUM.BSC,
    tokens: [
      {
        name: "PIPI",
        address: ADDRESS_TOKENS_BSC_ENUM.PIPI,
      },
      /* {
        name: "BABYPIPI",
        address: ADDRESS_TOKENS_BSC_ENUM.BABYPIPI,
      }, */
    ],
  },
  {
    chainId: CRYPTO_ENUM.ETH,
    tokens: [
      {
        name: "PIPI",
        address: ADDRESS_TOKENS_ETH_ENUM.PIPI,
      },
    ],
  },
  {
    chainId: CRYPTO_ENUM.POLYGON,
    tokens: [
      {
        name: "PIPI",
        address: ADDRESS_TOKENS_POLYGON_ENUM.PIPI,
      },
    ],
  },
  {
    chainId: CRYPTO_ENUM.MUMBAI,
    tokens: [
      {
        name: "SIMPLE",
        address: ADDRESS_TOKENS_MUMBAI_ENUM.SIMPLE,
      },
    ],
  },
  {
    chainId: CRYPTO_ENUM.CORE,
    tokens: [
      {
        name: "PIPI",
        address: ADDRESS_TOKENS_CORE_ENUM.PIPI,
      },
    ],
  },
  {
    chainId: CRYPTO_ENUM.CORE_TESTNET,
    tokens: [
      {
        name: "CAT",
        address: ADDRESS_TOKENS_CORE_TESTNET_ENUM.CAT,
      },
    ],
  },
/*   {
    chainId: CRYPTO_ENUM.GENESYS,
    tokens: [
      {
        name: "PIPI",
        address: ADDRESS_TOKENS_GENESYS_ENUM.PIPI,
      },
    ],
  }, */
  {
    chainId: CRYPTO_ENUM.BASE,
    tokens: [
      {
        name: "PIPI",
        address: ADDRESS_TOKENS_BASE_ENUM.PIPI,
      },
    ],
  },
];
