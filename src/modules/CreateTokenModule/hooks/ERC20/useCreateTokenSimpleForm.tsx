import { useMutation } from '@tanstack/react-query';
import { useCreateTokenSimplePaidEther } from '../../../services/createToken.simple.bsc.piadEther.services';
import { ICreateTokenSimpleERC20Extender } from './useERC20StepSimpleForm';

export const useCreateTokenSimpleForm = () => {
  const { onCreateTokenPaidEther, resetState } = useCreateTokenSimplePaidEther()

  const { isLoading, status, mutateAsync, reset: resetCreateToken } = useMutation((createToken: ICreateTokenSimpleERC20Extender) => {
    resetState()
    return onCreateTokenPaidEther(createToken)
  }, {

  })

  return {
    isLoading,
    status,
    resetCreateToken,
    onCreateToken: (values: any) => {

      // console.log(values)
      mutateAsync(values)
    }
  };
}

