import { Stack, Typography } from '@mui/material';
import { memo, useMemo } from 'react'
import { TransTypography } from '../../../../components/TransTypography';
import { IStakingContractInfo, ITokenInfo } from '../../interfaces/ISmartChef';
import { useCallPendingReward } from '../../hooks/contract/useStakingCalls';
import { ChildrenProps } from '../../../../common/types';
import numeral from 'numeral'

type Props = ChildrenProps & {
  item: IStakingContractInfo,
  rewardToken: ITokenInfo | undefined
  flexDirection?: 'row' | 'column',
  isConvert?: boolean
}

const RewardDebtInfo = ({ item, rewardToken, children, flexDirection, isConvert }: Props) => {
  const { data: pendingReward } = useCallPendingReward(item?.stakingContact)
  
  const reward = useMemo(() => numeral(pendingReward || 0)?.format('0.0a') , [pendingReward, numeral])
  const rewardUsd = useMemo(() => ((pendingReward || 0) * (rewardToken?.price || 0)).toFixed(4), [pendingReward, rewardToken?.price])
  return (
    <Stack sx={{
      padding: 2,
      mb: 2,
      borderRadius: 2,
      border: (theme) => `1px solid ${theme.palette.divider}`
    }} flexDirection={flexDirection ?? 'row'} justifyContent={'space-between'} alignItems={'center'}>
      <Stack>
        <TransTypography message='staking:reward:tokenEarn' values={{ symbol: rewardToken?.symbol }} />
        <Typography fontWeight={800} variant='subtitle' color="primary">{isConvert ? reward : pendingReward}</Typography>
        <TransTypography message='staking:equalUSD' values={{ currency: rewardUsd }} />
      </Stack>
      {children}
    </Stack>
  );

}

export default memo(RewardDebtInfo);