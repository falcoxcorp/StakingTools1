import { Box, Stack, styled } from '@mui/material'

export const Section = styled(Stack)(({ theme }) => ({
  padding: '40px 0',
  [theme.breakpoints.down('sm')]: {
    padding: '16px 0',
  }
}))

export const BoxBorder = styled(Box)(({ theme }) => ({
  borderBottom: `8px solid ${theme.palette.primary.main}`,

}))

