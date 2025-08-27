import { memo } from 'react'
import { Avatar, Stack } from '@mui/material';


type Props = {
  width?: number, height?: number
}

const NavbarLogo = ({ height, width }: Props) => {
  return (
    <Stack direction={'row'} alignItems={'center'} gap={1}>
      <Avatar variant='square' src='/navbar_logo.webp' sx={{ width: width ?? 90, height: height ?? 44 }} />
    </Stack>
  );

}

export default memo(NavbarLogo);