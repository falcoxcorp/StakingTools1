import { styled, Stack } from '@mui/material'

export const TaxCardContent = styled(Stack)(({ }) => ({
  borderRadius: 8,
  gap: 16
  // border: `1px solid ${theme.palette.divider}`
}))

export const Section = styled(Stack)(({ theme }) => ({
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`,
  height: '100%',
  flexDirection: 'row',
  gap: 16,
  alignItems: 'center',
  padding: 16,
  justifyContent: 'space-around',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: 8,
    padding: 8
  }
}))

export const Sell = styled(Stack)<{ c: string }>(({ theme, c }) => ({
  borderLeft: `4px solid ${c || theme.palette.primary.main}`,
  height: 50,
  flexDirection: 'row',
  alignItems: 'center',
  color: c || theme.palette.primary.main,
  fontWeight: 800,
  [theme.breakpoints.down('sm')]: {
    borderLeft: 0,
    borderBottom: `4px solid ${c || theme.palette.primary.main}`,
    justifyContent: 'center',
    width: '100%'
  }
}))

export const Item = styled(Stack)(({ theme }) => ({
  fontWeight: 800,
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'left',
    flexDirection: 'row',
    gap: 8
  }
}))