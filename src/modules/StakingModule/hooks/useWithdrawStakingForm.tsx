import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { depositStakingSchema } from "../schemas/staking-deposit.schema";
import { useStakingWithdrawContract } from "./contract/useStakingWithdrawContract";
import { useCallUserInfo } from "./contract/useStakingCalls";

export type IBalance = {
  amount: number
  balance: number
}

export const initStakingAmount: IBalance = {
  amount: 0,
  balance: 0
}

export const useWithdrawStakingForm = (stakingContract: string) => {
  const { data: userInfo } = useCallUserInfo(stakingContract)
  const { withdraw, emergencyWithdraw, isLoading } = useStakingWithdrawContract({
    SPENDER_ADDRESS: stakingContract
  })
  const { control, handleSubmit, reset, watch, setValue, /* formState: { errors } */ } =
    useForm({
      resolver: yupResolver(depositStakingSchema),
      defaultValues: initStakingAmount,
    });

  const balance = watch('balance')
  const amount = watch('amount')

  useEffect(() => {
    if (userInfo?.amount && balance === 0) {
      setValue('balance', Number(userInfo?.amount || 0))
    }
  }, [userInfo?.amount, setValue])

  return {
    control,
    reset: () => {
      reset();
    },
    balance,
    amount,
    watch,
    onSubmit: handleSubmit((values: any) => {
      withdraw(values?.amount)
    }),
    onEmergencyWithdraw: () => {
      emergencyWithdraw()
    },
    isLoading
  };
};



