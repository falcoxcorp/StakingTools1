import { INavLink } from "."
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import { LiquidityIcon } from "../../components/IconSVG/LiquidityIcon";

export const LUCK_TOKENS_LINKS: INavLink[] = [
  {
    to: '/create_block_tokens',
    title: 'menu:lockTokens:createBlockTokens',
    icon: <AddOutlinedIcon />,
    disabled: true
  },
  {
    to: '/tokens',
    title: 'menu:lockTokens:tokens',
    icon: <TokenOutlinedIcon />,
    disabled: true
  },
  {
    to: '/liquidity',
    title: 'menu:lockTokens:liquidity',
    icon: <LiquidityIcon />,
    disabled: true
  },
]

