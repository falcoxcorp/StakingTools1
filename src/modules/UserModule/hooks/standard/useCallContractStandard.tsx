import { useCall, useEthers } from "@usedapp/core"
import { useEffect, useState } from "react"
import { IContractCall } from "../../interfaces/IContractCall"


type CallContractStandardProps = {
  contract: IContractCall
}

export const useCallContractStandard = ({ contract }: CallContractStandardProps) => {
  const { account } = useEthers()
  const {Instance, address, args, method} = contract
  const [value, setValue] = useState(0)

  const { value: call } = useCall(account && address && {
    contract: Instance(address),
    method,
    args
  }) ?? {}

  useEffect(() => {
    if (!!call) {
      setValue(call?.[0])
    }

  }, [setValue, call])

  return {
    value
  }
}