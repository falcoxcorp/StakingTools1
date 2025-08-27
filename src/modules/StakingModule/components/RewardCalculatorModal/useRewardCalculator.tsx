import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { rewardCalculateSchema } from "../../schemas/roi-balance";
import { useEffect } from "react";
import useToggle from "../../../../common/hooks/useToggle";

const initValue = {
  balance: 0,
}

export const useRewardCalculator = (defaultValues: any = initValue) => {
  const { isOpen, onToggle } = useToggle(false)
  const { control, watch, reset } =
    useForm({
      resolver: yupResolver(rewardCalculateSchema),
      defaultValues,
    });

  useEffect(() => {
    if (defaultValues) {
      reset()
    }
  }, [reset])

  const balance = watch('balance')

  return {
    control,
    balance,
    reset,
    isOpen,
    onToggle
  }
}