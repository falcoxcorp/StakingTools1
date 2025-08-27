import { memo } from 'react'
import PageCenterLayout from '../../layouts/pages/PageCenterLayout';
import CreateTokenForm from '../../modules/CreateTokenModule/components/CreateTokenForm/CreateTokenForm';


const CreateToken = () => {
  return (
    <PageCenterLayout>
      <CreateTokenForm />
    </PageCenterLayout>
  );

}

export default memo(CreateToken);