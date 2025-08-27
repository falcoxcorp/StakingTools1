import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { standardFeeSchema } from '../../schemas/standard.fee.schema';
import { useUpdateFeeService } from '../../services/STANDARD/update.fee';
import { COIN_ENUM } from '../../constants/token-basic';

export interface IStandardFee {
  fee: number
}

export const initCreateTokenValues: IStandardFee = {
  fee: 0
}

export const useStandardFeeUpdate = (method:COIN_ENUM, defaultValues: IStandardFee = initCreateTokenValues) => {
  const { t } = useTranslation('standardCoin')
  const { onUpdateFee, resetState, state } = useUpdateFeeService()
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(standardFeeSchema),
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
      toast.success(t('fee.success'))
      resetState()
    }
  }, [toast, state])

  const { isLoading, reset: resetMutation, mutateAsync } = useMutation((config: IStandardFee) => onUpdateFee(config, method), {
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
