import * as Yup from "yup";
import { YUP_ERRORS } from "../../Common/constants/yup.errors";

export const WalletRegex = /^(0x)?[0-9a-fA-F]{40}$/;

export const stakingEmergencyRewardWithdrawSchema = Yup.object().shape({
  balance: Yup.number()
    .required(YUP_ERRORS.REQUIRED)
    .default(0)
    .min(0, YUP_ERRORS.MIN_0)
    .typeError(""),
  amount: Yup.number().default(0)
    .min(0, YUP_ERRORS.MIN_0)
    .required(YUP_ERRORS.REQUIRED)
    .typeError('')
    .test(
      "max-amount",
      "staking:error:max-amount",
      function (amount: number) {
        const { balance } = this.parent;
        return amount <= balance
      }
    ).test(
      "max-zero",
      "staking:error:max-zero",
      function (amount: number) {
        return amount > 0
      }
    )
});

export const stakingUpdateRewardPerBlockFormSchema = Yup.object().shape({
  amount: Yup.number()
    .required(YUP_ERRORS.REQUIRED)
    .default(0)
    .min(0, YUP_ERRORS.MIN_0)
    .typeError(""),
});

export const stakingRecoverTokenFormSchema = Yup.object().shape({
  token: Yup.string().required(YUP_ERRORS.REQUIRED)
    .matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET }),
});

export const stakingUpdateStartAndEndBlocksFormSchema = Yup.object().shape({
  chainId: Yup.number().positive(YUP_ERRORS.NUMBER.POSITIVE).required(YUP_ERRORS.REQUIRED).typeError(''),
  startBlock: Yup.date().required(YUP_ERRORS.REQUIRED),
  bonusEndBlock: Yup.date().required(YUP_ERRORS.REQUIRED)
    .test(
      "is-max-start-block",
      "staking:error:max-start-block",
      function (max: Date) {
        const { startBlock } = this.parent;
        return max > startBlock;
      }
    ),
});
