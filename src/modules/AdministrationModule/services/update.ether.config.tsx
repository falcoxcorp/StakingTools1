import { useEthers, useSendTransaction } from "@usedapp/core"
import { useCallback } from "react"
import { ethers } from "ethers"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { METHODS_ERC20 } from "../../interfaces"
import { useUtilsChecking } from "../../../hooks/useUtilsChecking"
import { IUpdateEtherConfig } from "../interfaces"
import { HandleThrowError } from "../../CreateTokenModule/constants/errors"

export const useUpdateEtherConfigService = () => {
  const { t } = useTranslation(['common', 'admin'])
  const { onVerifyNetworks } = useUtilsChecking()
  const { chainId } = useEthers()

  const { resetState, sendTransaction, state } = useSendTransaction()

  const onUpdateEtherConfig = useCallback(async (config: IUpdateEtherConfig) => {
    onVerifyNetworks(chainId as number)
    const paymentAmount = ethers.utils.parseEther(config.paymentAmount.toString());

    try {
      await sendTransaction({
        to: config?.network?.contractInstance?.address,
        value: 0,
        data: config?.network?.contractInstance?.interface.encodeFunctionData(METHODS_ERC20.UPDATE_ETHER_CONFIG, [
          config.isActive,
          paymentAmount
        ]),
      });
    } catch (error) {
      return toast.error(t('ether:etherConfig:error'))
    }
  }, [sendTransaction, onVerifyNetworks, ethers, HandleThrowError]);

  return {
    onUpdateEtherConfig, state, resetState
  }

}