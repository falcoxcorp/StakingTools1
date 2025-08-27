import { memo } from 'react'
import { NetworkForm } from '../CreateTokenStepper/Steps'
import { FactoryFormAdvanced } from '.'
import { LIST_NETWORKS_ERC20 } from '../../../../contracts/instances/ERC20/network-token-erc20'
import { TOKEN_TYPE_ENUM } from '../../../../contracts/instances/interfaces'
import ConfirmContainer from '../CreateTokenStepper/Steps/Confirm/ConfirmContainer'

type CreateTokenAdvancedStepProps = {
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
  watch: any
  getTaxBuy: number[]
  getTaxSell: number[]
}

const CreateTokenAdvancedStep = ({ activeStep, _supply, paidByToken, chainId, getValues, isLoading, status, nameToken, reset, paymentAmount, watch, getTaxBuy, getTaxSell }: CreateTokenAdvancedStepProps) => {

  switch (activeStep) {
    case 0:
      return <NetworkForm chainId={chainId} networks={LIST_NETWORKS_ERC20[TOKEN_TYPE_ENUM.ADVANCED]} />
    case 1:
      return <FactoryFormAdvanced {...{ activeStep, chainId, _supply, paidByToken, watch, getTaxBuy, getTaxSell }} />
    case 2:
      return <ConfirmContainer token={TOKEN_TYPE_ENUM.ADVANCED} {...{ chainId, getValues, activeStep, isLoading, status, nameToken, reset, paymentAmount }} />

    default:
      break;
  }

}

export default memo(CreateTokenAdvancedStep);