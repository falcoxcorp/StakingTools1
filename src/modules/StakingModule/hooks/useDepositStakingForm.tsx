import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { depositStakingSchema } from "../schemas/staking-deposit.schema";
import { isEmpty } from "lodash";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { useStakingDepositContract } from "./contract/useStakingDepositContract";
import { getParseWeiToEther } from "../../../utils/number";

export type IBalance = {
  amount: number
  balance: number
}

export const initStakingAmount: IBalance = {
  amount: 0,
  balance: 0
}

export const useDepositStakingForm = (stakedToken: string, stakingContract: string) => {
  const { account } = useEthers()
  const { deposit, isLoading } = useStakingDepositContract({
    SPENDER_ADDRESS: stakingContract
  })
  const { control, handleSubmit, reset, watch, setValue, /* formState: { errors } */ } =
    useForm({
      resolver: yupResolver(depositStakingSchema),
      defaultValues: initStakingAmount,
    });

  const bigBalance = useTokenBalance(stakedToken, account)
  const balance = watch('balance')
  const amount = watch('amount')

  useEffect(() => {
    if (!isEmpty(bigBalance) && balance === 0) {
      const b = getParseWeiToEther(bigBalance)
      setValue('balance', Number(b || 0))
    }
  }, [bigBalance])

  return {
    control,
    reset: () => {
      reset();
    },
    balance,
    amount,
    watch,
    onSubmit: handleSubmit((values: any) => {
      deposit(values?.amount)
    }),
    isLoading
  };
};



