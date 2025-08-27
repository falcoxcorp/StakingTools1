import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useEthers, useSendTransaction } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import useToggle from "../../../../../common/hooks/useToggle";
import { StakingTokenInstance } from "../../../../../contracts/staking/staking.token.contract.instance";
import { stakingUpdateStartAndEndBlocksFormSchema } from "../../../schemas/staking-config.schema";
import { METHODS_STAKING_FACTORY } from "../../../interfaces/staking.factory";
import toast from "react-hot-toast";
import { addDays } from "date-fns";
import { getBlockByDate } from "../../../../../utils/block-time";

export type IUpdateStartAndEndBlocks = {
  startBlock: Date;
  bonusEndBlock: Date;
  chainId: number
}

export const initStakingAmount: IUpdateStartAndEndBlocks = {
  startBlock: new Date(),
  bonusEndBlock: addDays(new Date(), 7),
  chainId: -1
}

export const useStakingUpdateStartAndEndBlocksForm = (stakingContract: string) => {
  const { chainId } = useEthers()
  const { stakingUpdateStartAndEndBlocks, isLoading } = useStakingUpdateStartAndEndBlocks({
    SPENDER_ADDRESS: stakingContract
  })
  const { control, handleSubmit, reset, watch, setValue } =
    useForm({
      resolver: yupResolver(stakingUpdateStartAndEndBlocksFormSchema),
      defaultValues: initStakingAmount,
    });


  useEffect(() => {
    if (chainId) {
      setValue('chainId', chainId)
    }
  })

  return {
    control,
    reset: () => {
      reset();
    },
    watch,
    onSubmit: handleSubmit((values: IUpdateStartAndEndBlocks) => {
      const startBlock = getBlockByDate(values?.startBlock, values?.chainId)
      const bonusEndBlock = getBlockByDate(values?.bonusEndBlock, values?.chainId)
      stakingUpdateStartAndEndBlocks(startBlock, bonusEndBlock)
    }),
    isLoading
  };
};

export const useStakingUpdateStartAndEndBlocks = ({ SPENDER_ADDRESS }: { SPENDER_ADDRESS: string }) => {
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
        toast.success(t('message.updateStartAndEndBlocks'))
        queryClient.removeQueries([METHODS_STAKING_FACTORY.updateStartAndEndBlocks])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const stakingUpdateStartAndEndBlocks = useCallback(async (startBlock: number, endBlock: number) => {
    onToggle()
    await sendTransaction({
      to: SPENDER_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_STAKING_FACTORY.updateStartAndEndBlocks, [startBlock, endBlock])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SPENDER_ADDRESS, sendTransaction]);

  return {
    stakingUpdateStartAndEndBlocks,
    isLoading: isOpen
  }
}