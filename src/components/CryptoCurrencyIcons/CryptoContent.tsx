import { SvgIcon } from '@mui/material';
import {memo} from 'react'
import { ChildrenProps } from '../../common/types';

const CryptoContent = ({children}: ChildrenProps) => {
return (
<SvgIcon>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    strokeWidth={1}
    stroke="currentColor"
    width={32}
    height={32}
  >
    {children}
  </svg>
</SvgIcon>
);

}

export default memo(CryptoContent);