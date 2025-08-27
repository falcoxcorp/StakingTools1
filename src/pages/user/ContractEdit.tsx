import { memo } from 'react'
import PageCenterLayout from '../../layouts/pages/PageCenterLayout';
import ContactEditTokenTypeContainer from '../../modules/UserModule/containers/ContactEditTokenTypeContainer';


const ContractEdit = () => {

  return (
    <PageCenterLayout>
      <ContactEditTokenTypeContainer />
    </PageCenterLayout>
  );

}

export default memo(ContractEdit);