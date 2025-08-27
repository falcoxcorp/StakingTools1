import { Stack } from '@mui/material';
import { memo, useMemo } from 'react'
import { TransTypography } from '../../../../components/TransTypography';
import { IStakingContractInfo, ITokenInfo } from '../../interfaces/ISmartChef';
import { useCallPendingReward } from '../../hooks/contract/useStakingCalls';
import { ChildrenProps } from '../../../../common/types';

type Props = ChildrenProps & {
  item: IStakingContractInfo,
  rewardToken: ITokenInfo | undefined
}

const RewardDebtInfoModal = ({ item, rewardToken }: Props) => {
  const { data: pendingReward } = useCallPendingReward(item?.stakingContact)
  const rewardUsd = useMemo(() => ((pendingReward || 0) * (rewardToken?.price || 0)) as number, [pendingReward, rewardToken?.price])
  return (
    <Stack sx={{
      padding: 2,
      borderRadius: 2,
      border: (theme) => `1px solid ${theme.palette.divider}`
    }} >
      <TransTypography message='staking:reward:tokenEarn' values={{ symbol: '' }} />
      <TransTypography color={'primary'} fontWeight={800} variant='subtitle' message='staking:quantityToken' values={{ symbol: rewardToken?.symbol, quantity: pendingReward }} />
      <TransTypography message='staking:equalUSD' values={{ currency: rewardUsd }} />
    </Stack>
  );

}

export default memo(RewardDebtInfoModal);