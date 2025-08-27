import { memo } from 'react'
import OwnerAdminLayout from '../../../../layouts/OwnerAdminLayout';
import { WithdrawTokenForm } from '../WithdrawTokenForm';

const WithdrawTokenSection = () => {

  return (
    <OwnerAdminLayout>
      <WithdrawTokenForm />
    </OwnerAdminLayout>
  )

}

export default memo(WithdrawTokenSection);