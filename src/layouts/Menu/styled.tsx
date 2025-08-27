import { styled, List } from '@mui/material'

export const MenuList = styled(List)(() => ({
  '.MuiListItemIcon-root':{
    minWidth:65
  },
  "& .MuiListItemButton-root":{
    margin: '0 4px',
    borderRadius: 12
  },
  gap:0,
  display:'flex',
  flexDirection:'column'
})) 