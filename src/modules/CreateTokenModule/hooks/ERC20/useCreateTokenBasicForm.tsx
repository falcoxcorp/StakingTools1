import { useMutation } from '@tanstack/react-query';
import { useCreateTokenPaidEther } from '../../../services/createToken.bsc.piadEther.services';
import { ICreateTokenERC20Extender } from './useERC20StepForm';

export const useCreateTokenBasicForm = () => {
  const { onCreateTokenPaidEther, resetState } = useCreateTokenPaidEther()

  const { isLoading, status, mutateAsync, reset: resetCreateToken } = useMutation((createToken: ICreateTokenERC20Extender) => {
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

