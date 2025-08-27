import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { Skeleton, Stack } from '@mui/material';
import { useServiceContext } from '../../contexts/ServiceContext';
import { CardSection } from '../../../AdministrationModule/components/CardSection';
import StakingFactoryUpdateServiceAddressForm from './StakingFactoryUpdateServiceAddressForm';

const StakingFactoryUpdateServiceAddress = () => {
  const { t } = useTranslation('service')
  const { stakingFactoryAddress } = useServiceContext()

  return (
    <CardSection title={t('newServiceAddress.title')} subtitle={t('newServiceAddress.subtitle')}>
      {
        stakingFactoryAddress === undefined ? <Stack> <Skeleton variant='rectangular'/></Stack> :
          <StakingFactoryUpdateServiceAddressForm stakingFactoryAddress={stakingFactoryAddress as string}/>
      }
    </CardSection>
  );

}

export default memo(StakingFactoryUpdateServiceAddress);