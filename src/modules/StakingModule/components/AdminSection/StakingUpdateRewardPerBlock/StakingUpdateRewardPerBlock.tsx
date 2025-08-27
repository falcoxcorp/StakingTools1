import { memo } from 'react'
import { CardSection } from '../../../../AdministrationModule/components/CardSection';
import { useTranslation } from 'react-i18next';
import StakingUpdateRewardPerBlockForm from './StakingUpdateRewardPerBlockForm';
import { Skeleton, Stack } from '@mui/material';
import { useStakingConfigContext } from '../../../context/StakingConfigContext';

const StakingUpdateRewardPerBlock = () => {
  const { t } = useTranslation('staking')
  const { rewardAddress, isRewardLoading } = useStakingConfigContext()
  return (
    <CardSection title={t('admin.updateRewardPerBlock.title')} subtitle={t('admin.updateRewardPerBlock.subtitle')}>
      {
        isRewardLoading ? <Stack> <Skeleton variant='rectangular' /></Stack> :
          <StakingUpdateRewardPerBlockForm rewardAddress={rewardAddress as string} />
      }
    </CardSection>
  );

}

export default memo(StakingUpdateRewardPerBlock);