import { memo } from 'react'
import { CardSection } from '../../../../AdministrationModule/components/CardSection';
import { useTranslation } from 'react-i18next';
import StakingUpdatePoolLimitPerUserForm from './StakingUpdatePoolLimitPerUserForm';
import { useStakingConfigContext } from '../../../context/StakingConfigContext';
import { Skeleton, Stack } from '@mui/material';

const StakingUpdatePoolLimitPerUser = () => {
  const { t } = useTranslation('staking')
  const { stakedAddress, isStakedLoading } = useStakingConfigContext()
  return (
    <CardSection title={t('admin.updatePoolLimitPerUser.title')} subtitle={t('admin.updatePoolLimitPerUser.subtitle')}>
      {
        isStakedLoading ? <Stack> <Skeleton variant='rectangular' width={'100%'} /></Stack> :
          <StakingUpdatePoolLimitPerUserForm stakedAddress={stakedAddress as string} />
      }
    </CardSection>
  );

}

export default memo(StakingUpdatePoolLimitPerUser);