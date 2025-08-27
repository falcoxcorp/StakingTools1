import { memo } from 'react';
import useToggle from '../common/hooks/useToggle';
import { ChildrenProps } from '../common/types';
import { Navbar } from './Navbar';
import { Box } from '@mui/material';
import Container from './pages/Container';
import DrawerMobil from './Drawer/DrawerMobil';

const MainLayout = ({ children }: ChildrenProps) => {
  const { isOpen, onOpen, onClose } = useToggle(false);
  
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar open={isOpen} onOpen={onOpen} />
      <DrawerMobil onClose={onClose} onOpen={onOpen} open={isOpen} />
      <Container>
        {children}
      </Container>
    </Box>
  );
};

export default memo(MainLayout);
