import * as Yup from 'yup';
import { YUP_ERRORS } from '../../Common/constants/yup.errors';
import { WalletRegex } from '../../schemas';

export const standardAddressSchema = Yup.object().shape({
  address: Yup.string().required(YUP_ERRORS.REQUIRED).matches(WalletRegex, { message: YUP_ERRORS.VALID_WALLET })
});


