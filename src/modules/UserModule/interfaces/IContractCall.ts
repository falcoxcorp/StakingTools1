import { COIN_ENUM } from "../constants/token-basic";
import { Contract } from "@ethersproject/contracts";

export interface IContractCall {
  Instance: (_tokenAddress: string) => Contract
  method: COIN_ENUM;
  args: any[];
  address: string
}
