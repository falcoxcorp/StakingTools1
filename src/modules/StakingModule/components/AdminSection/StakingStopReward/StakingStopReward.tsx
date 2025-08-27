import { memo } from 'react'
import { CardSection } from '../../../../AdministrationModule/components/CardSection';
import { useTranslation } from 'react-i18next';
import StakingStopRewardForm from './StakingStopRewardForm';

const StakingStopReward = () => {
  const { t } = useTranslation('staking')
  return (
    <CardSection title={t('admin.stopReward.title')} subtitle={t('admin.stopReward.subtitle')}>
      <StakingStopRewardForm/>
    </CardSection>
  );

}

export default memo(StakingStopReward);