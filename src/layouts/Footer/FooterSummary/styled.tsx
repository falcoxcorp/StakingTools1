import { styled, Stack, Avatar } from '@mui/material'

export const Content = styled(Stack)(({ }) => ({
  gap: 8,
  alignItems: 'start'
}))

export const Logo = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    width: 50,
    height: 50
  }
})) 