import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SERVICE_ENUM } from "../../../settings/service";
import { ISmartChef } from "../interfaces/ISmartChef";
import { useSmartChefInitializeForm } from "./useSmartChefInitializeForm";
import { NETWORKS_STAKING_FACTORY, NETWORKS_STAKING_FACTORY_MAP } from "../../../contracts/staking/staking.intance";
import { useServicePaymentAmount } from "../../ServiceModule/hooks/useServicePaymentAmount";
import { IStakingCommon } from "../../Common/interfaces/ICommon";
import { METHODS_SERVICE } from "../../ServiceModule/interfaces/service.interface";
import { formatEther } from "ethers/lib/utils";
import { SERVICE_MAP } from "../../../contracts/service/service.instance";
import { isEmpty } from "lodash";
import { getBlockByDate } from "../../../utils/block-time";
import { addDays } from "date-fns";
import { createStakingFactorySchema } from "../schemas/staking-factory.schema";

export type ISmartChefExtend = IStakingCommon & ISmartChef

export const initCreateStaking: ISmartChefExtend = {
  stakedToken: "",
  rewardToken: "",
  rewardPerBlock: 0,
  startBlock: new Date(),
  bonusEndBlock: addDays(new Date(), 2),
  poolLimitPerUser: 0,
  numberBlocksForUserLimit: {
    active: false,
    date: addDays(new Date(), 1)
  },

  _service: SERVICE_ENUM.SERVICE_STAKING,
  paidByToken: false,
  isVerify: false,
  tokenAddress: undefined,
  chainId: 0,
  activeStep: 0,
  paymentAmount: 0
};

export const useSmartChefInitialize = (
  defaultValues: ISmartChefExtend = initCreateStaking
) => {
  const { isLoading, status, resetCreateStaking, onCreateStaking } =
    useSmartChefInitializeForm();

  const { control, handleSubmit, reset, watch, getValues, getFieldState, setValue, /* formState: { errors } */ } =
    useForm({
      // @ts-ignore
      resolver: yupResolver(createStakingFactorySchema),
      defaultValues,
    });
    
  const paidByToken = Boolean(watch("paidByToken"));
  const tokenAddress: any = watch("tokenAddress");
  const activeStep = Number(watch('activeStep'))
  const chainId = Number(watch('chainId'))
  const paymentAmount = Number(watch('paymentAmount'))
  const activeLimitUser = watch?.('numberBlocksForUserLimit.active')
  const startBlock = watch?.('startBlock')
  const bonusEndBlock = watch?.('bonusEndBlock')
    
  const { value, nameToken } = useServicePaymentAmount({
    activeStep: activeStep,
    service: SERVICE_MAP[chainId],
    method: paidByToken ? METHODS_SERVICE.getServiceTokenPayment : METHODS_SERVICE.getServicePayment,
    args: paidByToken ? [SERVICE_ENUM.SERVICE_STAKING, tokenAddress?.address] : [SERVICE_ENUM.SERVICE_STAKING],
    symbol: paidByToken ? tokenAddress?.name : NETWORKS_STAKING_FACTORY_MAP[chainId]?.symbol
  })

  useEffect(() => {
    setValue('paymentAmount', 0)
    if (!isEmpty(value)) {
      const payment = formatEther?.(value?.[0])
      setValue('paymentAmount', Number(payment || 0))
    }
  }, [value, setValue])

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);


  const handleNext = () => {
    setValue('activeStep', activeStep + 1);
  };

  const handleBack = () => {
    setValue('activeStep', activeStep - 1);
  };

  return {
    control,
    reset: () => {
      resetCreateStaking();
      reset();
    },
    paidByToken,
    activeStep,
    nameToken,
    chainId,
    paymentAmount,
    watch,
    getValues,
    getFieldState,
    startBlock, bonusEndBlock,
    activeLimitUser,
    handleBack, handleNext,
    isVerify: watch("isVerify"),
    onSubmit: handleSubmit((values: any) => {
      if (values?.activeStep === 2) {
        const { startBlock, bonusEndBlock, numberBlocksForUserLimit, chainId, ...rest } = values
        const network = NETWORKS_STAKING_FACTORY.find(n => n.chainId === values?.chainId)
        onCreateStaking({
          ...rest,
          chainId,
          startBlock: getBlockByDate(startBlock, chainId),
          bonusEndBlock: getBlockByDate(bonusEndBlock, chainId),
          numberBlocksForUserLimit: numberBlocksForUserLimit.active ? getBlockByDate(numberBlocksForUserLimit.date, chainId) : 0,
          network
        })
      } else {
        handleNext()
      }
    }),
    isLoading,
    status,
    tokenAddress,
  };
};



