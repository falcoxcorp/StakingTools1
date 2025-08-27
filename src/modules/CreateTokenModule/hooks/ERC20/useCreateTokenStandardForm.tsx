import { useMutation } from '@tanstack/react-query';
import { useCreateTokenStandardPaidEther } from '../../../services/createToken.standard.bsc.piadEther.services';
import { ICreateTokenERC20StandardExtender } from './useERC20StepStandardForm';

export const useCreateTokenStandardForm = () => {
  const { onCreateTokenPaidEther, resetState } = useCreateTokenStandardPaidEther()

  const { isLoading, status, mutateAsync, reset: resetCreateToken } = useMutation((createToken: ICreateTokenERC20StandardExtender) => {
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

