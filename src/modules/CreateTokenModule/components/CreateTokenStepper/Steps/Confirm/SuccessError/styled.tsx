import { styled, Stack} from '@mui/material'

export const Section = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  gap: 8,
  alignItems:'center',
  padding: '20px 30px',
  borderRadius: 6
})) 