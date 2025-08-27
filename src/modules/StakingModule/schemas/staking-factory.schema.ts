import * as Yup from "yup";
import { YUP_ERRORS } from "../../Common/constants/yup.errors";
import { STEP_ENUM } from "../../Common/constants/step";
import { commonFormSchema } from "./common.schema";

export const WalletRegex = /^(0x)?[0-9a-fA-F]{40}$/;

export const createStakingFactorySchema = Yup.object().shape({
  ...commonFormSchema,
  _service: Yup.string().nullable().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED),
  }),
  stakedToken: Yup.string().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .required(YUP_ERRORS.REQUIRED)
        .matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET }),
  }),

  rewardToken: Yup.string().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .required(YUP_ERRORS.REQUIRED)
        .matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET }),
  }),
  rewardPerBlock: Yup.number().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        // .integer(YUP_ERRORS.ERROR_IS_INTEGER)
        .required(YUP_ERRORS.REQUIRED)
        .default(0)
        .min(0, YUP_ERRORS.MIN_0)
        .typeError("")
        .test(
          "greater-than-zero",
          "staking:error:greater-than-zero",
          function (rewardPerBlock: number) {
            return rewardPerBlock > 0
          }
        ),
  }),

  startBlock: Yup.date().when(["activeStep", "chainId"], {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .required(YUP_ERRORS.REQUIRED)
  }),
  bonusEndBlock: Yup.date().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .required(YUP_ERRORS.REQUIRED)
        .test(
          "is-max-start-block",
          "staking:error:max-start-block",
          function (max: Date) {
            const { startBlock } = this.parent;
            return max > startBlock;
          }
        ),
  }),
  numberBlocksForUserLimit: Yup.object().shape({
    active: Yup.boolean().default(false),
    date: Yup.date().when(["activeStep", "active"], {
      is: (activeStep: number, active: boolean) => activeStep === STEP_ENUM.FACTORY && active,
      then: (schema) =>
        schema
          .required(YUP_ERRORS.REQUIRED)
          .typeError("")
          .test(
            "max-number-blocks-for-user-limit",
            "staking:error:max-number-blocks-for-user-limit",
            function (BlocksForUserDate: Date) {
              const { startBlockDate, bonusEndBlockDate } = this.parent;
              return BlocksForUserDate >= startBlockDate && BlocksForUserDate < bonusEndBlockDate;
            }
          ),
    }),
  }),

  poolLimitPerUser: Yup.number().when("activeStep", {
    is: STEP_ENUM.FACTORY,
    then: (schema) =>
      schema
        .integer(YUP_ERRORS.ERROR_IS_INTEGER)
        .required(YUP_ERRORS.REQUIRED)
        .default(0)
        .min(0, YUP_ERRORS.MIN_0)
        .typeError(""),
  })

});
