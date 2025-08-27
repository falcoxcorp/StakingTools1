import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ServiceContractInstance } from "../../../../contracts/service/service.instance";
import { METHODS_SERVICE } from "../../interfaces/service.interface";
import { serviceWithdrawByTokenSchema } from "../../schemas/service.schema";
import useToggle from "../../../../common/hooks/useToggle";
import { SERVICE_ENUM } from "../../../../settings/service";
import { getParseEther } from "../../../../utils/number";
import { useCallGetBalanceToken } from "../useServicesCalls";

export type IServicePayment = {
  amount: number,
  service: SERVICE_ENUM
  tokenAddress: {
    name: string,
    address: string | null
  }
}

export const initStakingAmount: IServicePayment = {
  tokenAddress: {
    name: '',
    address: null
  },
  service: SERVICE_ENUM.SERVICE_STAKING,
  amount: 0
}

export const useServiceWithdrawByTokenForm = (serviceAddress: string) => {

  const { updateTokenPayment, isLoading } = useServiceWithdrawByToken({
    SERVICE_ADDRESS: serviceAddress
  })

  const { control, handleSubmit, reset, watch } =
    useForm({
      // @ts-ignore
      resolver: yupResolver(serviceWithdrawByTokenSchema),
      defaultValues: initStakingAmount,
    });

  const tokenAddress = watch('tokenAddress')

  const { data: balance } = useCallGetBalanceToken(serviceAddress, tokenAddress?.address as string)

  return {
    control,
    tokenAddress,
    balance,
    reset: () => {
      reset();
    },
    watch,
    onSubmit: handleSubmit((values: any) => {
      updateTokenPayment(values)
    }),
    isLoading
  };
};

export const useServiceWithdrawByToken = ({ SERVICE_ADDRESS }: { SERVICE_ADDRESS: string }) => {
  const { t } = useTranslation('service')
  const queryClient = useQueryClient()
  const { isOpen, onToggle } = useToggle()
  const instance = ServiceContractInstance(SERVICE_ADDRESS)
  const { sendTransaction, state, resetState } = useSendTransaction();

  useEffect(() => {
    if (state) {
      if (state.status === 'Exception' || state.status === 'Fail') {
        toast.error(state.errorMessage as string)
        resetState()
        return
      } else if (state.status === 'Success') {
        toast.success(t('message.withdrawByToken'))
        queryClient.removeQueries([METHODS_SERVICE.withdrawByToken, METHODS_SERVICE.getBalanceToken])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const updateTokenPayment = useCallback(async ({ tokenAddress, amount }: IServicePayment) => {
    onToggle()
    await sendTransaction({
      to: SERVICE_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_SERVICE.withdrawByToken, [tokenAddress.address, getParseEther(amount)])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SERVICE_ADDRESS, sendTransaction]);

  return {
    updateTokenPayment,
    isLoading: isOpen
  }
}