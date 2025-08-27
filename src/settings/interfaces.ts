import { TOKEN_TYPE_ENUM } from "../contracts/instances/interfaces";

export interface IToken {
  type: TOKEN_TYPE_ENUM;
  address: string;
}

export interface ITokenFactory {
  bsc: IToken[];
  eth: IToken[];
  polygon: IToken[];
  bsc_testnet: IToken[];
  mumbai: IToken[];
  core_dao_testnet: IToken[];
  core_dao: IToken[];

  soneium: IToken[];
}
