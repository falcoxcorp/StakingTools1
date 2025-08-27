import * as Yup from "yup";
import { YUP_ERRORS } from "../../Common/constants/yup.errors";


export const setMinValueBNB = Yup.object().shape({
  _minValueBNB: Yup
    .number()
    .positive()
    .required(YUP_ERRORS.REQUIRED)
});

export const setServicePriceBNB = Yup.object().shape({
  _servicePriceBNB: Yup
    .number()
    .positive(YUP_ERRORS.NUMBER.POSITIVE)
    .required(YUP_ERRORS.REQUIRED)
});

export const withdrawEtherSchema = Yup.object().shape({
  withdraw: Yup
    .number()
    .positive()
    .required(YUP_ERRORS.REQUIRED)
});


