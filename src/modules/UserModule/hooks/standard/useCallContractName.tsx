import { useCall, useEthers } from "@usedapp/core"
import { useEffect, useState } from "react"
import { IContractCall } from "../../interfaces/IContractCall"

type CallContractStandardProps = {
  contract: IContractCall
}

export const useCallContractName = ({ contract }: CallContractStandardProps) => {
  const { account } = useEthers()
  const { Instance, address, method, args } = contract
  const [name, setName] = useState('')

  const { value: call } = useCall(account && address && {
    contract: Instance(address),
    args,
    method
  }) ?? {}

  useEffect(() => {
    if (!!call) {
      setName(call?.[0])
    }

  }, [setName, call])

  return {
    name
  }
}