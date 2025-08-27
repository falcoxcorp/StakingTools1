import { styled, Avatar, Stack } from '@mui/material'

export const Image = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  [theme.breakpoints.down('sm')]: {
    width: 80,
    height: 80,
  }
}))
Image.defaultProps = {
  variant: 'square'
}

export const NoResult = styled(Stack)(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  padding: 20,
  flexDirection: 'row',
  gap: 24,
  alignItems: 'center',
  marginBottom: 20,
  textAlign:'left',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent:'center',
    textAlign:'center'
  }
}))
