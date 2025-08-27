import { TransactionStatus } from "@usedapp/core";
import { t } from "i18next";
import toast from "react-hot-toast";

export const HandleStateError = (state: TransactionStatus) => {

  if (state.errorMessage) {
    return toast.error(state.errorMessage)
  }

}

export const HandleThrowError = (error: ERRORS | 'error') => {

  if (ERRORS.METAMASK_TX_SIGNATURE === error) {
    throw new Error(t(CONTRACT_ERRORS[ERRORS.METAMASK_TX_SIGNATURE].message));
  }

  throw new Error('error');


}


export enum ERRORS {
  METAMASK_TX_SIGNATURE = 'M4001'
}

export const CONTRACT_ERRORS = {
  [ERRORS.METAMASK_TX_SIGNATURE]: {
    title: 'common:errors:ERROR',
    message: 'common:errors:METAMASK_TX_SIGNATURE',
  },
};