import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { INetworks, TOKEN_TYPE_ENUM } from '../../../contracts/instances/interfaces';
import { networkSchema } from '../../UserModule/schemas/select-networks.schema';



export interface ISelectNetwork {
  network: INetworks | null,
  token: TOKEN_TYPE_ENUM
}

export const initCreateTokenValues: ISelectNetwork = {
  network: null,
  token: TOKEN_TYPE_ENUM.BASIC
}

export const useStakingSelectNetworkForm = (defaultValues: ISelectNetwork = initCreateTokenValues) => {
  const { control, reset, watch } = useForm({
    //@ts-ignore
    resolver: yupResolver(networkSchema),
    defaultValues
  });

  const network = watch('network')

  useEffect(() => {
    // @ts-ignore
    if (defaultValues)
      reset(defaultValues)
  }, [defaultValues, reset])



  return {
    control,
    network,
    reset: () => {
      reset()
    },
  }
}
