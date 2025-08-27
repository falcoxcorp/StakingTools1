import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ServiceContractInstance } from "../../../../contracts/service/service.instance";
import { METHODS_SERVICE } from "../../interfaces/service.interface";
import { serviceUpdateEtherPaymentSchema } from "../../schemas/service.schema";
import useToggle from "../../../../common/hooks/useToggle";
import { SERVICE_ENUM } from "../../../../settings/service";
import { getParseEther } from "../../../../utils/number";
import { useCallGetServicePayment } from "../useServicesCalls";

export type IServicePayment = {
  payment: number, active: boolean, service: SERVICE_ENUM
}

export const initStakingAmount: IServicePayment = {
  payment: 0,
  active: false,
  service: SERVICE_ENUM.SERVICE_STAKING
}

export const useServiceUpdateEtherPaymentForm = (serviceAddress: string) => {
  const { updateEtherPayment, isLoading } = useServiceUpdateEtherPayment({
    SERVICE_ADDRESS: serviceAddress
  })

  const { control, handleSubmit, reset, watch } =
    useForm({
      resolver: yupResolver(serviceUpdateEtherPaymentSchema),
      defaultValues: initStakingAmount,
    });

  const service = watch('service')

  const { data: getPayment } = useCallGetServicePayment(serviceAddress, service as SERVICE_ENUM)

  return {
    control,
    getPayment,
    reset: () => {
      reset();
    },
    watch,
    onSubmit: handleSubmit((values: any) => {
      updateEtherPayment(values)
    }),
    isLoading
  };
};

export const useServiceUpdateEtherPayment = ({ SERVICE_ADDRESS }: { SERVICE_ADDRESS: string }) => {
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
        toast.success(t('message.updateService'))
        queryClient.removeQueries([METHODS_SERVICE.updateService])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const updateEtherPayment = useCallback(async ({ active, payment, service }: IServicePayment) => {
    onToggle()
    await sendTransaction({
      to: SERVICE_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_SERVICE.updateService, [service, active, getParseEther(payment)])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SERVICE_ADDRESS, sendTransaction]);

  return {
    updateEtherPayment,
    isLoading: isOpen
  }
}