import { memo } from 'react'
import PageCenterLayout from '../../layouts/pages/PageCenterLayout';
import ServiceConfigContainer from '../../modules/ServiceModule/containers/ServiceConfigContainer';
import { ServiceProvider } from '../../modules/ServiceModule/contexts/ServiceContext';


const ServiceManager = () => {

  return (
    <PageCenterLayout>
      <ServiceProvider>
        <ServiceConfigContainer />
      </ServiceProvider>
    </PageCenterLayout>
  );

}

export default memo(ServiceManager);