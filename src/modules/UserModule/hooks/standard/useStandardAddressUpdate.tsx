import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { COIN_ENUM } from '../../constants/token-basic';
import { standardAddressSchema } from '../../schemas/standard.address.schema';
import { useUpdateAddressService } from '../../services/STANDARD/update.address';

export interface IStandardAddress {
  address: string
}

export const initCreateTokenValues: IStandardAddress = {
  address: ''
}

export const useStandardAddressUpdate = (method:COIN_ENUM, defaultValues: IStandardAddress = initCreateTokenValues) => {
  const { t } = useTranslation('standardCoin')
  const { onUpdateAddress, resetState, state } = useUpdateAddressService()
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(standardAddressSchema),
    defaultValues
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues)
      reset(defaultValues)
  }, [defaultValues, reset])

  useEffect(() => {
    if (state.status === 'Exception') {
      state.errorMessage && toast.error(state.errorMessage)
      resetState()
    }
    if (state.status === 'Success') {
      toast.success(t('address.success'))
      resetState()
    }
  }, [toast, state])

  const { isLoading, reset: resetMutation, mutateAsync } = useMutation((config: IStandardAddress) => onUpdateAddress(config, method), {
    onSuccess() {
      reset()
    }
  })


  return {
    control,
    isLoading,
    reset: () => {
      reset()
      resetMutation()
    },
    onSubmit: handleSubmit((values: any) => {
      mutateAsync(values)
    })
  }
}
