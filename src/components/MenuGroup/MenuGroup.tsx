import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState, memo } from 'react'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SwitchNetwork } from '../SwitchNetwork';
import { SwitchToken } from '../SwitchToken';
import MetamaskButton from '../MetamaskButton/MetamaskButton';

const options = [
  {
    value: 'metamask',
    Component: <MetamaskButton variant='outlined' />
  }, 
  {
    value: 'networks',
    Component: <SwitchNetwork />
  }, 
  {
    value: 'tokens',
    Component: <SwitchToken />
  },
]

const ITEM_HEIGHT = 48;

const MenuGroup = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size='small'
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value}>
            {option.Component}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default memo(MenuGroup)