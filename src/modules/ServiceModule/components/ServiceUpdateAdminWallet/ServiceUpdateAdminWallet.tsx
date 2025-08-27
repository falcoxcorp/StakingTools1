import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { Skeleton, Stack } from '@mui/material';
import { useServiceContext } from '../../contexts/ServiceContext';
import { CardSection } from '../../../AdministrationModule/components/CardSection';
import ServiceUpdateAdminWalletForm from './ServiceUpdateAdminWalletForm';

const ServiceUpdateAdminWallet = () => {
  const { t } = useTranslation('service')
  const { serviceAddress } = useServiceContext()

  return (
    <CardSection title={t('adminWallet.title')} subtitle={t('adminWallet.subtitle')}>
      {
        serviceAddress === undefined ? <Stack> <Skeleton variant='rectangular'/></Stack> :
          <ServiceUpdateAdminWalletForm serviceAddress={serviceAddress as string}/>
      }
    </CardSection>
  );

}

export default memo(ServiceUpdateAdminWallet);