import { memo } from 'react'
import { PageLayout } from '../layouts/pages';
import DashboardContainer from '../modules/Dashboard/containers/DashboardContainer';

const HomePage = () => {

  return (
    <PageLayout>
      <DashboardContainer/>
    </PageLayout>
  );

}

export default memo(HomePage);