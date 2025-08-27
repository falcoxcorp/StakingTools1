import { useEthers, useSendTransaction } from "@usedapp/core"
import { useCallback } from "react"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { METHODS_ERC20 } from "../../interfaces"
import { ethers } from "ethers"
import { HandleThrowError } from "../../CreateTokenModule/constants/errors"
import { IWithDrawToken } from "../hooks/useWithdrawTokenForm"

export const useWithdrawTokenService = () => {
  const { t } = useTranslation(['common', 'admin'])
  const { account, chainId } = useEthers()
  const { sendTransaction, state, resetState } = useSendTransaction()

  const onWithdrawToken = useCallback(async (data: IWithDrawToken) => {
    if (!account) return toast.error(t('connectMetamask'))
    if (chainId !== data?.network?.chainId) return toast.error(t('networks.connect.bsc'))
    const withdrawToken = ethers.utils.parseEther(data.withdraw.toString());

    try {
      await sendTransaction({
        to: data?.network?.contractInstance?.address,
        value: 0,
        data: data?.network?.contractInstance?.interface.encodeFunctionData(METHODS_ERC20.WITHDRAW_BY_TOKEN, [
          data?.tokenAddress,
          withdrawToken
        ]),
      });

    } catch (error) {
      return toast.error(t('admin:ether:withdrawEther:error'))
    }
  }, [sendTransaction, toast, HandleThrowError, ethers]);

  return {
    onWithdrawToken, state, resetState
  }

}