import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import useToggle from "../../../../../common/hooks/useToggle";
import { StakingTokenInstance } from "../../../../../contracts/staking/staking.token.contract.instance";
import { METHODS_STAKING_FACTORY } from "../../../interfaces/staking.factory";
import toast from "react-hot-toast";


export const useStakingStopRewardForm = (stakingContract: string) => {
  const { stopReward, isLoading } = useStakingStopReward({
    SPENDER_ADDRESS: stakingContract
  })
  const { control, handleSubmit, reset, watch } = useForm();

  return {
    control,
    reset: () => {
      reset();
    },
    watch,
    onSubmit: handleSubmit(() => {
      stopReward()
    }),
    isLoading
  };
};

export const useStakingStopReward = ({ SPENDER_ADDRESS }: { SPENDER_ADDRESS: string }) => {
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
        toast.success(t('message.stopReward'))
        queryClient.removeQueries([METHODS_STAKING_FACTORY.stopReward])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const stopReward = useCallback(async () => {
    onToggle()
    await sendTransaction({
      to: SPENDER_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_STAKING_FACTORY.stopReward, [])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SPENDER_ADDRESS, sendTransaction]);

  return {
    stopReward,
    isLoading: isOpen
  }
}