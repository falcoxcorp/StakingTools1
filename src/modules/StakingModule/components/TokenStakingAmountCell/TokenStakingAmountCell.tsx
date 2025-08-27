import { memo } from 'react'
import { useCallStakedTokenAmount } from '../../hooks/contract/useStakingCalls'
import { Skeleton } from '@mui/material'

type TokenStakingAmountCellProps = {
  stakingAddress: string
}

const TokenStakingAmountCell = ({ stakingAddress }: TokenStakingAmountCellProps) => {
  const { data, isLoading } = useCallStakedTokenAmount(stakingAddress)

  if (isLoading) {
    return (<Skeleton sx={{ marginX: 'auto' }} width={80} variant='text' />)
  }
  return (
    <div>{data}</div>
  );

}

export default memo(TokenStakingAmountCell);