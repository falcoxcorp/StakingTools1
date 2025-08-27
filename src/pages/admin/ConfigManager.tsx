import { memo } from 'react'
import PageCenterLayout from '../../layouts/pages/PageCenterLayout';
import AdminLayoutApp from '../../routes/AdminLayoutApp';
import ConfigManagerContainer from '../../modules/AdministrationModule/containers/ConfigManagerContainer';


const ConfigManager = () => {

  return (
    <PageCenterLayout>
      <AdminLayoutApp>
        <ConfigManagerContainer />
      </AdminLayoutApp>
    </PageCenterLayout>
  );

}

export default memo(ConfigManager);