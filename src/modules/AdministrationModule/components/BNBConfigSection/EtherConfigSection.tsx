import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { CardSection } from '../CardSection';

const EtherConfigSection = () => {
  const { t } = useTranslation('admin')

  return (
    <CardSection title={t('token_config.get.title')} subtitle={t('token_config.get.subtitle')}>
      
    </CardSection>
  )

}

export default memo(EtherConfigSection);