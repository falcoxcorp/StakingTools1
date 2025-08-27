import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import useToggle from "../../../../../common/hooks/useToggle";
import { StakingTokenInstance } from "../../../../../contracts/staking/staking.token.contract.instance";
import { stakingRecoverTokenFormSchema } from "../../../schemas/staking-config.schema";
import { METHODS_STAKING_FACTORY } from "../../../interfaces/staking.factory";
import toast from "react-hot-toast";

export type IBalance = {
  token: string
}

export const initStakingAmount: IBalance = {
  token: ''
}

export const useStakingRecoverTokenForm = (stakingContract: string) => {
  const { recoverToken, isLoading } = useStakingRecoverToken({
    SPENDER_ADDRESS: stakingContract
  })
  const { control, handleSubmit, reset, watch } =
    useForm({
      resolver: yupResolver(stakingRecoverTokenFormSchema),
      defaultValues: initStakingAmount,
    });

  return {
    control,
    reset: () => {
      reset();
    },
    watch,
    onSubmit: handleSubmit((values: any) => {
      recoverToken(values?.token)
    }),
    isLoading
  };
};



export const useStakingRecoverToken = ({ SPENDER_ADDRESS }: { SPENDER_ADDRESS: string }) => {
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
        toast.success(t('message.recoverToken'))
        queryClient.removeQueries([METHODS_STAKING_FACTORY.recoverToken])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const recoverToken = useCallback(async (_token: string) => {
    onToggle()
    await sendTransaction({
      to: SPENDER_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_STAKING_FACTORY.recoverToken, [_token])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SPENDER_ADDRESS, sendTransaction]);

  return {
    recoverToken,
    isLoading: isOpen
  }
}