import { memo } from 'react'
import { NetworkForm } from '../../../CreateTokenModule/components/CreateTokenStepper/Steps'
import { NETWORKS_STAKING_FACTORY } from '../../../../contracts/staking/staking.intance'
import { StakingCreateForm } from '../StakingCreateForm'
import { StakingConfirm } from '../StakingConfirm'

type CreateStakingStepProps = {
  activeStep: number,
  paidByToken: boolean
  chainId: number
  getValues: any,
  isLoading: boolean
  status: "loading" | "error" | "idle" | "success"
  nameToken: string
  reset: () => void
  paymentAmount: number
  activeLimitUser: boolean
  startBlock: Date | undefined
  bonusEndBlock: Date | undefined
}

const CreateStakingStep = ({ activeStep, paidByToken, chainId, getValues, isLoading, status, nameToken, reset, paymentAmount, activeLimitUser, bonusEndBlock, startBlock }: CreateStakingStepProps) => {

  switch (activeStep) {
    case 0:
      return <NetworkForm chainId={chainId} networks={NETWORKS_STAKING_FACTORY} title='common:selectNetwork' />
    case 1:
      return <StakingCreateForm {...{ activeStep, chainId, paidByToken, activeLimitUser, startBlock, bonusEndBlock }} />
    case 2:
      return <StakingConfirm {...{ chainId, getValues, activeStep, isLoading, status, nameToken, reset, paymentAmount }} />

    default:
      break;
  }

}

export default memo(CreateStakingStep);