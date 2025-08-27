import { useEthers, useSendTransaction } from "@usedapp/core"
import { useCallback } from "react"
import { ethers } from "ethers"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { useUtilsChecking } from "../../../../hooks/useUtilsChecking"
import { HandleThrowError } from "../../../CreateTokenModule/constants/errors"
import { COIN_ENUM } from "../../constants/token-basic"
import { useCoinContext } from "../../context/FalcoCoinContent"
import { IStandardAmount } from "../../hooks/standard/useStandardAmonutUpdate"

export const useUpdateAmountService = () => {
  const { t } = useTranslation('falcoCoin')
  const { onVerifyNetworks } = useUtilsChecking()
  const { chainId } = useEthers()
  const { coinInstance } = useCoinContext()
  const { resetState, sendTransaction, state } = useSendTransaction()

  const onUpdateAmount = useCallback(async (config: IStandardAmount, method: COIN_ENUM) => {
    onVerifyNetworks(chainId as number)
    try {
      await sendTransaction({
        to: coinInstance?.address,
        value: 0,
        data: coinInstance?.interface.encodeFunctionData(method, [
          config.amount,
        ]),
      });
    } catch (error) {
      return toast.error(t('fee.error'))
    }
  }, [sendTransaction, onVerifyNetworks, ethers, HandleThrowError]);

  return {
    onUpdateAmount, state, resetState
  }

}