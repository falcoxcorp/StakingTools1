import { INavLink } from "."
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

export const LAUNCHPAD_LINKS: INavLink[] = [
  {
    to: '/create_launchpad',
    title: 'menu:launchpad:createLaunchpad',
    icon: <RocketLaunchOutlinedIcon />,
    disabled: true
  },
  {
    to: '/create_fair_launch',
    title: 'menu:launchpad:createFairLaunch',
    icon: <RocketLaunchOutlinedIcon />,
    disabled: true
  },  
  {
    to: '/launchpad_list',
    title: 'menu:launchpad:launchpadList',
    icon: <ListAltOutlinedIcon />,
    disabled: true
  }  
]

