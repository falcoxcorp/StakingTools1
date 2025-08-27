import { memo } from 'react'
import { useCallStakedToken } from '../../hooks/contract/useStakingCalls'
import { ListItem, ListItemIcon, ListItemText, Skeleton } from '@mui/material'
import { useCallNameAndSymbol } from '../../hooks/contract/useTokenCalls'
import { Token } from '@mui/icons-material'

type TokenStakingAmountCellProps = {
  stakingAddress: string
  useHook?: any
}

const TokenStakingAmountCell = ({ stakingAddress, useHook = useCallStakedToken }: TokenStakingAmountCellProps) => {
  const { data, isLoading } = useHook(stakingAddress)

  if (isLoading) {
    return (<Skeleton sx={{ marginX: 'auto' }} width={80} variant='text' />)
  }
  return (
    <TokenInfo tokenAddress={data} />
  );

}

export default memo(TokenStakingAmountCell);


const TokenInfo = ({ tokenAddress }: { tokenAddress: string }) => {
  const { data, isLoading } = useCallNameAndSymbol(tokenAddress)

  if (isLoading) {
    return (<Skeleton sx={{ marginX: 'auto' }} width={80} variant='text' />)
  }
  return (
    <ListItem>
      <ListItemIcon sx={{ minWidth: 40 }}>
        <Token color='primary' />
      </ListItemIcon>
      <ListItemText primaryTypographyProps={{ fontWeight: 800, color: 'primary.main' }} primary={data?.name} secondary={data?.symbol} />
    </ListItem>
  )
}