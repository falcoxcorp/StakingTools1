import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { withdrawEtherSchema } from '../schemas';
import { useMutation } from '@tanstack/react-query';
import { useWithDrawEtherService } from '../services/withdraw.balance.ether';
import { useEthers } from '@usedapp/core';
import { useNetworkUtils } from '../../../hooks/useNetworkUtils';
import { INetworks } from '../../../contracts/instances/interfaces';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTokenContext } from '../context/TokenContext';

export interface IWithDrawEther {
  withdraw: number,
  network?: INetworks
}

export const initTokenConfigValues: IWithDrawEther = {
  withdraw: 0
}

export const useWithdrawEtherForm = (defaultValues: IWithDrawEther = initTokenConfigValues) => {
  const { t } = useTranslation('admin')
  const { token } = useTokenContext()
  const { onWithDrawEther, state, resetState } = useWithDrawEtherService()
  const { control, handleSubmit, reset } = useForm({ resolver: yupResolver(withdrawEtherSchema), defaultValues });
  const { chainId } = useEthers()
  const { getERC20Networks } = useNetworkUtils()
  const network = getERC20Networks(chainId as number, token)

  useEffect(() => {
    // @ts-ignore
    if (defaultValues)
      reset(defaultValues)
  }, [defaultValues, reset])

  useEffect(() => {
    if (state.status === 'Exception') {
      state.errorMessage && toast.error(state.errorMessage)
    }
    if (state.status === 'Success') {
      toast.success(t('admin:config:update:success'))
    }
    resetState()
  }, [toast, state])

  const { isLoading, reset: resetMutation, mutateAsync } = useMutation((withdraw: IWithDrawEther) => onWithDrawEther(withdraw), {
    onSuccess() {
      reset()
    }
  })

  return {
    control,
    reset: () => {
      reset()
      resetMutation()
    },
    isLoading,
    onSubmit: handleSubmit((values: any) => {
      const withdraw = {
        ...values,
        network
      }
      mutateAsync(withdraw)
    })
  };
}

