import { styled, Stack} from '@mui/material'

export const PaperSection = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: '8px 16px'
})) 