import { useEthers, useSendTransaction } from "@usedapp/core"
import { useCallback } from "react"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { METHODS_ERC20 } from "../../interfaces"
import { ethers } from "ethers"
import { HandleThrowError } from "../../CreateTokenModule/constants/errors"
import { IWithDrawEther } from "../hooks/useWithdrawEtherForm"

export const useWithDrawEtherService = () => {
  const { t } = useTranslation(['common', 'admin'])
  const { account, chainId } = useEthers()

  const { sendTransaction, state, resetState } = useSendTransaction()

  const onWithDrawEther = useCallback(async (data: IWithDrawEther) => {
    if (!account) return toast.error(t('connectMetamask'))
    if (chainId !== data?.network?.chainId) return toast.error(t('networks.connect.bsc'))
    const withdrawEther = ethers.utils.parseEther(data.withdraw.toString());
    try {
      await sendTransaction({
        to: data?.network?.contractInstance?.address,
        value: 0,
        data: data?.network?.contractInstance?.interface.encodeFunctionData(METHODS_ERC20.WITHDRAW_BY_ETHER, [
          withdrawEther
        ]),
      });

    } catch (error) {
      return toast.error(t('admin:config:update:error'))

    }
  }, [sendTransaction, toast, HandleThrowError, ethers]);

  return {
    onWithDrawEther, state, resetState
  }

}