import { INetworks } from "../../../contracts/instances/interfaces"

export type IStakingCommon = {
  _service: string;
  tokenAddress?: string ;
  chainId: number,
  network?: INetworks,
  paymentAmount: number
  activeStep: number
  isVerify: boolean
  paidByToken: boolean
}