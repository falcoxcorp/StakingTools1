import { styled, Stack } from '@mui/material'

export const FooterContent = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
  border: `1px dashed ${theme.palette.divider}`,
  marginTop: 'auto',
  flexGrow: 1,
  padding: 40,
  [theme.breakpoints.down('sm')]: {
    padding: 20,
  }
})) 