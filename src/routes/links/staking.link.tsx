import { INavLink } from "."
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

export const STAKING_LINKS: INavLink[] = [
  {
    to: '/staking/create',
    title: 'menu:staking:createStaking',
    icon: <StackedLineChartOutlinedIcon />,
    // disabled: true
  },
  {
    to: '/staking/owner/list',
    title: 'menu:staking:myStaking',
    icon: <StackedLineChartOutlinedIcon />,
    // disabled: true
  },
  {
    to: '/staking/pools',
    title: 'menu:staking:pools',
    icon: <ListAltOutlinedIcon />,
    // disabled: true
  },
]

