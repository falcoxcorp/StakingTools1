import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo } from 'react'


const BaseETHIcon = (props: SvgIconProps) => {

  return (
    <SvgIcon {...props}>
      <svg
        data-name="base-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32.01 32"
      >
        <path
          d="M32.01 16c0 8.84-7.18 16-16.03 16S.68 25.55 0 17.34h21.19v-2.69H0C.68 6.45 7.58 0 15.98 0c8.85 0 16.03 7.16 16.03 16z"
          fill="#fff"
          fillRule="evenodd"
          data-name="base-1"
        />
      </svg>
    </SvgIcon>
  );

}

export default memo(BaseETHIcon);