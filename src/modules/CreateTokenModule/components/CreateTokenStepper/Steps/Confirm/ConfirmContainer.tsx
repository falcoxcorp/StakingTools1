import { memo } from 'react'
import { TOKEN_TYPE_ENUM } from '../../../../../../contracts/instances/interfaces';
import ConfirmSimple from './ConfirmSimple';
import ConfirmBasic from './ConfirmBasic';
import ConfirmStandard from './ConfirmStandard';
import { RedirectHome } from '../../../../../../components/RedirectHome';

export type ConfirmProps = {
  chainId: number
  getValues: any,
  activeStep: number
  isLoading: boolean
  status: "loading" | "error" | "idle" | "success"
  nameToken: string
  reset: () => void
  paymentAmount: number
}

type ConfirmContainerProps = ConfirmProps & {
  token: TOKEN_TYPE_ENUM
}

const ConfirmContainer = ({ token, ...props }: ConfirmContainerProps) => {

  switch (token) {
    case TOKEN_TYPE_ENUM.SIMPLE:
      return <ConfirmSimple {...props} />
    case TOKEN_TYPE_ENUM.BASIC:
      return <ConfirmBasic {...props} />
    case TOKEN_TYPE_ENUM.STANDARD:
    case TOKEN_TYPE_ENUM.ADVANCED:
      return <ConfirmStandard {...props} />
    default:
      return <RedirectHome />
  }

}

export default memo(ConfirmContainer);