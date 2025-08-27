import { styled, Stack } from '@mui/material'

export const Section = styled(Stack)(({ theme }) => ({
  padding: '16px 24px',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 4,
  [theme.breakpoints.down('sm')]: {
    padding: 8
  }
}))

export const Content = styled(Stack)(({ theme }) => ({
  padding: '8px 16px',
  backgroundColor: theme.palette.divider,
  borderRadius: 8,
  color: theme.palette.primary.main
})) 