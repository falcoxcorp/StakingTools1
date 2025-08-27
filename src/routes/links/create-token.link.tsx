import { INavLink } from "."
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import { TOKEN_TYPE_ENUM } from "../../contracts/instances/interfaces";

export const CREATE_TOKEN_LINKS: INavLink[] = [
  {
    to: `/create_token/${TOKEN_TYPE_ENUM.SIMPLE}`,
    title: 'menu:create_token:simple',
    icon: <TokenOutlinedIcon />,
    // disabled: true
  },
  {
    to: `/create_token/${TOKEN_TYPE_ENUM.BASIC}`,
    title: 'menu:create_token:basic',
    icon: <TokenOutlinedIcon />
  },
  {
    to: `/create_token/${TOKEN_TYPE_ENUM.STANDARD}`,
    title: 'menu:create_token:standard',
    icon: <TokenOutlinedIcon />
  },
  {
    to: `/create_token/${TOKEN_TYPE_ENUM.ADVANCED}`,
    title: 'menu:create_token:advanced',
    icon: <TokenOutlinedIcon />,
    disabled: true
  },
  
]

