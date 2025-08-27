import { memo } from 'react'
import { CardSection } from '../CardSection';
import { FormTokenConfig } from './FormTokenConfig';
import { useTranslation } from 'react-i18next';

const TokenSection = () => {
  const { t } = useTranslation('admin')
  return (
    <CardSection title={t('token.title')} subtitle={t('token.subtitle')}>
      <FormTokenConfig />
    </CardSection>
  )

}

export default memo(TokenSection);