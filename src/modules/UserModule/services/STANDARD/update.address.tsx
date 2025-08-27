import { useEthers, useSendTransaction } from "@usedapp/core"
import { useCallback } from "react"
import { ethers } from "ethers"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { useUtilsChecking } from "../../../../hooks/useUtilsChecking"
import { HandleThrowError } from "../../../CreateTokenModule/constants/errors"
import { COIN_ENUM } from "../../constants/token-basic"
import { useCoinContext } from "../../context/FalcoCoinContent"
import { IStandardAddress } from "../../hooks/standard/useStandardAddressUpdate"

export const useUpdateAddressService = () => {
  const { t } = useTranslation('falcoCoin')
  const { onVerifyNetworks } = useUtilsChecking()
  const { chainId } = useEthers()
  const { coinInstance } = useCoinContext()
  const { resetState, sendTransaction, state } = useSendTransaction()

  const onUpdateAddress = useCallback(async (config: IStandardAddress, method: COIN_ENUM) => {
    onVerifyNetworks(chainId as number)
    try {
      await sendTransaction({
        to: coinInstance?.address,
        value: 0,
        data: coinInstance?.interface.encodeFunctionData(method, [
          config.address,
        ]),
      });
    } catch (error) {
      return toast.error(t('address.error'))
    }
  }, [sendTransaction, onVerifyNetworks, ethers, HandleThrowError]);

  return {
    onUpdateAddress, state, resetState
  }

}