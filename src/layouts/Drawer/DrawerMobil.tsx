import { memo } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Menu } from '../Menu';

type DrawerMobilProps = {
  open: boolean,
  onClose: () => void
  onOpen: () => void
}

const DrawerMobil = ({ open, onClose, onOpen }: DrawerMobilProps) => {
  return (
    <SwipeableDrawer
      anchor={'left'}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      sx={{ zIndex: 1300 }}
    >
      <Box
        sx={{ width: 250, position: 'relative' }}
        role="presentation"
        onKeyDown={onClose}
      >
        <Menu onClose={onClose} />

      </Box>
    </SwipeableDrawer>
  )

}

export default memo(DrawerMobil);