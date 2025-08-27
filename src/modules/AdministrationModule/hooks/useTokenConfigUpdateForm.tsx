import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo } from 'react';
import { updateTokenConfig } from '../schemas';
import { IUpdateTokenConfig } from '../interfaces';
import { useMutation } from '@tanstack/react-query';
import { useEthers } from '@usedapp/core';
import { useNetworkUtils } from '../../../hooks/useNetworkUtils';
import { useUpdateTokenConfigService } from '../services/update.token.config';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTokenContext } from '../context/TokenContext';
import { TOKEN_TYPE_ENUM } from '../../../contracts/instances/interfaces';

export const initTokenConfigValues: IUpdateTokenConfig = {
  isActive: false,
  paymentAmount: 0,
  name: '',
  tokenAddress: ''
}

export const useTokenConfigUpdateForm = (defaultValues: IUpdateTokenConfig = initTokenConfigValues) => {
  const { t } = useTranslation('admin')
  const { token } = useTokenContext()
  const { chainId } = useEthers()
  const { onUpdateTokenConfig, state, resetState } = useUpdateTokenConfigService()
  const { control, handleSubmit, reset, watch, setValue } = useForm({ resolver: yupResolver(updateTokenConfig), defaultValues });
  const { getERC20Networks, getNetworkToken } = useNetworkUtils()
  const network = useMemo(() => getERC20Networks(chainId as number, token as TOKEN_TYPE_ENUM), [token])
  const tokenAddress = watch('tokenAddress')

  useEffect(() => {
    // @ts-ignore
    if (defaultValues)
      reset(defaultValues)
  }, [defaultValues, reset])

  useEffect(() => {
    if (tokenAddress && chainId)
      setValue('name', getNetworkToken(chainId, tokenAddress)?.name || 'Token')
  }, [chainId, tokenAddress, getNetworkToken])

  useEffect(() => {
    if (state.status === 'Exception') {
      state.errorMessage && toast.error(state.errorMessage)
    }
    if (state.status === 'Success') {
      toast.success(t('admin:config:update:success'))
    }
    resetState()
  }, [toast, state])

  const { isLoading, reset: resetMutation, mutateAsync } = useMutation((config: IUpdateTokenConfig) => onUpdateTokenConfig(config), {
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
    tokenAddress,
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

