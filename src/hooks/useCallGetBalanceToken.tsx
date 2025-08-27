import { useCall, useEthers } from "@usedapp/core"
import { METHODS_ERC20 } from "../modules/interfaces"
import { useEffect, useState } from "react"
import { useNetworkUtils } from "./useNetworkUtils"
import { useTokenContext } from "../modules/AdministrationModule/context/TokenContext"

export const useCallGetBalanceToken = (tokenAddress: string) => {
  const [balance, setBalance] = useState(0)
  const { token } = useTokenContext()
  const { chainId } = useEthers()
  const { getERC20Networks } = useNetworkUtils()

  const network = getERC20Networks(chainId as number, token)
  const { value } = useCall(network && token && tokenAddress && { contract: network?.contractInstance, method: METHODS_ERC20.GET_BALANCE_TOKEN, args: [tokenAddress] }) ?? {}

  useEffect(() => {
    if (!!value) {
      setBalance(value?.[0])
    }

  }, [setBalance, value])

  return {
    balance,
    network
  }
}