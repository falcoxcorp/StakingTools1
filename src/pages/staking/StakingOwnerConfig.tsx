import { memo } from 'react'
import PageCenterLayout from '../../layouts/pages/PageCenterLayout';
import StakingConfigContainer from '../../modules/StakingModule/containers/StakingConfigContainer';
import { useParams } from 'react-router-dom';
import { StakingConfigProvider } from '../../modules/StakingModule/context/StakingConfigContext';

const StakingOwnerConfig = () => {
  const { address } = useParams()
  return (
    <PageCenterLayout>
      <StakingConfigProvider stakingAddressId={address as string}>
        <StakingConfigContainer />
      </StakingConfigProvider>
    </PageCenterLayout>
  );

}

export default memo(StakingOwnerConfig);