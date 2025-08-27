import * as Yup from "yup";
import { YUP_ERRORS } from "../../Common/constants/yup.errors";

export const selectNetworkSchema = Yup.object().shape({
  token: Yup.string().required(YUP_ERRORS.REQUIRED),
  network: Yup.object(),
});

export const selectTokenSchema = Yup.object().shape({
  token: Yup.string().required(YUP_ERRORS.REQUIRED),
});


export const networkSchema = Yup.object().shape({
  network: Yup.object(),
});