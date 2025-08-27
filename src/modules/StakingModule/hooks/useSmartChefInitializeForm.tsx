import { useMutation } from "@tanstack/react-query";
import { useCreateStakingPaidEther } from "./useCreateStakingPaidEther";
import { ISmartChefExtend } from "./useSmartChefInitialize";

export const useSmartChefInitializeForm = () => {
  const { onCreateStakingPaidEther, resetState } = useCreateStakingPaidEther();

  const {
    isLoading,
    status,
    mutateAsync,
    reset: resetCreateStaking,
  } = useMutation((staking: ISmartChefExtend) => {
    resetState();
    return onCreateStakingPaidEther(staking);
  }, {});

  return {
    isLoading,
    status,
    resetCreateStaking,
    onCreateStaking: (values: any) => {
      mutateAsync(values)
    },
  };
};
