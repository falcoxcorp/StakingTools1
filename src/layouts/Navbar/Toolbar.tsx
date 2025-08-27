import { memo } from 'react'
import { Box, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MuiToolbar } from './styled';
import MetamaskButton from '../../components/MetamaskButton/MetamaskButton';
import { SwitchNetwork } from '../../components/SwitchNetwork';
import LanguageButton from '../../components/LanguageSelector/LanguageButton';
import { ProfileMenu } from '../../components/ProfileMenu'; 
import { CustomNavLink } from '../Menu/NavLinkListItem';
import { SwitchToken } from '../../components/SwitchToken';
import { MenuGroup } from '../../components/MenuGroup';
import { NavbarLogo } from '../../components/NavbarLogo';

type ToolbarProps = {
  open: boolean
  onOpen: () => void
}

const Toolbar = ({ onOpen, open }: ToolbarProps) => {

  return (
    <MuiToolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onOpen}
        edge="start"
        size='small'
        sx={{
          marginRight: 1.5,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box display={open ? 'none' : 'block'}>
        <CustomNavLink to='/'>
          <NavbarLogo />
        </CustomNavLink>
      </Box>

      < Box sx={{ flexGrow: 1 }
      } />
      <Stack direction={'row'} gap={1} alignItems={'center'} >
        <Box display={{ xs: 'none', md: 'block' }}>
          <MetamaskButton variant='outlined' />
        </Box>
        <Box display={{ xs: 'none', md: 'block' }}>
          <SwitchNetwork />
        </Box>
        <Box display={{ xs: 'none', md: 'block' }}>
          <SwitchToken />
        </Box>
        <LanguageButton />
        <Box display={{ md: 'none' }}>
          <MenuGroup />
        </Box>
        <ProfileMenu />
      </Stack >

    </MuiToolbar >
  );

}

export default memo(Toolbar);