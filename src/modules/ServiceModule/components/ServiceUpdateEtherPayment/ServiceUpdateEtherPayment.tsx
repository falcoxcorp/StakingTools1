import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { Skeleton, Stack } from '@mui/material';
import { useServiceContext } from '../../contexts/ServiceContext';
import { CardSection } from '../../../AdministrationModule/components/CardSection';
import ServiceUpdateEtherPaymentForm from './ServiceUpdateEtherPaymentForm';

const ServiceUpdateEtherPayment = () => {
  const { t } = useTranslation('service')
  const { serviceAddress } = useServiceContext()

  return (
    <CardSection title={t('updateEtherPayment.title')} subtitle={t('updateEtherPayment.subtitle')}>
      {
        serviceAddress === undefined ? <Stack> <Skeleton variant='rectangular'/></Stack> :
          <ServiceUpdateEtherPaymentForm serviceAddress={serviceAddress as string}/>
      }
    </CardSection>
  );

}

export default memo(ServiceUpdateEtherPayment);