import { Divider, IconButton, Stack } from '@mui/material';
import { memo } from 'react'
import { useSettings } from '../../contexts/SettingsProvider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CustomDrawer, DrawerHeader } from './styled';
import { NavLink } from 'react-router-dom';

type DrawerProps = {
  open: boolean
  onClose: () => void
}

const Drawer = ({ open, onClose }: DrawerProps) => {
  const { theme } = useSettings()

  return (
    <CustomDrawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={onClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Stack sx={{
        padding: 1,
      }}>
        <Stack justifyContent={'center'} alignItems={'center'} width={'100%'} mt={1}>
          <NavLink to='/'>
           Aqui va el logo
          </NavLink>
        </Stack>
      </Stack>
    </CustomDrawer>
  );

}

export default memo(Drawer);