import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ServiceContractInstance } from "../../../../contracts/service/service.instance";
import { METHODS_SERVICE } from "../../interfaces/service.interface";
import { useCallGetAdminWallet } from "../useServicesCalls";
import { serviceAdminWalletSchema } from "../../schemas/service.schema";
import useToggle from "../../../../common/hooks/useToggle";

export type IAdminWallet = {
  wallet: {
    developer: string
    marketing: string
    admin: string

  }
}

export const initStakingAmount: IAdminWallet = {
  wallet: {
    developer: '',
    marketing: '',
    admin: ''
  }
}

export const useServiceUpdateAdminWalletForm = (serviceAddress: string) => {
  const { updateAdminWallet, isLoading } = useServiceUpdateAdminWallet({
    SERVICE_ADDRESS: serviceAddress
  })

  const { control, handleSubmit, reset, watch, setValue } =
    useForm({
      resolver: yupResolver(serviceAdminWalletSchema),
      defaultValues: initStakingAmount,
    });

  const { data: wallet } = useCallGetAdminWallet(serviceAddress)

  useEffect(() => {
    if (wallet) {
      setValue('wallet', wallet)
    }
  }, [setValue, wallet])

  return {
    control,
    wallet,
    reset: () => {
      reset();
    },
    watch,
    onSubmit: handleSubmit((values: any) => {
      updateAdminWallet(values)
    }),
    isLoading
  };
};

export const useServiceUpdateAdminWallet = ({ SERVICE_ADDRESS }: { SERVICE_ADDRESS: string }) => {
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
        toast.success(t('message.updateAdminWallet'))
        queryClient.removeQueries([METHODS_SERVICE.updateAdminWallet, METHODS_SERVICE.adminWallet])
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const updateAdminWallet = useCallback(async ({wallet}: IAdminWallet) => {
    onToggle()
    await sendTransaction({
      to: SERVICE_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData(METHODS_SERVICE.updateAdminWallet, [wallet.developer, wallet.marketing, wallet.admin])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, SERVICE_ADDRESS, sendTransaction]);

  return {
    updateAdminWallet,
    isLoading: isOpen
  }
}