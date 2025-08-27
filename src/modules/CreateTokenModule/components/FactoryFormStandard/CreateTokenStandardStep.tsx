import { memo } from 'react'
import { NetworkForm } from '../CreateTokenStepper/Steps'
import { FactoryFormStandard } from '.'
import { LIST_NETWORKS_ERC20 } from '../../../../contracts/instances/ERC20/network-token-erc20'
import { TOKEN_TYPE_ENUM } from '../../../../contracts/instances/interfaces'
import ConfirmContainer from '../CreateTokenStepper/Steps/Confirm/ConfirmContainer'
import { IRouterAddress } from '../../../../settings/router_address'

type CreateTokenStandardStepProps = {
  activeStep: number,
  _supply: number
  paidByToken: boolean
  chainId: number
  getValues: any,
  isLoading: boolean
  isCustomRouter: boolean
  status: "loading" | "error" | "idle" | "success"
  nameToken: string
  reset: () => void
  paymentAmount: number
  router: IRouterAddress
}

const CreateTokenStandardStep = ({ activeStep, _supply, paidByToken, chainId, getValues, isLoading, status, nameToken, reset, paymentAmount, router,isCustomRouter }: CreateTokenStandardStepProps) => {

  switch (activeStep) {
    case 0:
      return <NetworkForm chainId={chainId} networks={LIST_NETWORKS_ERC20[TOKEN_TYPE_ENUM.STANDARD]} />
    case 1:
      return <FactoryFormStandard {...{ activeStep, chainId, _supply, paidByToken, router, isCustomRouter }} />
    case 2:
      return <ConfirmContainer token={TOKEN_TYPE_ENUM.STANDARD} {...{ chainId, getValues, activeStep, isLoading, status, nameToken, reset, paymentAmount }} />

    default:
      break;
  }

}

export default memo(CreateTokenStandardStep);