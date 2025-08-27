import { styled, Stack } from '@mui/material'

export const Section = styled(Stack)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  width:'100%',
  justifyContent:'start',
  ".MuiChip-root":{
    borderRadius:0 ,
    marginRight: 'auto', 
    fontWeight: 600,
    textTransform: 'uppercase'
  },
})) 