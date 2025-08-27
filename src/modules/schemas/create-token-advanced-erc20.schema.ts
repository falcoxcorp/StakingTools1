import * as Yup from 'yup';
import { STEP_ENUM } from '../Common/constants/step';
import { YUP_ERRORS } from '../Common/constants/yup.errors';

export const WalletRegex = /^(0x)?[0-9a-fA-F]{40}$/
const letterRegex = /^[a-zA-Z]+$/;
const letterSpaceRegex = /^[a-zA-Z\s]+$/;

export const createTokenAdvancedERC20Schema = Yup.object().shape({
  isVerify: Yup.boolean(),
  activeStep: Yup.number().default(0),
  paidByToken: Yup.boolean().default(false),
  chainId: Yup.number(),
  paymentAmount: Yup.number(),

  _name: Yup.string().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED).matches(letterSpaceRegex, { message: YUP_ERRORS.FORMAT })
  }),
  _symbol: Yup.string().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED).max(5, YUP_ERRORS.SYMBOL.MAX_5).matches(letterRegex, { message: YUP_ERRORS.FORMAT })
  }),

  _supply: Yup.number().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema        
        .integer(YUP_ERRORS.ERROR_IS_INTEGER)
        .required(YUP_ERRORS.REQUIRED)
        .default(21000000)
        .typeError("")
        .test(
          "es-18-decimales",
          YUP_ERRORS.NUMBER.MAX_LENGTH_18,
          (value) => {
            const numeroString = value.toString();
            return numeroString.length <= 19;
          }
        ).nullable()
  }),
  
  /* _supply: Yup.number().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(21000000).typeError('')
      .nullable()
  }), */ 
  /* _routerWallet: Yup.string().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED).matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET })
  }), */
  _tokenOwner: Yup.string().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED).matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET })
  }),
  _devWallet: Yup.string().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED).matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET })
  }),
  _marketingWallet: Yup.string().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED).matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET })
  }),
  _charityTaxWallet: Yup.string().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED).matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET })
  }),

  /* TAX BUY */
  _devTaxBuy: Yup.number().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).max(25, YUP_ERRORS.MAX_25).typeError('')
      .nullable()
  }),
  _marketingTaxBuy: Yup.number().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).max(25, YUP_ERRORS.MAX_25).typeError('')
      .nullable()
  }),
  _charityTaxBuy: Yup.number().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).max(25, YUP_ERRORS.MAX_25).typeError('')
      .nullable()
  }),
  _liquidityTaxBuy: Yup.number().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).max(25, YUP_ERRORS.MAX_25).typeError('')
      .nullable()
  }),

  /* TAX SELL */
  _devTaxSell: Yup.number().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).max(25, YUP_ERRORS.MAX_25).typeError('')
      .nullable()
  }),
  _marketingTaxSell: Yup.number().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).max(25, YUP_ERRORS.MAX_25).typeError('')
      .nullable()
  }),
  _charityTaxSell: Yup.number().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).max(25, YUP_ERRORS.MAX_25).typeError('')
      .nullable()
  }),
  _liquidityTaxSell: Yup.number().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).max(25, YUP_ERRORS.MAX_25).typeError('')
      .nullable()
  }),

  _tokenAddress: Yup.string().when(['activeStep', 'paidByToken'], {
    is: (activeStep: number, paidByToken: boolean) => {
      if (activeStep === STEP_ENUM.FACTORY)
        return paidByToken
      return false
    },
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED).transform((token: any) => token?.address || token)
  })
});


