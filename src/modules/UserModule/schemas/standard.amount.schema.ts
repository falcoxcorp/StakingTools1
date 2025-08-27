import * as Yup from 'yup';
import { YUP_ERRORS } from '../../Common/constants/yup.errors';

export const standardAmountSchema = Yup.object().shape({
  amount: Yup.number().integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).typeError('')
});


