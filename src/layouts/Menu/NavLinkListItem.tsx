import { FC, memo } from 'react'
import { NavLink as RouteNavLink, NavLinkProps as RouteNavLinkProps } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material'
import { THEMES } from '../../common';

export const CustomNavLink = styled(RouteNavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&.active': {
    '& .MuiListItemButton-root': {
      backgroundColor: theme.palette.primary.main,
    },
    "& .MuiListItemIcon-root, .MuiListItemText-root": {
      color: theme.palette.mode === THEMES.DARK ? theme.palette.primary.contrastText : theme.palette.primary.contrastText
    },
  },
}));

type NavLinkProps = RouteNavLinkProps & {
  icon: any,
  title: string
  disabled?: boolean
}

const NavLink: FC<NavLinkProps> = ({ icon, title, disabled = false, to, ...props }: NavLinkProps) => {

  const component = (
    <ListItemButton sx={{
      pl: 4, '& .MuiListItemIcon-root': {
        minWidth: 35
      },
    }} disabled={disabled} >
      <ListItemIcon>
        {
          icon
        }
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  )

  if (disabled) return (<>{component}</>)

  return (
    <CustomNavLink to={to} {...props}>
      {
        component
      }
    </CustomNavLink>
  );

}

export default memo(NavLink);