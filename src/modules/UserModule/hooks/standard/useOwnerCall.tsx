import { useCall, useEthers } from "@usedapp/core"
import { useEffect, useState } from "react"
import { IContractCall } from "../../interfaces/IContractCall"

type OwnerCallProps = {
  contract: IContractCall
}

export const useOwnerCall = ({ contract }: OwnerCallProps) => {
  const { Instance, address, args, method } = contract
  const { account } = useEthers()
  const [isOwner, setIsOwner] = useState<boolean | string>('loading')
  const [owner, setOwner] = useState('0x000000000000000000000000000000000000')
  const { value } = useCall(account && address && { contract: Instance(address), method, args }) ?? {}

  useEffect(() => {
    if (!!value) {
      setIsOwner(value?.[0] === account)
      setOwner(value?.[0])
    }

  }, [setIsOwner, setOwner, value])

  return {
    isOwner,
    owner
  }
}