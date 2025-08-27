import { memo } from 'react'
import { CardSection } from '../../../../AdministrationModule/components/CardSection';
import { useTranslation } from 'react-i18next';
import StakingUpdateStartAndEndBlocksForm from './StakingUpdateStartAndEndBlocksForm';

const StakingUpdateStartAndEndBlocks = () => {
  const { t } = useTranslation('staking')
  return (
    <CardSection title={t('admin.updateStartAndEndBlocks.title')} subtitle={t('admin.updateStartAndEndBlocks.subtitle')}>
      <StakingUpdateStartAndEndBlocksForm />
    </CardSection>
  );

}

export default memo(StakingUpdateStartAndEndBlocks);