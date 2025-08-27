import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { TOKEN_TYPE_ENUM } from '../../../contracts/instances/interfaces';
import { useTokenContext } from '../context/TokenContext';
import { selectTokenSchema } from '../../UserModule/schemas/select-networks.schema';

export interface ISelectNetwork {
  token: TOKEN_TYPE_ENUM
}

export const initCreateTokenValues: ISelectNetwork = {
  token: TOKEN_TYPE_ENUM.SIMPLE
}

export const useSelectToken = (defaultValues: ISelectNetwork = initCreateTokenValues) => {
  const { setToken } = useTokenContext()
  const { control, reset, watch, handleSubmit } = useForm({
    //@ts-ignore
    resolver: yupResolver(selectTokenSchema),
    defaultValues
  });


  const token = watch('token')

  const onConfig = useCallback((token: TOKEN_TYPE_ENUM) => {
    if (token) {
      setToken?.(token as TOKEN_TYPE_ENUM)
    }
  }, [setToken])

  useEffect(() => {
    // @ts-ignore
    if (defaultValues)
      reset(defaultValues)
  }, [defaultValues, reset])



  return {
    control,
    token,
    reset: () => {
      reset()
    },
    onSubmit: handleSubmit((value) => {
      onConfig(value.token as TOKEN_TYPE_ENUM)
    })
  }
}
