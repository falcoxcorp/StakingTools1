import { SvgIcon } from '@mui/material'

export const ETHIcon = () => {

  return (
    <SvgIcon>
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth={1.5}
        // stroke="currentColor"
        className="h-6 w-6 .bscIcon"
      >
       
        <path
          d="M12 24C5.37 24 0 18.63 0 12S5.37 0 12 0s12 5.37 12 12-5.37 12-12 12zm6-11.84L12.37 3l-5.62 9.16 5.62 3.26 5.62-3.27zm0 1.05l-5.63 3.26-5.62-3.26 5.62 7.78L18 13.21z"
          // fill="#010101"
          fillRule="evenodd"
        />
        <path
          className="cls-2"
          d="M12.37 3v6.65l5.62 2.51L12.37 3zm0 13.48V21L18 13.22l-5.63 3.26z"
        />
        <path d="M12.37 15.43l5.62-3.26-5.62-2.51v5.78z" fill="rgba(1,1,1,.8)" />
        <path className="cls-2" d="M6.75 12.16l5.62 3.26V9.64l-5.62 2.51z" />

      </svg>
    </SvgIcon>
  )
}
