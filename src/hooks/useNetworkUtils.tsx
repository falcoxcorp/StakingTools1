import { useCallback } from "react"
import { PAID_TOKENS } from "../settings/paid_tokens"
import { LIST_NETWORKS_ERC20 } from "../contracts/instances/ERC20/network-token-erc20"
import { TOKEN_TYPE_ENUM } from "../contracts/instances/interfaces"
import { config } from "../settings/config"

export const useNetworkUtils = () => {

  const getERC20Networks = useCallback((chainId: number, type?: TOKEN_TYPE_ENUM) => {
    if (chainId) {
      const networks = LIST_NETWORKS_ERC20[type || TOKEN_TYPE_ENUM.STANDARD]?.find(network => network?.chainId === chainId)
      return networks
    }
  }, [LIST_NETWORKS_ERC20])

  const getNetworkListToken = useCallback((chainId: number) => {
    if (chainId) {
      const tokens = PAID_TOKENS?.find((token) => token?.chainId === chainId)
      return tokens?.tokens || []
    }
  }, [PAID_TOKENS])

  const getNetworkToken = useCallback((chainId: number, tokenAddress: string) => {
    if (tokenAddress && chainId) {
      const tokens = getNetworkListToken(chainId)
      return tokens?.find(token => token.address === tokenAddress)
    }
  }, [PAID_TOKENS])

  const gerRouterAddress = useCallback((chainId: number, tokenAddress: string) => {
    if (tokenAddress && chainId) {
      const routerAddress = config.createToken.routerAddress
      return routerAddress?.find(router => router.chainId === chainId)
    }
  }, [PAID_TOKENS])


  return {
    getERC20Networks,
    getNetworkListToken,
    getNetworkToken,
    gerRouterAddress
  }
}