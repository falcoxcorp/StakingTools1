import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { roiSchema } from "../../schemas/roi-balance";
import { DAY_IN_SECUND } from "../../../../utils/block-time";
import { useEffect } from "react";
import useToggle from "../../../../common/hooks/useToggle";

const initValue = {
  balance: 0,
  staked: DAY_IN_SECUND,
  type: 'USD'
}

export const useRoiCalculator = (defaultValues: any = initValue) => {
  const { isOpen, onToggle } = useToggle(false)
  const { control, watch, reset } =
    useForm({
      resolver: yupResolver(roiSchema),
      defaultValues,
    });

  useEffect(() => {
    if (defaultValues) {
      reset()
    }
  }, [reset])

  const balance = watch('balance')
  const staked = watch('staked')

  return {
    control,
    balance,
    staked,
    reset,
    isOpen,
    onToggle
  }
}