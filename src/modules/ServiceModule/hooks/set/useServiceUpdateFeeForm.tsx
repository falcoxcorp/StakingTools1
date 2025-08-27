import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ServiceContractInstance } from "../../../../contracts/service/service.instance";
import { METHODS_SERVICE } from "../../interfaces/service.interface";
import { useCallGetFee } from "../useServicesCalls";
import { serviceFeeSchema } from "../../schemas/service.schema";
import useToggle from "../../../../common/hooks/useToggle";

export type IFee = {
  fee: {
    developer: number
    marketing: number
    admin: number

  }
}

export const initStakingAmount: IFee = {
  fee: {
    developer: 0,
    marketing: 0,
    admin: 0
  }
}

export const useServiceUpdateFeeForm = (serviceAddress: string) => {
  const { updateFee, isLoading } = useServiceUpdateFee({
    SERVICE_ADDRESS: serviceAddress
  })

  const { control, handleSubmit, reset, watch, setValue } =
    useForm({
      resolver: yupResolver(serviceFeeSchema),
      defaultValues: initStakingAmount,
    });

  const { data: fee } = useCallGetFee(serviceAddress)

  useEffect(() => {
    if (fee) {
      setValue('fee', fee)
    }
  }, [setValue, fee])

  return {
    control,
    fee,
    reset: () => {
      reset();
    },
    watch,
    onSubmit: handleSubmit((values: any) => {
      updateFee(values)
    }),
    isLoading
  };
};

export const useServiceUpdateFee = ({ SERVICE_ADDRESS }: { SERVICE_ADDRESS: string }) => {
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
        toast.success(t('message.updateFee'))
        queryClient.removeQueries([METHODS_SERVICE.updateFee, METHODS_SERVICE.fee])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const updateFee = useCallback(async ({fee}: IFee) => {
    onToggle()
    await sendTransaction({
      to: SERVICE_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_SERVICE.updateFee, [fee.developer, fee.marketing, fee.admin])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SERVICE_ADDRESS, sendTransaction]);

  return {
    updateFee,
    isLoading: isOpen
  }
}