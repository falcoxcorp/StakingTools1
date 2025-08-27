import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {  stakingFactoryUpdateServiceAddressSchema } from "../../schemas/service.schema";
import useToggle from "../../../../common/hooks/useToggle";
import { StakingFactoryInstance } from "../../../../contracts/staking/staking.intance";
import { METHODS_STAKING_FACTORY } from "../../../StakingModule/interfaces/staking.factory";

export type IAdminWallet = {
  _newServiceAddress: string
}

export const initStakingAmount: IAdminWallet = {
  _newServiceAddress:''
}

export const useStakingFactoryUpdateServiceAddressForm = (stakingAddress: string) => {
  const { updateAdminWallet, isLoading } = useStakingFactoryUpdateServiceAddress({
    STAKING_ADDRESS: stakingAddress
  })

  const { control, handleSubmit, reset, watch } =
    useForm({
      resolver: yupResolver(stakingFactoryUpdateServiceAddressSchema),
      defaultValues: initStakingAmount,
    });

 

  return {
    control,
    reset: () => {
      reset();
    },
    watch,
    onSubmit: handleSubmit((values: IAdminWallet) => {
      updateAdminWallet(values?._newServiceAddress)
    }),
    isLoading
  };
};

export const useStakingFactoryUpdateServiceAddress = ({ STAKING_ADDRESS }: { STAKING_ADDRESS: string }) => {
  const { t } = useTranslation('service')
  const queryClient = useQueryClient()
  const { isOpen, onToggle } = useToggle()
  const instance = StakingFactoryInstance(STAKING_ADDRESS)
  const { sendTransaction, state, resetState } = useSendTransaction();

  useEffect(() => {
    if (state) {
      if (state.status === 'Exception' || state.status === 'Fail') {
        toast.error(state.errorMessage as string)
        resetState()
        return
      } else if (state.status === 'Success') {
        toast.success(t('message.UPDATE_SERVICE'))
        queryClient.removeQueries([METHODS_STAKING_FACTORY.UPDATE_SERVICE])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const updateAdminWallet = useCallback(async (_newServiceAddress: string) => {
    onToggle()
    await sendTransaction({
      to: STAKING_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_STAKING_FACTORY.UPDATE_SERVICE, [_newServiceAddress])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, STAKING_ADDRESS, sendTransaction]);

  return {
    updateAdminWallet,
    isLoading: isOpen
  }
}