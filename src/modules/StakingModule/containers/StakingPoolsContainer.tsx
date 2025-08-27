import { memo } from 'react'
import { StakingPoolContent } from '../components/StakingPools';
import ParticleBackground from '../../Common/components/ParticleBackground';
import { Stack } from '@mui/material';

const StakingPoolsContainer = () => {

  return (
    <Stack  >
      <ParticleBackground />
      <StakingPoolContent />
    </Stack>
  );

}

export default memo(StakingPoolsContainer);