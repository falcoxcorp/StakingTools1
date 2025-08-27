import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { Skeleton, Stack } from '@mui/material';
import { useServiceContext } from '../../contexts/ServiceContext';
import ServiceUpdateFeeForm from './ServiceUpdateFeeForm';
import { CardSection } from '../../../AdministrationModule/components/CardSection';

const ServiceUpdateFee = () => {
  const { t } = useTranslation('service')
  const { serviceAddress } = useServiceContext()

  return (
    <CardSection title={t('fee.title')} subtitle={t('fee.subtitle')}>
      {
        serviceAddress === undefined ? <Stack> <Skeleton variant='rectangular'/></Stack> :
          <ServiceUpdateFeeForm serviceAddress={serviceAddress as string}/>
      }
    </CardSection>
  );

}

export default memo(ServiceUpdateFee);