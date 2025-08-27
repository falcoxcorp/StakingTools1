import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { getTokenConfig } from '../schemas';

interface ITokenConfigGet {
  tokenAddress: string
}

export const initTokenConfigValues: ITokenConfigGet = {
  tokenAddress: ''
}

export const useTokenConfigGetForm = (defaultValues: ITokenConfigGet = initTokenConfigValues) => {
  const { control, handleSubmit, reset, watch    // formState: { errors }
  } = useForm({
    resolver: yupResolver(getTokenConfig),
    defaultValues
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues)
      reset(defaultValues)
  }, [defaultValues, reset])

 

  return {
    control,
    reset: () => {
      reset()
    },
    tokenAddress: watch('tokenAddress'),
    onSubmit: handleSubmit(() => {
      
      // console.log(values)     
      // mutateAsync(values)
    })
  };
}

