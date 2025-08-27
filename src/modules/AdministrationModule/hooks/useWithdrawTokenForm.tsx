import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { withdrawTokenSchema } from '../schemas';
import { useMutation } from '@tanstack/react-query';
import { useEthers } from '@usedapp/core';
import { useNetworkUtils } from '../../../hooks/useNetworkUtils';
import { INetworks } from '../../../contracts/instances/interfaces';
import { useWithdrawTokenService } from '../services/withdraw.balance.token';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTokenContext } from '../context/TokenContext';

export interface IWithDrawToken {
  tokenAddress: string,
  withdraw: number,
  network?: INetworks
}

export const initTokenConfigValues: IWithDrawToken = {
  withdraw: 0,
  tokenAddress: ''
}

export const useWithdrawTokenForm = (defaultValues: IWithDrawToken = initTokenConfigValues) => {
  const { t } = useTranslation('admin')
  const { token } = useTokenContext()
  const { onWithdrawToken, state, resetState } = useWithdrawTokenService()
  const { control, handleSubmit, reset, watch } = useForm({ resolver: yupResolver(withdrawTokenSchema), defaultValues });
  const { chainId } = useEthers()
  const { getERC20Networks } = useNetworkUtils()
  const network = getERC20Networks(chainId as number, token)
  const _tokenAddress = watch('tokenAddress')

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
      toast.success(t('admin:ether:withdrawEther:success'))
    }
    resetState()
  }, [toast, state])

  const { isLoading, reset: resetMutation, mutateAsync } = useMutation((withdraw: IWithDrawToken) => onWithdrawToken(withdraw), {
    onSuccess() {
      reset({
        tokenAddress: _tokenAddress,
        withdraw: 0
      })
    }
  })

  return {
    control,
    tokenAddress: _tokenAddress,
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

