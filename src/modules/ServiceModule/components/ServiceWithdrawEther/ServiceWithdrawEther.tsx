import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { Skeleton, Stack } from '@mui/material';
import { useServiceContext } from '../../contexts/ServiceContext';
import { CardSection } from '../../../AdministrationModule/components/CardSection';
import ServiceWithdrawEtherForm from './ServiceWithdrawEtherForm';

const ServiceWithdrawEther = () => {
  const { t } = useTranslation('service')
  const { serviceAddress } = useServiceContext()

  return (
    <CardSection title={t('withdrawByEther.title')} subtitle={t('withdrawByEther.subtitle')}>
      {
        serviceAddress === undefined ? <Stack> <Skeleton variant='rectangular'/></Stack> :
          <ServiceWithdrawEtherForm serviceAddress={serviceAddress as string}/>
      }
    </CardSection>
  );

}

export default memo(ServiceWithdrawEther);