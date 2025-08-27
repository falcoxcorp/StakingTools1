import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import useToggle from "../../../../../common/hooks/useToggle";
import { StakingTokenInstance } from "../../../../../contracts/staking/staking.token.contract.instance";
import { getParseEther } from "../../../../../utils/number";
import { stakingUpdateRewardPerBlockFormSchema } from "../../../schemas/staking-config.schema";
import { METHODS_STAKING_FACTORY } from "../../../interfaces/staking.factory";
import toast from "react-hot-toast";

export type IBalance = {
  amount: number
}

export const initStakingAmount: IBalance = {
  amount: 0,
}

export const useStakingUpdateRewardPerBlockForm = (stakingContract: string) => {
  const { updateRewardPerBlock, isLoading } = useStakingUpdateRewardPerBlock({
    SPENDER_ADDRESS: stakingContract
  })
  const { control, handleSubmit, reset, watch } =
    useForm({
      resolver: yupResolver(stakingUpdateRewardPerBlockFormSchema),
      defaultValues: initStakingAmount,
    });

  return {
    control,
    reset: () => {
      reset();
    },
    watch,
    onSubmit: handleSubmit((values: any) => {
      updateRewardPerBlock(values?.amount)
    }),
    isLoading
  };
};

export const useStakingUpdateRewardPerBlock = ({ SPENDER_ADDRESS }: { SPENDER_ADDRESS: string }) => {
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
        toast.success(t('message.updateRewardPerBlock'))
        queryClient.removeQueries([METHODS_STAKING_FACTORY.updateRewardPerBlock])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const updateRewardPerBlock = useCallback(async (amount: number) => {
    onToggle()
    await sendTransaction({
      to: SPENDER_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_STAKING_FACTORY.updateRewardPerBlock, [getParseEther(amount)])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SPENDER_ADDRESS, sendTransaction]);

  return {
    updateRewardPerBlock,
    isLoading: isOpen
  }
}