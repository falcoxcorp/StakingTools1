import { useSendTransaction } from "@usedapp/core";
import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import useToggle from "../../../../common/hooks/useToggle";
import { StakingTokenInstance } from "../../../../contracts/staking/staking.token.contract.instance";
import { useTranslation } from "react-i18next";
import { useQueryClient } from '@tanstack/react-query'
import { STAKING_CONTRACT_LIST_KEY } from "../../constants/querys";
import { getParseEther } from "../../../../utils/number";
import { DEFAULT_GAS_LIMIT_BY_STAKING } from "../../../../settings/config/staking.factory";
import { METHODS_STAKING_TOKEN } from "../../interfaces/staking.token";

type Props = {
  SPENDER_ADDRESS: string //address staking contract
}
export const useStakingWithdrawContract = ({ SPENDER_ADDRESS }: Props) => {
  const { t } = useTranslation('staking')
  const queryClient = useQueryClient()
  const { isOpen, onToggle } = useToggle()
  const instance = StakingTokenInstance(SPENDER_ADDRESS)
  const { sendTransaction, state, resetState } = useSendTransaction();

  useEffect(() => {
    if (state) {
      if (state.status === 'Exception' || state.status === 'Fail') {
        toast.error(state.errorMessage as string)
        resetState()
        return
      } else if (state.status === 'Success') {
        toast.success(t('message.withdraw'))
        queryClient.removeQueries([STAKING_CONTRACT_LIST_KEY])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const withdraw = useCallback(async (amount: number) => {
    onToggle()
    await sendTransaction({
      to: SPENDER_ADDRESS,
      gasLimit: DEFAULT_GAS_LIMIT_BY_STAKING,
      value: 0,
      data: instance.interface.encodeFunctionData('withdraw', [getParseEther(amount)])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SPENDER_ADDRESS, sendTransaction]);
  
  const emergencyWithdraw = useCallback(async () => {
    onToggle()
    await sendTransaction({
      to: SPENDER_ADDRESS,
      gasLimit: DEFAULT_GAS_LIMIT_BY_STAKING,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_STAKING_TOKEN.emergencyWithdraw, [])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SPENDER_ADDRESS, sendTransaction]);

  return {
    withdraw,
    emergencyWithdraw,
    isLoading: isOpen
  }
}