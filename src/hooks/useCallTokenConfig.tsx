import { useCall, useEthers } from "@usedapp/core"
import { METHODS_ERC20 } from "../modules/interfaces"
import { useEffect, useState } from "react"
import { useNetworkUtils } from "./useNetworkUtils"
import { TOKEN_TYPE_ENUM } from "../contracts/instances/interfaces"

interface IConfigToken  {
  paymentAmount: any,
  isActive: boolean,
  name: string
}

export const useCallTokenConfig = (tokenAddress: string, token: TOKEN_TYPE_ENUM) => {
  const [config, setConfig] = useState<IConfigToken | null>(null)
  const { chainId } = useEthers()
  const { getERC20Networks } = useNetworkUtils()
  const network = getERC20Networks(chainId as number, token as TOKEN_TYPE_ENUM)

  const { value } = useCall(network && token && tokenAddress && { contract: network?.contractInstance, method: METHODS_ERC20.TOKEN_MATRIX, args: [tokenAddress] }) ?? {}

  useEffect(() => {
    if (!!value) {
      setConfig(value)
    }

  }, [setConfig, value])

  return {
    config,
    network
  }
}