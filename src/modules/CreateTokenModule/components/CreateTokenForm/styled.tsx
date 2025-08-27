import { styled, Paper, Box } from '@mui/material'

export const FormPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 12,
  boxShadow: theme.shadows[1],
  overflow: 'hidden',


}))

export const BoxFormContent = styled(Box)(({ theme }) => ({
  padding: '20px 30px',
  maxHeight: '100%',
  // overflowY: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: 20
  }

})) 