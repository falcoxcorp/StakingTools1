import { memo } from 'react'
import PageCenterLayout from '../../layouts/pages/PageCenterLayout';
import StakingCreateContainer from '../../modules/StakingModule/containers/StakingCreateContainer';


const CreateStaking = () => {
  return (
    <PageCenterLayout>
      <StakingCreateContainer />
    </PageCenterLayout>
  );

}

export default memo(CreateStaking);