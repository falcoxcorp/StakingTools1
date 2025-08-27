import { styled, Avatar } from '@mui/material'

export const Image = styled(Avatar)(() => ({
  backgroundColor: 'transparent'
}))

Image.defaultProps = {
  variant: 'square',
  // children: <ImageAspectRatio/>
}