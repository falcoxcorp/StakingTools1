import { memo } from 'react'
import PageCenterLayout from '../../layouts/pages/PageCenterLayout';
import StakingPoolsContainer from '../../modules/StakingModule/containers/StakingPoolsContainer';


const StakingPool = () => {

  return (
    <PageCenterLayout>
      <StakingPoolsContainer />
    </PageCenterLayout>
  );

}

export default memo(StakingPool);