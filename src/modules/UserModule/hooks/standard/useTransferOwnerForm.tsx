import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { transferOwnerFalcoCoinSchema } from '../../schemas/transfer-owner.schema';
import { useBasicCoinTransferOwnerService } from '../../services/BASIC/transfer.owner.falco-coin';

export interface ITransferOwner {
  newOwner: string
}

export const initCreateTokenValues: ITransferOwner = {
  newOwner:''
}

export const useTransferOwnerForm = (defaultValues: ITransferOwner = initCreateTokenValues) => {
  const {t} = useTranslation('falcoCoin')
  const {onTransferOwner, resetState, state} = useBasicCoinTransferOwnerService()
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(transferOwnerFalcoCoinSchema),
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
      toast.success(t('transferOwner.success'))
      resetState()
    }
  }, [toast, state])

  const { isLoading, reset: resetMutation, mutateAsync } = useMutation((config: ITransferOwner) => onTransferOwner(config), {
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
