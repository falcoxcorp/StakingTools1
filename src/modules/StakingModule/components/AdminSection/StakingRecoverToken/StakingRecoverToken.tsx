import { memo } from 'react'
import { CardSection } from '../../../../AdministrationModule/components/CardSection';
import { useTranslation } from 'react-i18next';
import StakingRecoverTokenForm from './StakingRecoverTokenForm';

const StakingRecoverToken = () => {
  const { t } = useTranslation('staking')
  return (
    <CardSection title={t('admin.recoverToken.title')} subtitle={t('admin.recoverToken.subtitle')}>
      <StakingRecoverTokenForm/>
    </CardSection>
  );

}

export default memo(StakingRecoverToken);