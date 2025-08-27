import { memo } from 'react'
import { CardSection } from '../../../../AdministrationModule/components/CardSection';
import { useTranslation } from 'react-i18next';
import StakingEmergencyRewardWithdrawForm from './StakingEmergencyRewardWithdrawForm';
import { useStakingConfigContext } from '../../../context/StakingConfigContext';
import { Skeleton, Stack } from '@mui/material';

const StakingEmergencyWithdraw = () => {
  const { t } = useTranslation('staking')
  const { rewardAddress,stakedAddress, isRewardLoading } = useStakingConfigContext()

  return (
    <CardSection title={t('admin.emergencyRewardWithdraw.title')} subtitle={t('admin.emergencyRewardWithdraw.subtitle')}>
      {
        isRewardLoading ? <Stack> <Skeleton variant='rectangular'/></Stack> :
          <StakingEmergencyRewardWithdrawForm rewardAddress={rewardAddress as string} stakedAddress={stakedAddress as string}/>
      }
    </CardSection>
  );

}

export default memo(StakingEmergencyWithdraw);