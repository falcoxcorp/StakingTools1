import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ServiceContractInstance } from "../../../../contracts/service/service.instance";
import { METHODS_SERVICE } from "../../interfaces/service.interface";
import { serviceUpdateTokenPaymentSchema } from "../../schemas/service.schema";
import useToggle from "../../../../common/hooks/useToggle";
import { SERVICE_ENUM } from "../../../../settings/service";
import { getParseEther } from "../../../../utils/number";
import { useCallGetServiceTokenPayment } from "../useServicesCalls";

export type IServicePayment = {
  payment: number,
  active: boolean,
  tokenAddress: {
    name: string,
    address: string | null
  }
  service: SERVICE_ENUM
}

export const initStakingAmount: IServicePayment = {
  tokenAddress: {
    name: '',
    address: null
  },
  payment: 0,
  active: false,
  service: SERVICE_ENUM.SERVICE_STAKING
}

export const useServiceUpdateTokenPaymentForm = (serviceAddress: string) => {
  const { updateTokenPayment, isLoading } = useServiceUpdateTokenPayment({
    SERVICE_ADDRESS: serviceAddress
  })

  const { control, handleSubmit, reset, watch } =
    useForm({
      // @ts-ignore
      resolver: yupResolver(serviceUpdateTokenPaymentSchema),
      defaultValues: initStakingAmount,
    });

  const tokenAddress = watch('tokenAddress')
  const service = watch('service')

  const { data: getPayment } = useCallGetServiceTokenPayment(serviceAddress, service as SERVICE_ENUM, tokenAddress?.address as string)

  return {
    control,
    tokenAddress,
    getPayment,
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

export const useServiceUpdateTokenPayment = ({ SERVICE_ADDRESS }: { SERVICE_ADDRESS: string }) => {
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
        toast.success(t('message.updateToken'))
        queryClient.removeQueries([METHODS_SERVICE.updateToken])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const updateTokenPayment = useCallback(async ({ active, payment, service, tokenAddress }: IServicePayment) => {
    onToggle()
    await sendTransaction({
      to: SERVICE_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_SERVICE.updateToken, [tokenAddress.address, service, getParseEther(payment), active])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SERVICE_ADDRESS, sendTransaction]);

  return {
    updateTokenPayment,
    isLoading: isOpen
  }
}