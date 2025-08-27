import { memo, useMemo } from 'react'
import { FormSelectAutocompleteField } from '../../../../components/FormFields'
import { ListItem, ListItemText } from '@mui/material'
import { PAID_TOKENS } from '../../../../settings/paid_tokens'
import { useNetworkUtils } from '../../../../hooks/useNetworkUtils'

type FromAutoSelectTokenAddressPaidProps = {
  name: string,
  label: string
  placeholder?: string
  required?: boolean
  chainId: number
  readOnly?: boolean
}


const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?.address || option;
  const valueId = value?.address || value;
  return optionId === valueId;
};


const FromAutoSelectTokenAddressPaid = ({ label, name, required, chainId, placeholder, readOnly = false }: FromAutoSelectTokenAddressPaidProps) => {
  const { getNetworkListToken } = useNetworkUtils()
  const options = useMemo(() => getNetworkListToken(chainId) || [], [PAID_TOKENS])

  return (
    <FormSelectAutocompleteField
      readOnly={readOnly}
      required={required}
      name={name}
      label={label}
      options={options}
      autoHighlight
      disableCloseOnSelect
      id={`multiple-${name}`}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <ListItem {...props} key={option.address}>
          <ListItemText primary={option.name} />
        </ListItem>
      )}
      placeholder={placeholder}
    />)
}

export default memo(FromAutoSelectTokenAddressPaid);