import { useEthers, useSendTransaction } from "@usedapp/core"
import { useCallback } from "react"
import { ethers } from "ethers"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { useUtilsChecking } from "../../../../hooks/useUtilsChecking"
import { HandleThrowError } from "../../../CreateTokenModule/constants/errors"
import { useCoinContext } from "../../context/FalcoCoinContent"
import { ITransferOwner } from "../../hooks/standard/useTransferOwnerForm"
import { COIN_ENUM } from "../../constants/token-basic"

export const useBasicCoinTransferOwnerService = () => {
  const { t } = useTranslation('falcoCoin')
  const { onVerifyNetworks } = useUtilsChecking()
  const { chainId } = useEthers()
  const { coinInstance } = useCoinContext()
  const { resetState, sendTransaction, state } = useSendTransaction()

  const onTransferOwner = useCallback(async (config: ITransferOwner) => {
    onVerifyNetworks(chainId as number)

    try {
      await sendTransaction({
        to: coinInstance?.address,
        value: 0,
        data: coinInstance?.interface.encodeFunctionData(COIN_ENUM.TRANSFER_OWNER_SHIP, [
          config.newOwner,
        ]),
      });
    } catch (error) {
      return toast.error(t('transferOwner.error'))
    }
  }, [sendTransaction, onVerifyNetworks, ethers, HandleThrowError]);

  return {
    onTransferOwner, state, resetState
  }

}