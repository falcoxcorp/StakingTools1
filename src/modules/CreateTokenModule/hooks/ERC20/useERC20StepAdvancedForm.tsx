import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { METHODS_ERC20 } from '../../../interfaces';
import { INetworks, TOKEN_TYPE_ENUM } from '../../../../contracts/instances/interfaces';
import { usePaymentAmount } from './usePaymentAmount';
import { useNetworkUtils } from '../../../../hooks/useNetworkUtils';
import { formatEther } from 'ethers/lib/utils';
import { ICreateTokenAdvancedERC20 } from '../../../interfaces/create-token-advanced.interface';
import { createTokenAdvancedERC20Schema } from '../../../schemas/create-token-advanced-erc20.schema';
import { useCreateTokenAdvancedForm } from './useCreateTokenAdvancedForm';
import { LIST_NETWORKS_ERC20 } from '../../../../contracts/instances/ERC20/network-token-erc20';

export interface ICreateTokenAdvancedERC20Extender extends ICreateTokenAdvancedERC20 {
  chainId: number,
  network?: INetworks,
  paymentAmount: number
  activeStep: number
  isVerify: boolean
  paidByToken: boolean

  _tokenAddress: string
  // _routerWallet: string
}

export const initCreateTokenValues: ICreateTokenAdvancedERC20Extender = {
  _name: 'Token Avanzado',
  _symbol: 'AVA',
  _supply: 21000000,
  // _routerWallet: '', // router
  _tokenAddress: '', // router
  _tokenOwner: '0x732df6e20f723D4b3A056D876d98dF22c9207de1',
  _devWallet: '0x732df6e20f723D4b3A056D876d98dF22c9207de1',
  _marketingWallet: '0x732df6e20f723D4b3A056D876d98dF22c9207de1',
  _charityTaxWallet: '0x732df6e20f723D4b3A056D876d98dF22c9207de1',

  _devTaxBuy: 1,
  _marketingTaxBuy: 1,
  _charityTaxBuy: 1,
  _liquidityTaxBuy: 1,

  _devTaxSell: 1,
  _marketingTaxSell: 1,
  _charityTaxSell: 1,
  _liquidityTaxSell: 1,

  chainId: 0,
  paymentAmount: 0,
  activeStep: 0,
  paidByToken: false,
  isVerify: false
}

export const useERC20StepAdvancedForm = (defaultValues: ICreateTokenAdvancedERC20Extender = initCreateTokenValues) => {
  const { isLoading, status, resetCreateToken, onCreateToken } = useCreateTokenAdvancedForm()

  const { control, handleSubmit, reset, watch, setValue, getValues, getFieldState, 
    // formState:{errors} 
  } = useForm({
    resolver: yupResolver(createTokenAdvancedERC20Schema),
    defaultValues
  });

  // console.log(errors)

  const { getERC20Networks } = useNetworkUtils()
  const chainId = Number(watch('chainId'))
  const network = getERC20Networks(chainId, TOKEN_TYPE_ENUM.ADVANCED)

  const activeStep = Number(watch('activeStep'))
  const paidByToken = Boolean(watch('paidByToken'))
  const _supply = Number(watch('_supply'))
  const tokenAddress = watch('_tokenAddress')
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

  const getTaxBuy = [
    Number(watch('_devTaxBuy')),
    Number(watch('_marketingTaxBuy')),
    Number(watch('_charityTaxBuy')),
    Number(watch('_liquidityTaxBuy')),
  ]
  const getTaxSell = [
    Number(watch('_devTaxSell')),
    Number(watch('_marketingTaxSell')),
    Number(watch('_charityTaxSell')),
    Number(watch('_liquidityTaxSell')),
  ]


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
    getTaxBuy,
    getTaxSell,
    isVerify: watch('isVerify'),
    onSubmit: handleSubmit((values: any) => {
      if (values?.activeStep === 2) {
        const network = LIST_NETWORKS_ERC20['ADVANCED'].find(nt => nt.chainId === values?.chainId)
       /*  console.log({
          ...values,
          network
        }) */
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

