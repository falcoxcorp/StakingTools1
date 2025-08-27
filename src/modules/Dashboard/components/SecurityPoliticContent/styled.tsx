import { styled, Stack, Paper } from '@mui/material'

export const ContainerPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 12,
  boxShadow: theme.shadows[1],
  overflow: 'hidden',
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  [theme.breakpoints.down('sm')]: {
    padding: 16
  },
  "& .MuiTypography-h2": {
    color: theme.palette.primary.main
  }
}))

export const Section = styled(Stack)(({ }) => ({
  gap: 8
})) 