import { memo, useMemo } from 'react'
import { TOKEN_TYPE_ENUM } from '../../contracts/instances/interfaces'
import { FormSelectAutocompleteField } from '../FormFields'
import { useTranslation } from 'react-i18next'

type TokenTypeSelectProps = {
  name: string,
  label: string
  size?: 'small' | 'medium'
  required?: boolean
}

const TokenTypeSelect = ({ label, name, size = 'medium', required = false }: TokenTypeSelectProps) => {
  const { t } = useTranslation('menu')
  const options = useMemo(() => Object.keys(TOKEN_TYPE_ENUM)?.filter((token) => ![TOKEN_TYPE_ENUM.ADVANCED].includes(token as TOKEN_TYPE_ENUM)), [TOKEN_TYPE_ENUM])
  return (
    <FormSelectAutocompleteField
      size={size}
      name={name}
      options={options}
      label={label}
      getOptionLabel={(option) => t(`tokens.${option}`)}
      required={required}
    />
  );

}

export default memo(TokenTypeSelect);