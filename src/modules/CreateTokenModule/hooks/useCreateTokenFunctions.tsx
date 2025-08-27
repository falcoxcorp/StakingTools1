import { useEthers } from "@usedapp/core"
import { useCallback } from "react"

export const useCreateTokenFunctions = () => {
  const { chainId: currencyChainId, switchNetwork,activateBrowserWallet} = useEthers()

  const onSubmitCreateToken = useCallback(async (chainId: number) => {

    if (currencyChainId !== chainId) {
      await switchNetwork(chainId)
      await activateBrowserWallet()
    }

  }, [currencyChainId])

  return {
    onSubmitCreateToken
  }
}