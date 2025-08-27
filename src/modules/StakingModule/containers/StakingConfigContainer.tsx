import { memo } from 'react'
import { useCallOwner } from '../hooks/contract/useStakingCalls';
import { useEthers } from '@usedapp/core';
import { RedirectHome } from '../../../components/RedirectHome';
import { Stack } from '@mui/material';
import { StakingEmergencyRewardWithdraw } from '../components/AdminSection/StakingEmergencyRewardWithdraw';
import { StakingRecoverToken } from '../components/AdminSection/StakingRecoverToken';
import { StakingStopReward } from '../components/AdminSection/StakingStopReward';
import { StakingUpdateRewardPerBlock } from '../components/AdminSection/StakingUpdateRewardPerBlock';
import { StakingUpdatePoolLimitPerUser } from '../components/AdminSection/StakingUpdatePoolLimitPerUser';
import { useStakingConfigContext } from '../context/StakingConfigContext';

const StakingConfigContainer = () => {
  const { account } = useEthers()
  const { stakingAddressId } = useStakingConfigContext()
  const { data, isLoading } = useCallOwner(stakingAddressId as string)

  if (isLoading) return <>Loading</>
  if (account === data) {
    return (
      <Stack gap={{ xs: 1, md: 2 }}>
        <StakingEmergencyRewardWithdraw />
        <StakingRecoverToken />
        <StakingStopReward />
        {/* <StakingUpdateStartAndEndBlocks /> */}
        <StakingUpdateRewardPerBlock />
        <StakingUpdatePoolLimitPerUser />
      </Stack>
    )
  }
  return (
    <RedirectHome />
  );

}

export default memo(StakingConfigContainer);