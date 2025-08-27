import { useCall, useEthers } from "@usedapp/core"
import { useEffect, useState } from "react"
import { IContractCall } from "../../interfaces/IContractCall"
import {  formatUnits } from "ethers/lib/utils"

type StandardCallFeeProps = {
  contract: IContractCall
}

export const useStandardFeeCall = ({ contract }: StandardCallFeeProps) => {
  const { Instance, address, args, method } = contract
  const { account } = useEthers()
  const [fee, setFee] = useState(0)
  const { value } = useCall(account && address && { contract: Instance(address), method, args }) ?? {}

  
  useEffect(() => {
    if (!!value) {
      setFee(Number(formatUnits(value?.[0],0)))
    }

  }, [setFee, value])

  return {
    value: fee
  }
}