import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { feeAddressCoinSchema } from '../../schemas/address.fee.schema';
import { useFalcoCoinFeeAddressUpdateService } from '../../services/address.fee.update';

export interface IAddressFee{
  newFeeAddress: string
}

export const initCreateTokenValues: IAddressFee = {
  newFeeAddress:''
}

export const useUpdateFeeAddress = (defaultValues: IAddressFee = initCreateTokenValues) => {
  const {t} = useTranslation('falcoCoin')
  const {onFeeAddressUpdate, resetState, state} = useFalcoCoinFeeAddressUpdateService()
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(feeAddressCoinSchema),
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
      toast.success(t('feeAddress.success'))
      resetState()
    }
  }, [toast, state])

  const { isLoading, reset: resetMutation, mutateAsync } = useMutation((config: IAddressFee) => onFeeAddressUpdate(config), {
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
