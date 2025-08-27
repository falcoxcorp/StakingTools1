import { TOKEN_TYPE_ENUM } from "../../contracts/instances/interfaces";
import { ITokenFactory } from "../interfaces";
import { PAID_TOKENS } from "../paid_tokens";
import { ROUTER_ADDRESS } from "../router_address";

export const CREATE_TOKEN_CONFIG = {
  tokenFactory: {
    bsc: [
      {
        type: TOKEN_TYPE_ENUM.SIMPLE,
        address: "0x45396B9A12997820718A2bD4E1FC4B0962b48e78",
      },
      {
        type: TOKEN_TYPE_ENUM.BASIC,
        address: "0xeCc5d3CB784C2b2F17942a40EDf4482a23178302",
      },
      {
        type: TOKEN_TYPE_ENUM.STANDARD,
        address: "0x3c0abec4897728f5e77d16225d0e8c1a1b428231",
      },
      {
        type: TOKEN_TYPE_ENUM.ADVANCED,
        address: "0xd546fb4f28a0a142054db03277dc3a18922d061a", //todo
      },
    ],

    eth: [
      {
        type: TOKEN_TYPE_ENUM.SIMPLE,
        address: "0x9C0C01D701BA7F25010F70973b6F99851559F3F6", //todo
      },
      {
        type: TOKEN_TYPE_ENUM.BASIC,
        address: "0x9C0C01D701BA7F25010F70973b6F99851559F3F6",
      },
      {
        type: TOKEN_TYPE_ENUM.STANDARD,
        address: "0x9C0C01D701BA7F25010F70973b6F99851559F3F6", //todo
      },
      {
        type: TOKEN_TYPE_ENUM.ADVANCED,
        address: "0x9C0C01D701BA7F25010F70973b6F99851559F3F6", //todo
      },
    ],
    polygon: [
      {
        type: TOKEN_TYPE_ENUM.SIMPLE,
        address: "0xf5B1BD52d32c577b39349Ecf2d1E06655fc85ce3", // in use
      },
      {
        type: TOKEN_TYPE_ENUM.BASIC,
        address: "0xe1f7b9756f393b9fac3b88fba42308b7877781b8",
      },
      {
        type: TOKEN_TYPE_ENUM.STANDARD,
        address: "0x5c172c7151897fc98a7eb904cfcd6d002bbee3dd",
      },
      {
        type: TOKEN_TYPE_ENUM.ADVANCED,
        address: "0xe1f7b9756f393b9fac3b88fba42308b7877781b8", //todo
      },
    ],
    mumbai: [
      {
        type: TOKEN_TYPE_ENUM.SIMPLE,
        address: "0xd982ee95eea0745ae536b13a7371da18faf1c748", //todo
      },
      {
        type: TOKEN_TYPE_ENUM.BASIC,
        address: "0x6Be017db33D1379a07eb4D9AB1D56Db0ae8455f2",
      },
      {
        type: TOKEN_TYPE_ENUM.STANDARD,
        address: "0x8902a59272ae40331eada81c52a6300501a9d4d1",
      },
      {
        type: TOKEN_TYPE_ENUM.ADVANCED,
        address: "0x9c64d745664d613211ce6faf41a74a7fea078c80",
      },
    ],
    bsc_testnet: [
      {
        type: TOKEN_TYPE_ENUM.SIMPLE,
        address: "0xdCDc86B440e0AE697B804152f24ACEb4a3FCdE1C", //todo
      },
      {
        type: TOKEN_TYPE_ENUM.BASIC,
        address: "0xdCDc86B440e0AE697B804152f24ACEb4a3FCdE1C",
      },
      {
        type: TOKEN_TYPE_ENUM.STANDARD,
        address: "0xdCDc86B440e0AE697B804152f24ACEb4a3FCdE1C", //todo
      },
      {
        type: TOKEN_TYPE_ENUM.ADVANCED,
        address: "0xdCDc86B440e0AE697B804152f24ACEb4a3FCdE1C", //todo
      },
    ],
    core_dao: [
      {
        type: TOKEN_TYPE_ENUM.SIMPLE,
        address: "0xB677D358C66162bb703cB076dCC458fEB742310E", // in use
      },
      {
        type: TOKEN_TYPE_ENUM.BASIC,
        address: "0x727bbed7a590e34d6efa09da54e4f864bec8c61f",
      },
      {
        type: TOKEN_TYPE_ENUM.STANDARD,
        address: "0x6f67a48c275c5cb41aaf1188c6f075bb2c964c80", //pipi
      },
      {
        type: TOKEN_TYPE_ENUM.ADVANCED,
        address: "", //todo
      },
    ],
  } as ITokenFactory,
  routerAddress: ROUTER_ADDRESS,
  paidToken: PAID_TOKENS,
};
