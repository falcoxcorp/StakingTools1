import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react'

const SoneiumIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={12} fill="#6366f1" />
        <path
          d="M8 10h8v4H8z"
          fill="#fff"
        />
      </svg>
    </SvgIcon>
  );
}

export default memo(SoneiumIcon);