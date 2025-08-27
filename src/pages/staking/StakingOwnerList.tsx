import { memo } from 'react'
import PageCenterLayout from '../../layouts/pages/PageCenterLayout';
import StakingListContainer from '../../modules/StakingModule/containers/StakingListContainer';


const StakingOwnerList = () => {

  return (
    <PageCenterLayout>
      <StakingListContainer />
    </PageCenterLayout>
  );

}

export default memo(StakingOwnerList);