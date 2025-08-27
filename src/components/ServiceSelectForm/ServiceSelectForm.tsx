import { memo, useMemo } from 'react'
import { FormSelectAutocompleteField } from '../FormFields';
import { SERVICE_ENUM } from '../../settings/service';
import { useTranslation } from 'react-i18next';

type ServiceSelectFormProps = {
  name: string
  label: string
  required?: boolean
}

const ServiceSelectForm = ({ name, label, required = false }: ServiceSelectFormProps) => {
  const { t } = useTranslation('service')
  const options = useMemo(() => Object.values(SERVICE_ENUM), [SERVICE_ENUM])

  return (
    <FormSelectAutocompleteField getOptionLabel={option => t(`service.${option}`)} name={name ?? 'service'} options={options} required={required} label={label} />
  );

}

export default memo(ServiceSelectForm);