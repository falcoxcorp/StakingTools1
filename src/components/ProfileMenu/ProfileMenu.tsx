import { IconButton, Menu, MenuItem } from '@mui/material';
import { useEthers } from '@usedapp/core';
import { memo, useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTranslation } from 'react-i18next';
import { CustomNavLink } from '../../layouts/Menu/NavLinkListItem';

const ProfileMenu = () => {
  const { t } = useTranslation('menu')
  const { account } = useEthers()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (account === undefined) return <></>

  return (
    <>
      <IconButton
        size="small"
        aria-label="account of current user"
        aria-controls="menu-tokens"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-tokens"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <CustomNavLink to='/tokens_list'  >
            {t('create_token.tokenList')}
          </CustomNavLink>
        </MenuItem>
        {/*    <NavLinkListItem to='/tokens_list' icon={<FormatListBulletedIcon />} title={t('tokenList')} /> */}
      </Menu>
    </>

  );

}

export default memo(ProfileMenu);