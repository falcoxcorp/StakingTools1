import { memo, useMemo } from 'react'
import { INetworks } from '../../contracts/instances/interfaces'
import { FormSelectAutocompleteField } from '../FormFields'
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';

type NetworksSelectProps = {
  name: string,
  label: string,
  networks: INetworks[]
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};

const NetworksSelect = ({ label, name, networks }: NetworksSelectProps) => {
  const options = useMemo(() => networks || [], [networks])
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

export default memo(NetworksSelect);