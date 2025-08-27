import * as Yup from "yup";
import { YUP_ERRORS } from "../../Common/constants/yup.errors";

export const WalletRegex = /^(0x)?[0-9a-fA-F]{40}$/;

export const depositStakingSchema = Yup.object().shape({
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
