import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ServiceContractInstance } from "../../../../contracts/service/service.instance";
import { METHODS_SERVICE } from "../../interfaces/service.interface";
import { serviceWithdrawEtherSchema } from "../../schemas/service.schema";
import useToggle from "../../../../common/hooks/useToggle";
import { getParseEther } from "../../../../utils/number";
import { useCallGetBalanceEther } from "../useServicesCalls";

export type IServicePayment = {
  amount: number
}

export const initStakingAmount: IServicePayment = {
  amount: 0
}

export const useServiceWithdrawEtherForm = (serviceAddress: string) => {

  const { updateTokenPayment, isLoading } = useServiceWithdrawEther({
    SERVICE_ADDRESS: serviceAddress
  })

  const { control, handleSubmit, reset, watch } =
    useForm({
      // @ts-ignore
      resolver: yupResolver(serviceWithdrawEtherSchema),
      defaultValues: initStakingAmount,
    });

  const { data: balance } = useCallGetBalanceEther(serviceAddress)

  return {
    control,
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

export const useServiceWithdrawEther = ({ SERVICE_ADDRESS }: { SERVICE_ADDRESS: string }) => {
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
        toast.success(t('message.withdrawByEther'))
        queryClient.removeQueries([METHODS_SERVICE.withdrawByEther, METHODS_SERVICE.getBalanceEther])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const updateTokenPayment = useCallback(async ({ amount }: IServicePayment) => {
    onToggle()
    await sendTransaction({
      to: SERVICE_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_SERVICE.withdrawByEther, [getParseEther(amount)])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SERVICE_ADDRESS, sendTransaction]);

  return {
    updateTokenPayment,
    isLoading: isOpen
  }
}