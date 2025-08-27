import { useCall } from "@usedapp/core"
import { useMemo } from "react"
import { Contract } from "@ethersproject/contracts";

type Props = {
  args: any[],
  method: string,
  service: Contract
  activeStep: number
  symbol: string
}

export const useServicePaymentAmount = ({ activeStep, service, args, method, symbol }: Props) => {
  const { error, value } = useCall(activeStep === 2 && service && { contract: service, method, args }) ?? {}
  const nameToken = useMemo(() => symbol, [symbol, value])
  return {
    error,
    value,
    nameToken
  }
}