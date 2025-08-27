import { memo } from 'react'
import { NetworkForm } from '../CreateTokenStepper/Steps'
import { FactoryFormBasic } from '.'
import { LIST_NETWORKS_ERC20 } from '../../../../contracts/instances/ERC20/network-token-erc20'
import { TOKEN_TYPE_ENUM } from '../../../../contracts/instances/interfaces'
import ConfirmContainer from '../CreateTokenStepper/Steps/Confirm/ConfirmContainer'

type CreateTokenBasicStepProps = {
  activeStep: number,
  _supply: number
  paidByToken: boolean
  chainId: number
  getValues: any,
  isLoading: boolean
  status: "loading" | "error" | "idle" | "success"
  nameToken: string
  reset: () => void
  paymentAmount: number
}

const CreateTokenBasicStep = ({ activeStep, _supply, paidByToken, chainId, getValues, isLoading, status, nameToken, reset, paymentAmount}: CreateTokenBasicStepProps) => {

  switch (activeStep) {
    case 0:
      return <NetworkForm chainId={chainId} networks={LIST_NETWORKS_ERC20[TOKEN_TYPE_ENUM.BASIC]} />
    case 1:
      return <FactoryFormBasic {...{ activeStep, chainId, _supply, paidByToken }} />
    case 2:
      return <ConfirmContainer token={TOKEN_TYPE_ENUM.BASIC} {...{ chainId, getValues, activeStep, isLoading, status, nameToken, reset, paymentAmount }} />

    default:
      break;
  }

}

export default memo(CreateTokenBasicStep);