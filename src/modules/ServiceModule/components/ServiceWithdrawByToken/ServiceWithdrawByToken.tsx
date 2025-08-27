import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { Skeleton, Stack } from '@mui/material';
import { useServiceContext } from '../../contexts/ServiceContext';
import { CardSection } from '../../../AdministrationModule/components/CardSection';
import ServiceWithdrawByTokenForm from './ServiceWithdrawByTokenForm';

const ServiceWithdrawByToken = () => {
  const { t } = useTranslation('service')
  const { serviceAddress } = useServiceContext()

  return (
    <CardSection title={t('withdrawByToken.title')} subtitle={t('withdrawByToken.subtitle')}>
      {
        serviceAddress === undefined ? <Stack> <Skeleton variant='rectangular'/></Stack> :
          <ServiceWithdrawByTokenForm serviceAddress={serviceAddress as string}/>
      }
    </CardSection>
  );

}

export default memo(ServiceWithdrawByToken);