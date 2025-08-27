import { INavLink } from '.';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';

export const ADMIN_LINKS: INavLink[] = [   
  {
    to: '/admin/token_manager',
    title: 'menu:admin:token_manager',
    icon: <TokenOutlinedIcon/>
  },  
  {
    to: '/admin/settings',
    title: 'menu:admin:settings',
    icon: <SettingsOutlinedIcon/>
  },  
]
