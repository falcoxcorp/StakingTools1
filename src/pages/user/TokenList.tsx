import { memo } from 'react'
import PageCenterLayout from '../../layouts/pages/PageCenterLayout';
import TokenListContainer from '../../modules/UserModule/containers/TokenListContainer';


const CreateToken = () => {

  return (
    <PageCenterLayout>
      <TokenListContainer />
    </PageCenterLayout>
  );

}

export default memo(CreateToken);