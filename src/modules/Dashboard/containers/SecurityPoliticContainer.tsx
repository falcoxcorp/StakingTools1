import { memo } from 'react'
import PageCenterLayout from '../../../layouts/pages/PageCenterLayout';
import { SecurityPoliticContent } from '../components/SecurityPoliticContent';

const SecurityPoliticContainer = () => {

  return (
    <PageCenterLayout>
      <SecurityPoliticContent/>
    </PageCenterLayout>
  );

}

export default memo(SecurityPoliticContainer);