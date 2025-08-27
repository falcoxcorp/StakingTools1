import * as Yup from "yup";
import { YUP_ERRORS } from "../../Common/constants/yup.errors";

export const WalletRegex = /^(0x)?[0-9a-fA-F]{40}$/;

export const roiSchema = Yup.object().shape({
  balance: Yup.number()
    .required(YUP_ERRORS.REQUIRED)
    .default(0)
    .min(0, YUP_ERRORS.MIN_0)
    .typeError(""),
  staked: Yup.number()
    .required(YUP_ERRORS.REQUIRED)
    .default(0)
    .min(0, YUP_ERRORS.MIN_0)
    .typeError("")
});

export const rewardCalculateSchema = Yup.object().shape({
  balance: Yup.number()
    .required(YUP_ERRORS.REQUIRED)
    .default(0)
    .min(0, YUP_ERRORS.MIN_0)
    .typeError("")
});
