import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { METHODS_ERC20 } from '../../../interfaces';
import { useCreateTokenStandardForm } from './useCreateTokenStandardForm';
import { INetworks, TOKEN_TYPE_ENUM } from '../../../../contracts/instances/interfaces';
import { usePaymentAmount } from './usePaymentAmount';
import { useNetworkUtils } from '../../../../hooks/useNetworkUtils';
import { formatEther } from 'ethers/lib/utils';
import { LIST_NETWORKS_ERC20 } from '../../../../contracts/instances/ERC20/network-token-erc20';
import { ICreateTokenStandardERC20 } from '../../../interfaces/create-token-standard.interface';
import { createTokenERC20StandardSchema } from '../../../schemas/create-token-standard-erc20.schema';

export interface ICreateTokenERC20StandardExtender extends ICreateTokenStandardERC20 {
  chainId: number,
  network?: INetworks,
  paymentAmount: number
  activeStep: number
  isVerify: boolean
  isCustomRouter: boolean
}

export const initCreateTokenValues: ICreateTokenERC20StandardExtender = {
  _NAME: '',
  _SYMBOL: '',
  _DECIMALS: 18,
  _supply: 21000000,
  _txFee: 0,
  _lpFee: 0,
  _DexFee: 0,
  feeAddress: '',
  routerAddress: '',
  tokenOwner: '',
  tokenAddress: '',

  paidByToken: false,
  chainId: 0,
  paymentAmount: 0,
  activeStep: 0,
  isVerify: false,
  isCustomRouter: false
}

export const useERC20StepStandardForm = (defaultValues: ICreateTokenERC20StandardExtender = initCreateTokenValues) => {
  const { isLoading, status, resetCreateToken, onCreateToken } = useCreateTokenStandardForm()

  const { control, handleSubmit, reset, watch, setValue, getValues, getFieldState } = useForm({
    resolver: yupResolver(createTokenERC20StandardSchema),
    defaultValues
  });

  const { getERC20Networks, gerRouterAddress } = useNetworkUtils()
  const chainId = Number(watch('chainId'))
  const network = getERC20Networks(chainId, TOKEN_TYPE_ENUM.STANDARD)
  const router = gerRouterAddress(chainId, TOKEN_TYPE_ENUM.STANDARD)
  const activeStep = Number(watch('activeStep'))
  const paidByToken = Boolean(watch('paidByToken'))
  const _supply = Number(watch('_supply'))
  const tokenAddress = watch('tokenAddress')
  const paymentAmount = Number(watch('paymentAmount'))


  const { value, nameToken } = usePaymentAmount({
    activeStep: activeStep,
    network: network,
    method: paidByToken ? METHODS_ERC20.TOKEN_MATRIX : METHODS_ERC20.CONFIG_ETHER,
    args: paidByToken ? [tokenAddress] : [],
    paidByToken: paidByToken
  })

  useEffect(() => {
    setValue('paymentAmount', 0)
    if (value?.paymentAmount) {
      const payment = formatEther?.(value?.paymentAmount)
      setValue('paymentAmount', Number(payment || 0))
    }
  }, [value?.paymentAmount, setValue])


  useEffect(() => {
    // @ts-ignore
    if (defaultValues)
      reset(defaultValues)
  }, [defaultValues, reset])


  const handleNext = () => {
    setValue('activeStep', activeStep + 1);
  };

  const handleBack = () => {
    setValue('activeStep', activeStep - 1);
  };

  return {
    control,
    reset: () => {
      resetCreateToken()
      reset()
    },
    activeStep,
    paidByToken,
    _supply,
    chainId,
    paymentAmount,
    watch,
    getValues,
    getFieldState,
    handleBack,
    handleNext,
    isVerify: watch('isVerify'),
    isCustomRouter: watch('isCustomRouter') || false,
    onSubmit: handleSubmit((values: any) => {
      if (values?.activeStep === 2) {
        const network = LIST_NETWORKS_ERC20[TOKEN_TYPE_ENUM.STANDARD].find(nt => nt.chainId === values?.chainId)        
        onCreateToken({
          ...values,
          network,
          routerAddress: values?.routerAddress || router?.router?.address
        })
      } else {
        handleNext()
      }
    }),
    isLoading,
    status,
    nameToken,
    router
  };
}

