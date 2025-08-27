import { SvgIcon, SvgIconProps } from '@mui/material'

export const KycIcon = (props: SvgIconProps) => {

  return (
    <SvgIcon {...props}>
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <g data-name="kyc">
          <path d="M10.67 4.57a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H4.57v-1.1c0-.64 3.13-2.1 6.1-2.1m0-10.9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
          <path d="M19.33 2L19.33 7.25 21.33 7.25 21.33 0 14.09 0 14.09 2 19.33 2z" />
          <path d="M19.33 19.33L14.09 19.33 14.09 21.33 21.33 21.33 21.33 14.44 19.33 14.44 19.33 19.33z" />
          <path d="M2 19.33L2 14.44 0 14.44 0 21.33 6.9 21.33 6.9 19.33 2 19.33z" />
          <path d="M2 2L6.9 2 6.9 0 0 0 0 7.25 2 7.25 2 2z" />
        </g>
      </svg>
    </SvgIcon>
  )
}