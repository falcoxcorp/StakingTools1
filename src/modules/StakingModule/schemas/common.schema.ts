import * as Yup from 'yup';
import { STEP_ENUM } from '../../Common/constants/step';
import { YUP_ERRORS } from '../../Common/constants/yup.errors';

export const commonFormSchema = {
  activeStep: Yup.number().default(0),
  chainId: Yup.number(),
  paidByToken: Yup.boolean().default(false),
  isVerify: Yup.boolean().default(false),
  paymentAmount: Yup.number(),
  tokenAddress: Yup.object().shape({
    address: Yup.string(),
    name: Yup.string()
  }).nullable().when(['activeStep', 'paidByToken'], {
    is: (activeStep: number, paidByToken: boolean) => {
      if (activeStep === STEP_ENUM.FACTORY)
        return paidByToken
      return false
    },
    then: (schema) => schema.required(YUP_ERRORS.REQUIRED)
  })//.transform((token: any) => token?.address || token)
}


