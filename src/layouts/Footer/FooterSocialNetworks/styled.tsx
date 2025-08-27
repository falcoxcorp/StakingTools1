import { styled, Stack } from '@mui/material'

export const Content = styled(Stack)(({ theme }) => ({
  gap: 24,
  [theme.breakpoints.down('sm')]: {
    gap: 12
  }
})) 