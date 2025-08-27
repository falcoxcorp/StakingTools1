import { INavLink } from "."
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

export const PRIVATE_SALE_LINKS: INavLink[] = [
  {
    to: '/create_private_sale',
    title: 'menu:privateSale:createPrivateSale',
    icon: <AttachMoneyOutlinedIcon />,
    disabled: true
  },
  {
    to: '/private_sale_list',
    title: 'menu:privateSale:privateSaleList',
    icon: <ListAltOutlinedIcon />,
    disabled: true
  },
  
]

