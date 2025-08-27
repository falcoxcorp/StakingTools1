import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo } from 'react';
import { updateEtherConfig } from '../schemas';
import { IUpdateEtherConfig } from '../interfaces';
import { useMutation } from '@tanstack/react-query';
import { useUpdateEtherConfigService } from '../services/update.ether.config';
import { useEthers } from '@usedapp/core';
import { useNetworkUtils } from '../../../hooks/useNetworkUtils';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTokenContext } from '../context/TokenContext';

export const initTokenConfigValues: IUpdateEtherConfig = {
  isActive: false,
  paymentAmount: 0
}

export const useEtherConfigUpdateForm = (defaultValues: IUpdateEtherConfig = initTokenConfigValues) => {
  const { t } = useTranslation('admin')
  const { token } = useTokenContext()
  const { onUpdateEtherConfig, state, resetState } = useUpdateEtherConfigService()
  const { control, handleSubmit, reset } = useForm({ resolver: yupResolver(updateEtherConfig), defaultValues });
  const { chainId } = useEthers()
  const { getERC20Networks } = useNetworkUtils()
  const network = useMemo(() => getERC20Networks(chainId as number, token), [token])

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

  const { isLoading, reset: resetMutation, mutateAsync } = useMutation((config: IUpdateEtherConfig) => onUpdateEtherConfig(config), {
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
      const updateConfig = {
        ...values,
        network
      }
      mutateAsync(updateConfig)
    })
  };
}

