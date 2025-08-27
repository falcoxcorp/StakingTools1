import { styled, Stack } from '@mui/material'

export const Content = styled(Stack)(({ theme }) => ({
  padding: 20,
  border: `1px solid ${theme.palette.divider}`,
  justifyContent: 'space-between',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  alignItems: 'center'
}))

export const Balance = styled(Stack)(({ theme }) => ({
  padding: '8px 16px',
  border: `1px solid ${theme.palette.divider}`,
  justifyContent: 'row'

})) 