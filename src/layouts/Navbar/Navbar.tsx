import { memo } from 'react';
import { AppBar } from './styled';
import ToolBar from './Toolbar';

type NavbarProps = {
  open: boolean
  onOpen: () => void
}

const Navbar = ({ ...props }: NavbarProps) => {
  return (
    <AppBar position="fixed" open={props?.open}>
      <ToolBar {...props} />    
    </AppBar>
  );
}


export default memo(Navbar)