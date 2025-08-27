import { styled, Box } from '@mui/material'

export const Content = styled(Box)(({ theme }) => ({ 
  padding: 32,
  overflowY: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: 8
  },
  '.MuiListItemIcon-root': {
    minWidth: 40
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main
  },
  "& .MuiListItemButton-root": {
    margin: '0 4px',
    borderRadius: 12
  }
}))

