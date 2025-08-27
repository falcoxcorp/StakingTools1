import { Stack, Typography } from '@mui/material';
import { memo, useMemo } from 'react'
import { TransTypography } from '../../../../components/TransTypography';
import { IStakingContractInfo, ITokenInfo } from '../../interfaces/ISmartChef';
import { useCallUserInfo } from '../../hooks/contract/useStakingCalls';
import { ChildrenProps } from '../../../../common/types';
import numeral from 'numeral';

type Props = ChildrenProps & {
  item: IStakingContractInfo,
  stakedToken: ITokenInfo | undefined
  flexDirection?: 'row' | 'column',
  isConvert?: boolean
}

const TokenStakingInfo = ({ item, stakedToken, children, flexDirection, isConvert }: Props) => {
  const { data: userInfo } = useCallUserInfo(item?.stakingContact)
  const stakingToken = useMemo(() => numeral(userInfo?.amount as number || 0)?.format('0.0a') , [userInfo?.amount, numeral])
  const stakingTokenUsd = useMemo(() => ((userInfo?.amount || 0) * (stakedToken?.price || 0)).toFixed(4), [userInfo?.amount, stakedToken?.price])
  return (
    <Stack sx={{
      padding: 2,
      mb: 2,
      borderRadius: 2,
      border: (theme) => `1px solid ${theme.palette.divider}`
    }} flexDirection={flexDirection ?? 'row'} justifyContent={'space-between'} alignItems={'center'}>
      <Stack flex={1}>
        <TransTypography message='staking:staked' values={{ symbol: stakedToken?.symbol }} />
        <Typography fontWeight={800} variant='subtitle' color="primary">{isConvert ? stakingToken : userInfo?.amount}</Typography>
        <TransTypography message='staking:equalUSD' values={{ currency: stakingTokenUsd }} />
      </Stack>
      {children}
    </Stack>
  );

}

export default memo(TokenStakingInfo);