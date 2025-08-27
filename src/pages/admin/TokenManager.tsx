import { memo } from 'react'
import PageCenterLayout from '../../layouts/pages/PageCenterLayout';
import TokenManagerContainer from '../../modules/AdministrationModule/containers/TokenManagerContainer';
import AdminLayoutApp from '../../routes/AdminLayoutApp';


const TokenManager = () => {

  return (
    <PageCenterLayout>
      <AdminLayoutApp>
        <TokenManagerContainer />
      </AdminLayoutApp>
    </PageCenterLayout>
  );

}

export default memo(TokenManager);