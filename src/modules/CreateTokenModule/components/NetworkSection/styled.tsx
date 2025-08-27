import { styled, Stack } from '@mui/material'

export const CryptoCard = styled(Stack)<{ disabled: boolean }>(({ theme, disabled }) => ({

  justifyContent: 'center',
  "& .MuiListItemIcon-root": {
    minWidth: 40
  },
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 4,
  ...(
    disabled && {
      backgroundColor: theme.palette.grey[100]+20,
    }
  ),
  ...(
    !disabled && {
      ":hover": {
        backgroundColor: theme.palette.grey[600]
      }
    }
  ),
  position: 'relative'


})) 