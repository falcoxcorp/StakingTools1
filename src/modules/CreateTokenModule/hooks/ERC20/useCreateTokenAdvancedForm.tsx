import { useMutation } from '@tanstack/react-query';
import { useCreateTokenAdvancedPaidEther } from '../../../services/createToken.advanced.bsc.piadEther.services';
import { ICreateTokenAdvancedERC20Extender } from './useERC20StepAdvancedForm';

export const useCreateTokenAdvancedForm = () => {
  const { onCreateTokenPaidEther, resetState } = useCreateTokenAdvancedPaidEther()

  const { isLoading, status, mutateAsync, reset: resetCreateToken } = useMutation((createToken: ICreateTokenAdvancedERC20Extender) => {
    resetState()
    return onCreateTokenPaidEther(createToken)
  }, {

  })

  return {
    isLoading,
    status,
    resetCreateToken,
    onCreateToken: (values: any) => {
      mutateAsync(values)
    }
  };
}

