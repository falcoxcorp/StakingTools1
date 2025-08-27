import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { feeFalcoCoinSchema } from '../../schemas/fee-falco-coin.schema';
import { useFalcoCoinUpdateFeeService } from '../../services/BASIC/update.fee.falco-coin';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';

export interface IFeeFalcoCoin {
  _TAX_FEE: number
  _BURN_FEE: number
  _CHARITY_FEE: number
}

export const initCreateTokenValues: IFeeFalcoCoin = {
  _TAX_FEE: 0,
  _BURN_FEE: 0,
  _CHARITY_FEE: 0
}

export const useFeeUpdateForm = (defaultValues: IFeeFalcoCoin = initCreateTokenValues) => {
  const {t} = useTranslation('falcoCoin')
  const {onUpdateFee, resetState, state} = useFalcoCoinUpdateFeeService()
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(feeFalcoCoinSchema),
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
      toast.success(t('feeUpdate.success'))
      resetState()
    }
  }, [toast, state])

  const { isLoading, reset: resetMutation, mutateAsync } = useMutation((config: IFeeFalcoCoin) => onUpdateFee(config), {
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
