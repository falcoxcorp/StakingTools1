import * as Yup from 'yup';
import { STEP_ENUM } from '../Common/constants/step';
import { YUP_ERRORS } from '../Common/constants/yup.errors';

export const WalletRegex = /^(0x)?[0-9a-fA-F]{40}$/
const letterRegex = /^[a-zA-Z]+$/;
const letterSpaceRegex = /^[a-zA-Z\s]+$/;

export const createTokenSimpleERC20Schema = Yup.object().shape({
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
  _decimals: Yup.number().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .integer(YUP_ERRORS.ERROR_IS_INTEGER)
        .required(YUP_ERRORS.REQUIRED)
        .min(1, YUP_ERRORS.DECIMALS.MIN_1)
        .max(18, YUP_ERRORS.DECIMALS.MAX_18)
        .typeError('')
        .nullable()
  }),
  /* _initialMint: Yup.number().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(21000000).typeError('')
      .nullable()
  }), */
  _initialMint: Yup.number().when("activeStep", {
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
  _owner: Yup.string().when('activeStep', {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED).matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET })
  }),
  tokenAddress: Yup.string().when(['activeStep', 'paidByToken'], {
    is: (activeStep: number, paidByToken: boolean) => {
      if (activeStep === STEP_ENUM.FACTORY)
        return paidByToken
      return false
    },
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED).transform((token: any) => token?.address || token)
  })
});


