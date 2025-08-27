import { Divider, IconButton } from '@mui/material';
import { memo } from 'react'
import { useSettings } from '../../contexts/SettingsProvider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Menu from '../Menu/Menu';
import { CustomDrawer, DrawerHeader } from './styled';
import Logo from '../../components/Logo/Logo';

type DrawerDesktopProps = {
  open: boolean
  onClose: () => void
}

const DrawerDesktop = ({ open, onClose }: DrawerDesktopProps) => {
  const { theme } = useSettings()

  return (
    <CustomDrawer variant="permanent" open={open} sx={{ display: { xs: 'none', md: 'block' } }}>
      <DrawerHeader>
        <Logo />
        <IconButton onClick={onClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Menu onClose={onClose} />
    </CustomDrawer>
  );

}

export default memo(DrawerDesktop);