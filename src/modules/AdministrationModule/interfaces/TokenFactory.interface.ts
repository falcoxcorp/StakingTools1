import { INetworks } from "../../../contracts/instances/interfaces"

export interface IUpdateTokenConfig{
  tokenAddress: string
  name: string,
  isActive: boolean,
  paymentAmount: number
  network?: INetworks
}
export interface IUpdateEtherConfig{
  isActive: boolean,
  paymentAmount: number,
  network?: INetworks
}

export interface ISetMinValueBNB{
  _minValueBNB: number
}

export interface IServicePriceBNB{
  _servicePriceBNB: number
}