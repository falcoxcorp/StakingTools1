import { useEthers, useSendTransaction } from "@usedapp/core"
import { useCallback } from "react"
import { ethers } from "ethers"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { useUtilsChecking } from "../../../../hooks/useUtilsChecking"
import { HandleThrowError } from "../../../CreateTokenModule/constants/errors"
import { IFeeFalcoCoin } from "../../hooks/standard/useFeeUpdateForm"
import { useCoinContext } from "../../context/FalcoCoinContent"
import { COIN_ENUM } from "../../constants/token-basic"

export const useFalcoCoinUpdateFeeService = () => {
  const { t } = useTranslation('falcoCoin')
  const { onVerifyNetworks } = useUtilsChecking()
  const { chainId } = useEthers()
  const { coinInstance } = useCoinContext()
  const { resetState, sendTransaction, state } = useSendTransaction()

  const onUpdateFee = useCallback(async (config: IFeeFalcoCoin) => {
    onVerifyNetworks(chainId as number)
    try {
      await sendTransaction({
        to: coinInstance?.address,
        value: 0,
        data: coinInstance?.interface.encodeFunctionData(COIN_ENUM.UPDATE_FEE, [
          config._TAX_FEE,
          config._BURN_FEE,
          config._CHARITY_FEE
        ]),
      });
    } catch (error) {
      return toast.error(t('feeUpdate.error'))
    }
  }, [sendTransaction, onVerifyNetworks, ethers, HandleThrowError]);

  return {
    onUpdateFee, state, resetState
  }

}