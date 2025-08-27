import { useSendTransaction } from "@usedapp/core";
import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import useToggle from "../../../../common/hooks/useToggle";
import { StakingTokenInstance } from "../../../../contracts/staking/staking.token.contract.instance";
import { useTranslation } from "react-i18next";
import { useQueryClient } from '@tanstack/react-query'
import { getParseEther } from "../../../../utils/number";
import { METHODS_STAKING_FACTORY } from "../../interfaces/staking.factory";

type Props = {
  SPENDER_ADDRESS: string //address staking contract
}
export const useStakingDepositContract = ({ SPENDER_ADDRESS }: Props) => {
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
        toast.success(t('message.deposit'))
        queryClient.removeQueries([METHODS_STAKING_FACTORY.stakedTokenAmount, METHODS_STAKING_FACTORY.userInfo,METHODS_STAKING_FACTORY.pendingReward])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const deposit = useCallback(async (amount: number) => {
    onToggle()
    await sendTransaction({
      to: SPENDER_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData('deposit', [getParseEther(amount)])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SPENDER_ADDRESS, sendTransaction]);

  return {
    deposit,
    isLoading: isOpen
  }
}