import { useCall, useEthers } from "@usedapp/core"
import { METHODS_ERC20 } from "../modules/interfaces"
import { useEffect, useState } from "react"
import { useNetworkUtils } from "./useNetworkUtils"
import { TOKEN_TYPE_ENUM } from "../contracts/instances/interfaces"
import { useTokenContext } from "../modules/AdministrationModule/context/TokenContext"

export const useCallOwner = () => {
  const { token } = useTokenContext()
  const [owner, setOwner] = useState(undefined)
  const { chainId } = useEthers()
  const { getERC20Networks } = useNetworkUtils()
  const network = getERC20Networks(chainId as number, token || TOKEN_TYPE_ENUM.SIMPLE)

  const { value } = useCall(network && { contract: network?.contractInstance, method: METHODS_ERC20.OWNER, args: [] }) ?? {}

  useEffect(() => {
    if (!!value) {
      setOwner(value?.[0])
    }

  }, [setOwner, value])

  return {
    owner,
    token,
    chainId
  }
}