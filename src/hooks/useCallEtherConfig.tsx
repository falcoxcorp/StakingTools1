import { useCall, useEthers } from "@usedapp/core"
import { METHODS_ERC20 } from "../modules/interfaces"
import { useEffect, useState } from "react"
import { useNetworkUtils } from "./useNetworkUtils"
import { TOKEN_TYPE_ENUM } from "../contracts/instances/interfaces"

interface IConfigEther {
  paymentAmount: any,
  isActive: boolean
}

export const useCallEtherConfig = (token: TOKEN_TYPE_ENUM) => {
  const [config, setConfig] = useState<IConfigEther | null>(null)
  const { chainId } = useEthers()
  const { getERC20Networks } = useNetworkUtils()
  const network = getERC20Networks(chainId as number, token)

  const { value } = useCall(network && token && { contract: network?.contractInstance, method: METHODS_ERC20.CONFIG_ETHER, args: [] }) ?? {}

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