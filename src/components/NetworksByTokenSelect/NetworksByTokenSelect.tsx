import { memo, useMemo } from 'react'
import { INetworks, TOKEN_TYPE_ENUM } from '../../contracts/instances/interfaces'
import { FormSelectAutocompleteField } from '../FormFields'
import { LIST_NETWORKS_ERC20 } from '../../contracts/instances/ERC20/network-token-erc20'
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';

type NetworksByTokenSelectProps = {
  name: string,
  label: string,
  token: TOKEN_TYPE_ENUM
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};

const NetworksByTokenSelect = ({ label, name, token }: NetworksByTokenSelectProps) => {
  const options = useMemo(() => LIST_NETWORKS_ERC20?.[token] || [], [LIST_NETWORKS_ERC20, token])
  return (
    <FormSelectAutocompleteField
      name={name}
      options={options}
      label={label}
      disableCloseOnSelect
      getOptionLabel={(option: INetworks) => option?.name || ''}
      renderOption={(props, option, { selected }) => (
        <ListItem {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          <ListItemIcon sx={{ alignItems: 'center', minWidth: 30 }}>
            {option?.icon || TokenOutlinedIcon}
          </ListItemIcon>
          <ListItemText primary={option.name} />
        </ListItem>
      )}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );

}

export default memo(NetworksByTokenSelect);