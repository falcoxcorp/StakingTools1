import * as Yup from "yup";
import { STEP_ENUM } from "../Common/constants/step";
import { YUP_ERRORS } from "../Common/constants/yup.errors";

export const WalletRegex = /^(0x)?[0-9a-fA-F]{40}$/;
const letterRegex = /^[a-zA-Z]+$/;
const letterSpaceRegex = /^[a-zA-Z\s]+$/;

export const createTokenERC20StandardSchema = Yup.object().shape({
  isVerify: Yup.boolean(),
  isCustomRouter: Yup.boolean(),
  activeStep: Yup.number().default(0),
  paidByToken: Yup.boolean().default(false),
  chainId: Yup.number(),
  paymentAmount: Yup.number(),
  _NAME: Yup.string().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .required(YUP_ERRORS.REQUIRED)
        .matches(letterSpaceRegex, { message: YUP_ERRORS.FORMAT }),
  }),
  _SYMBOL: Yup.string().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .required(YUP_ERRORS.REQUIRED)
        .max(5, YUP_ERRORS.SYMBOL.MAX_5)
        .matches(letterRegex, { message: YUP_ERRORS.FORMAT }),
  }),
  _DECIMALS: Yup.number().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .integer(YUP_ERRORS.ERROR_IS_INTEGER)
        .required(YUP_ERRORS.REQUIRED)
        .min(1, YUP_ERRORS.DECIMALS.MIN_1)
        .max(18, YUP_ERRORS.DECIMALS.MAX_18)
        .typeError("")
        .nullable(),
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
  _txFee: Yup.number().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .integer(YUP_ERRORS.ERROR_IS_INTEGER)
        .required(YUP_ERRORS.REQUIRED)
        .default(0)
        .min(0, YUP_ERRORS.MIN_0)
        .max(100, YUP_ERRORS.MAX_100)
        .typeError("")
        .nullable(),
  }),
  _lpFee: Yup.number().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .integer(YUP_ERRORS.ERROR_IS_INTEGER)
        .required(YUP_ERRORS.REQUIRED)
        .default(0)
        .min(0, YUP_ERRORS.MIN_0)
        .max(100, YUP_ERRORS.MAX_100)
        .typeError("")
        .nullable(),
  }),
  _DexFee: Yup.number().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .integer(YUP_ERRORS.ERROR_IS_INTEGER)
        .required(YUP_ERRORS.REQUIRED)
        .default(0)
        .min(0, YUP_ERRORS.MIN_0)
        .max(100, YUP_ERRORS.MAX_100)
        .typeError("")
        .nullable(),
  }),
  routerAddress: Yup.string().when(["activeStep", "isCustomRouter"], {
    is: (activeStep: number, isCustomRouter: boolean) => {
      if (activeStep === STEP_ENUM.FACTORY) return isCustomRouter;
      return false;
    },
    then: (schema) =>
      schema
        .required(YUP_ERRORS.REQUIRED)
        .matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET }),
  }),
  feeAddress: Yup.string().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .required(YUP_ERRORS.REQUIRED)
        .matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET }),
  }),
  tokenOwner: Yup.string().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .required(YUP_ERRORS.REQUIRED)
        .matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET }),
  }),
  tokenAddress: Yup.string().when(["activeStep", "paidByToken"], {
    is: (activeStep: number, paidByToken: boolean) => {
      if (activeStep === STEP_ENUM.FACTORY) return paidByToken;
      return false;
    },
    then: (schema) =>
      schema
        .required(YUP_ERRORS.REQUIRED)
        .transform((token: any) => token?.address || token),
  }),
});
