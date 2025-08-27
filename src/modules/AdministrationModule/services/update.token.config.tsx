import { useEthers, useSendTransaction } from "@usedapp/core"
import { useCallback } from "react"
import { ethers } from "ethers"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { METHODS_ERC20 } from "../../interfaces"
import { useUtilsChecking } from "../../../hooks/useUtilsChecking"
import { IUpdateTokenConfig } from "../interfaces"
import { ERRORS, HandleThrowError } from "../../CreateTokenModule/constants/errors"

export const useUpdateTokenConfigService = () => {
  const { t } = useTranslation(['common', 'admin'])
  const { onVerifyNetworks } = useUtilsChecking()
  const { chainId } = useEthers()

  const { resetState, sendTransaction, state } = useSendTransaction()

  const onUpdateTokenConfig = useCallback(async (config: IUpdateTokenConfig) => {
    onVerifyNetworks(chainId as number)
    const paymentAmount = ethers.utils.parseEther(config.paymentAmount.toString());

    try {
      const configTx = await sendTransaction({
        to: config?.network?.contractInstance?.address,
        value: 0,
        data: config?.network?.contractInstance?.interface.encodeFunctionData(METHODS_ERC20.UPDATE_TOKEN_CONFIG, [
          config.tokenAddress,
          config.name,
          config.isActive,
          paymentAmount
        ]),
      });

      if (configTx?.status === undefined) {
        HandleThrowError(ERRORS.METAMASK_TX_SIGNATURE)
      }
      return true 
    } catch (error) {
      return toast.error(t('ether:etherConfig:error'))
    }
  }, [sendTransaction, onVerifyNetworks, ethers, HandleThrowError]);

  return {
    onUpdateTokenConfig, state, resetState
  }

}