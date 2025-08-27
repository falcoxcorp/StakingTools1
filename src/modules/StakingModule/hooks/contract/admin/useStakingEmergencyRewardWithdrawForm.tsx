import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { isEmpty, isEqual } from "lodash";
import { useSendTransaction, useTokenBalance } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import useToggle from "../../../../../common/hooks/useToggle";
import { StakingTokenInstance } from "../../../../../contracts/staking/staking.token.contract.instance";
import { getParseEther, getParseWeiToEther } from "../../../../../utils/number";
import { stakingEmergencyRewardWithdrawSchema } from "../../../schemas/staking-config.schema";
import { METHODS_STAKING_FACTORY } from "../../../interfaces/staking.factory";
import toast from "react-hot-toast";
import { useCallStakedTokenAmount } from "../useStakingCalls";

export type IBalance = {
  amount: number
  balance: number
}

export const initStakingAmount: IBalance = {
  amount: 0,
  balance: 0
}

export const useStakingEmergencyRewardWithdrawForm = (stakingContract: string, rewardAddress: string, stakedAddress: string) => {
  const { emergencyRewardWithdraw, isLoading } = useStakingEmergencyRewardWithdraw({
    SPENDER_ADDRESS: stakingContract
  })



  const { control, handleSubmit, reset, watch, setValue } =
    useForm({
      resolver: yupResolver(stakingEmergencyRewardWithdrawSchema),
      defaultValues: initStakingAmount,
    });

  const bigBalance = useTokenBalance(rewardAddress, stakingContract)
  const { data: total } = useCallStakedTokenAmount(stakingContract)
  const balance = watch('balance')
  const amount = watch('amount')

  useEffect(() => {
    if (!isEmpty(bigBalance) && total!==undefined && balance === 0) {
      const b = getParseWeiToEther(bigBalance)
      const restTotal = isEqual(rewardAddress.toLowerCase(), stakedAddress.toLowerCase()) ? total : 0
      setValue('balance', (Number(b) - restTotal) || 0)
    }
  }, [bigBalance,total, isEqual, rewardAddress, stakedAddress])

  return {
    control,
    reset: () => {
      reset();
    },
    balance,
    amount,
    watch,
    onSubmit: handleSubmit((values: any) => {
      emergencyRewardWithdraw(values?.amount)
    }),
    isLoading
  };
};

export const useStakingEmergencyRewardWithdraw = ({ SPENDER_ADDRESS }: { SPENDER_ADDRESS: string }) => {
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
        toast.success(t('message.emergencyRewardWithdraw'))
        queryClient.removeQueries([METHODS_STAKING_FACTORY.emergencyRewardWithdraw, METHODS_STAKING_FACTORY.stakedTokenAmount])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const emergencyRewardWithdraw = useCallback(async (amount: number) => {
    onToggle()
    await sendTransaction({
      to: SPENDER_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_STAKING_FACTORY.emergencyRewardWithdraw, [getParseEther(amount)])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SPENDER_ADDRESS, sendTransaction]);

  return {
    emergencyRewardWithdraw,
    isLoading: isOpen
  }
}