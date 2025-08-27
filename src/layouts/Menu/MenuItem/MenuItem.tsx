import { memo } from 'react'
import { Collapse, ListItemButton, ListItemText, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useToggle from '../../../common/hooks/useToggle';
import { MenuList } from '../styled';
import { ChildrenProps } from '../../../common/types';

type MenuItemProps = ChildrenProps & {
  title?: string
  isExpander?: boolean
  menuOpen?: boolean
  onClose: () => void
}

const MenuItem = ({ title, isExpander = false, children, onClose, menuOpen=false }: MenuItemProps) => {
  const { isOpen, onToggle } = useToggle(menuOpen)

  if (!isExpander) return (
    <MenuList onClick={onClose}>
      {children}
    </MenuList>
  )

  return (
    <>
      <ListItemButton onClick={onToggle}>
        <ListItemText primary={<Typography fontWeight={800} color={'primary.main'}>{title}</Typography>} />
        {isOpen ? <ExpandLess  color={'primary'} /> : <ExpandMore  color={'primary'} />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <MenuList onClick={onClose} >
          {children}
        </MenuList>
      </Collapse>
    </>
  );

}

export default memo(MenuItem);