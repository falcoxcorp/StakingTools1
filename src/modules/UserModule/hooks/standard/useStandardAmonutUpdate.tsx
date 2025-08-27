import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { COIN_ENUM } from '../../constants/token-basic';
import { standardAmountSchema } from '../../schemas/standard.amount.schema';
import { useUpdateAmountService } from '../../services/STANDARD/update.amount';

export interface IStandardAmount {
  amount: number
}

export const initCreateTokenValues: IStandardAmount = {
  amount: 0
}

export const useStandardAmonutUpdate = (method:COIN_ENUM, defaultValues: IStandardAmount = initCreateTokenValues) => {
  const { t } = useTranslation('standardCoin')
  const { onUpdateAmount, resetState, state } = useUpdateAmountService()
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(standardAmountSchema),
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
      toast.success(t('amount.success'))
      resetState()
    }
  }, [toast, state])

  const { isLoading, reset: resetMutation, mutateAsync } = useMutation((config: IStandardAmount) => onUpdateAmount(config, method), {
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
