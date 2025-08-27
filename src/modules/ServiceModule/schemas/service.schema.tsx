import * as Yup from "yup";
import { YUP_ERRORS } from "../../Common/constants/yup.errors";

export const WalletRegex = /^(0x)?[0-9a-fA-F]{40}$/;

export const serviceFeeSchema = Yup.object().shape({
  fee: Yup.object().shape({
    developer: Yup.number().required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).typeError(""),
    marketing: Yup.number().required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).typeError(""),
    admin: Yup.number().required(YUP_ERRORS.REQUIRED).default(0).min(0, YUP_ERRORS.MIN_0).typeError("")
  })
});

export const serviceAdminWalletSchema = Yup.object().shape({
  wallet: Yup.object().shape({
    developer: Yup.string().required(YUP_ERRORS.REQUIRED).matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET }),
    marketing: Yup.string().required(YUP_ERRORS.REQUIRED).matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET }),
    admin: Yup.string().required(YUP_ERRORS.REQUIRED).matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET })
  })
});

export const stakingFactoryUpdateServiceAddressSchema = Yup.object().shape({
  _newServiceAddress: Yup.string().required(YUP_ERRORS.REQUIRED).matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET }),
});


export const serviceUpdateEtherPaymentSchema = Yup.object().shape({
  payment: Yup.number().positive(YUP_ERRORS.NUMBER.POSITIVE).required(YUP_ERRORS.REQUIRED),
  active: Yup.boolean().default(false).required(YUP_ERRORS.REQUIRED),
  service: Yup.string().required(YUP_ERRORS.REQUIRED)
});

export const serviceUpdateTokenPaymentSchema = Yup.object().shape({
  payment: Yup.number().positive(YUP_ERRORS.NUMBER.POSITIVE).required(YUP_ERRORS.REQUIRED),
  active: Yup.boolean().default(false).required(YUP_ERRORS.REQUIRED),
  service: Yup.string().required(YUP_ERRORS.REQUIRED),
  tokenAddress: Yup.object().shape({
    address: Yup.string(),
    name: Yup.string().nullable()
  }).nullable().required(YUP_ERRORS.REQUIRED)
});

export const serviceWithdrawByTokenSchema = Yup.object().shape({
  amount: Yup.number().positive(YUP_ERRORS.NUMBER.POSITIVE).required(YUP_ERRORS.REQUIRED),
  // service: Yup.string().required(YUP_ERRORS.REQUIRED),
  tokenAddress: Yup.object().shape({
    address: Yup.string(),
    name: Yup.string().nullable()
  }).nullable().required(YUP_ERRORS.REQUIRED)
});

export const serviceWithdrawEtherSchema = Yup.object().shape({
  amount: Yup.number().positive(YUP_ERRORS.NUMBER.POSITIVE).required(YUP_ERRORS.REQUIRED)
});