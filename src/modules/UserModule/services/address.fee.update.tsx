import { useEthers, useSendTransaction } from "@usedapp/core"
import { useCallback } from "react"
import { ethers } from "ethers"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { useUtilsChecking } from "../../../hooks/useUtilsChecking"
import { HandleThrowError } from "../../CreateTokenModule/constants/errors"
import { useCoinContext } from "../context/FalcoCoinContent"
import { COIN_ENUM } from "../constants/token-basic"
import { IAddressFee } from "../hooks/standard/useUpdateFeeAddress"

export const useFalcoCoinFeeAddressUpdateService = () => {
  const { t } = useTranslation('falcoCoin')
  const { onVerifyNetworks } = useUtilsChecking()
  const { chainId } = useEthers()
  const { coinInstance } = useCoinContext()
  const { resetState, sendTransaction, state } = useSendTransaction()

  const onFeeAddressUpdate = useCallback(async (config: IAddressFee) => {
    onVerifyNetworks(chainId as number)

    try {
      await sendTransaction({
        to: coinInstance?.address,
        value: 0,
        data: coinInstance?.interface.encodeFunctionData(COIN_ENUM.SET_AS_CHARITY_ACCOUNT, [
          config.newFeeAddress,
        ]),
      });
    } catch (error) {
      return toast.error(t('feeAddress.error'))
    }
  }, [sendTransaction, onVerifyNetworks, ethers, HandleThrowError]);

  return {
    onFeeAddressUpdate, state, resetState
  }

}