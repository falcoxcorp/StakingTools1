import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { FormEtherConfig } from './FormEtherConfig';
import { CardSection } from '../CardSection';

const EtherConfigSection = () => {
  const { t } = useTranslation('admin')

  return (
    <CardSection title={t('ether.etherConfig.title')} subtitle={t('ether.etherConfig.subtitle')}>
      <FormEtherConfig />
    </CardSection>
  )

}

export default memo(EtherConfigSection);