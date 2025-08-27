import { memo, useMemo } from 'react'
import { FormSelectField } from '../../../../components/FormFields'
import { MenuItem } from '@mui/material'
import { PAID_TOKENS } from '../../../../settings/paid_tokens'
import { useNetworkUtils } from '../../../../hooks/useNetworkUtils'
type FromSelectTokenAddressPaidProps = {
  name: string,
  label: string
  required?: boolean
  chainId: number
}

const FromSelectTokenAddressPaid = ({ label, name, required, chainId }: FromSelectTokenAddressPaidProps) => {
  const { getNetworkListToken } = useNetworkUtils()
  const options = useMemo(() => getNetworkListToken(chainId), [PAID_TOKENS])
  return (
    <FormSelectField
      label={label}
      id={`select-${name}`}
      name={name}
      required={required}
    >
      {
        options?.map((op: any) => (
          <MenuItem key={op?.address} value={op?.address}>{op?.name}</MenuItem>

        ))
      }
    </FormSelectField>
  );

}

export default memo(FromSelectTokenAddressPaid);