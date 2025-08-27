import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { ICreateTokenERC20, METHODS_ERC20 } from '../../../interfaces';
import { createTokenERC20Schema } from '../../../schemas';
import { useCreateTokenBasicForm } from './useCreateTokenBasicForm';
import { INetworks, TOKEN_TYPE_ENUM } from '../../../../contracts/instances/interfaces';
import { usePaymentAmount } from './usePaymentAmount';
import { useNetworkUtils } from '../../../../hooks/useNetworkUtils';
import { formatEther } from 'ethers/lib/utils';
import { LIST_NETWORKS_ERC20 } from '../../../../contracts/instances/ERC20/network-token-erc20';

export interface ICreateTokenERC20Extender extends ICreateTokenERC20 {
  chainId: number,
  network?: INetworks,
  paymentAmount: number
  activeStep: number
  isVerify: boolean
}

export const initCreateTokenValues: ICreateTokenERC20Extender = {
  _NAME: '',
  _SYMBOL: '',
  _DECIMALS: 18,
  _supply: 21000000,
  _txFee: 0,
  _lpFee: 0,
  _DexFee: 0,
  feeAddress: '',
  tokenOwner: '',
  tokenAddress: '',

  paidByToken: false,
  chainId: 0,
  paymentAmount: 0,
  activeStep: 0,
  isVerify: false
}

export const useERC20StepForm = (defaultValues: ICreateTokenERC20Extender = initCreateTokenValues) => {
  const { isLoading, status, resetCreateToken, onCreateToken } = useCreateTokenBasicForm()

  const { control, handleSubmit, reset, watch, setValue, getValues, getFieldState } = useForm({
    resolver: yupResolver(createTokenERC20Schema),
    defaultValues
  });
  
  const { getERC20Networks } = useNetworkUtils()
  const chainId = Number(watch('chainId'))
  const network = getERC20Networks(chainId, TOKEN_TYPE_ENUM.BASIC)

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
    isVerify:  watch('isVerify'),
    onSubmit: handleSubmit((values: any) => {
      if (values?.activeStep === 2) {
        const network = LIST_NETWORKS_ERC20[TOKEN_TYPE_ENUM.BASIC].find(nt => nt.chainId === values?.chainId)
        onCreateToken({
          ...values,
          network
        })
      } else {
        handleNext()
      }
    }),
    isLoading,
    status,
    nameToken
  };
}

