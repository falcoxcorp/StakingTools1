import { useCall } from "@usedapp/core"
import { INetworks } from "../../../../contracts/instances/interfaces"
import { useMemo } from "react"


type Props = {
  args: any[],
  method: string,
  network: INetworks | undefined
  activeStep: number
  paidByToken: boolean
}
export const usePaymentAmount = ({ activeStep, network, paidByToken, args, method }: Props) => {
  const { error, value } = useCall(activeStep === 2 && network && { contract: network?.contractInstance, method, args }) ?? {}
  const nameToken = useMemo(() => paidByToken ? value?.name : network?.symbol, [network, value])
  return {
    error,
    value,
    nameToken
  }
}