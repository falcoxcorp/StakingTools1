import * as Yup from 'yup';
import { YUP_ERRORS } from '../../Common/constants/yup.errors';

export const feeFalcoCoinSchema = Yup.object().shape({

  _TAX_FEE: Yup.number().integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).max(100, YUP_ERRORS.MAX_100).typeError('')
    .nullable()
  ,
  _BURN_FEE: Yup.number().integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).max(100, YUP_ERRORS.MAX_100).typeError('')
    .nullable()
  ,
  _CHARITY_FEE: Yup.number().integer(YUP_ERRORS.ERROR_IS_INTEGER).required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).max(100, YUP_ERRORS.MAX_100).typeError('')
    .nullable()
});


