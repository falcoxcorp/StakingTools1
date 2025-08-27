import * as Yup from "yup";
import { exRegWallet } from "../../../utils/exReg";
import { YUP_ERRORS } from "../../Common/constants/yup.errors";

export const getTokenConfig = Yup.object().shape({
  tokenAddress: Yup.string()
    .required(YUP_ERRORS.REQUIRED)
    .matches(exRegWallet, { message: YUP_ERRORS.VALID_WALLET })
    .transform((token: any) => token?.address || token),
});

export const updateTokenConfig = Yup.object().shape({
  tokenAddress: Yup.string()
    .required(YUP_ERRORS.REQUIRED)
    .matches(exRegWallet, { message: YUP_ERRORS.VALID_WALLET })
    .transform((token: any) => token?.address || token),
  name: Yup.string().required("required"),
  isActive: Yup.boolean().required("required").default(false),
  paymentAmount: Yup.number().positive().min(0).nullable().typeError(""),
});

export const updateEtherConfig = Yup.object().shape({
  isActive: Yup.boolean().required("required").default(false),
  paymentAmount: Yup.number().positive().min(0).nullable().typeError(""),
});

export const withdrawTokenSchema = Yup.object().shape({
  withdraw: Yup
    .number()
    .positive()
    .required(YUP_ERRORS.REQUIRED),
  tokenAddress: Yup.string().required(YUP_ERRORS.REQUIRED)
});