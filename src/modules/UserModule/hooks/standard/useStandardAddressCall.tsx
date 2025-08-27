import { useCall, useEthers } from "@usedapp/core"
import { useEffect, useState } from "react"
import { IContractCall } from "../../interfaces/IContractCall"

type StandardAddressCallProps = {
  contract: IContractCall
}

export const useStandardAddressCall = ({ contract }: StandardAddressCallProps) => {
  const { Instance, address, args, method } = contract
  const { account } = useEthers()
  const [owner, setOwner] = useState('0x000000000000000000000000000000000000')
  const { value } = useCall(account && address && { contract: Instance(address), method, args }) ?? {}

  useEffect(() => {
    if (!!value) {
      setOwner(value?.[0])
    }

  }, [setOwner, value])

  return {    
    value: owner
  }
}