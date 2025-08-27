import { styled, Card, CardContent, Avatar } from '@mui/material'


export const PriceCard = styled(Card)<{ network?: string }>(({ network, theme }) => ({
  position: 'relative',
  ...(network ? {
    ":before": {
      content: `"${network}"`,
      position: 'absolute',
      top: 0, left: 10,
      height: 'auto',
      width: 'auto',
      backgroundColor: theme.palette.primary.main,
      padding: '3px 12px',
      borderRadius: '0 0 8px 8px',
      fontWeight: 600,
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'

    },
  } : {})
}))

export const PriceCardContent = styled(CardContent)(() => ({
  display: 'flex',
  gap: 4,
  flexDirection: 'column'
}))

export const CurrencyAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  backgroundColor: theme.palette.divider,
  objectPosition: 'center',
  objectFit: 'contain',
  marginLeft: 'auto'
})) 