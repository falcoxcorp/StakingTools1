import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { FormTokenConfig } from './FormTokenConfig';
import { CardSection } from '../CardSection';

const TokenConfigSection = () => {
  const { t } = useTranslation('admin')

  return (
    <CardSection title={t('config.tokenConfig.title')} subtitle={t('config.tokenConfig.subtitle')}>
      <FormTokenConfig />
    </CardSection>
  )

}

export default memo(TokenConfigSection);