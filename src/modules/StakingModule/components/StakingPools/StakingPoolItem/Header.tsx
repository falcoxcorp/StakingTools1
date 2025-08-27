import { Badge, ListItem, ListItemAvatar, ListItemText, Skeleton } from '@mui/material';
import { memo, useMemo } from 'react'
import { TransTypography } from '../../../../../components/TransTypography';
import { IStakingContractInfo } from '../../../interfaces/ISmartChef';
import { LargeAvatar, SmallAvatar } from './styled';
import { getTokenByAddress } from '../../../context/StakingReducer';
import { useStakingContractContext } from '../../../context/StakingContractContext';

const Header = ({ item }: { item: IStakingContractInfo }) => {
  const { state } = useStakingContractContext()
  const rewardTokenInfo = useMemo(() => getTokenByAddress(item?.rewardToken?.toLowerCase()), [getTokenByAddress, item, state])
  const stakedTokenInfo = useMemo(() => getTokenByAddress(item?.stakedToken?.toLowerCase()), [getTokenByAddress, item, state])

  return (
    <ListItem sx={{ backgroundColor: (theme) => theme.palette.grey[800] }}>
      <ListItemText
        primary={
          rewardTokenInfo?.symbol ?
            <TransTypography
              variant='h1'
              fontWeight={800}
              lineHeight={1.2}
              color={'primary.main'} message='staking:pool:header:rewardToken'
              values={{ name: rewardTokenInfo?.symbol || '-' }}
            /> : <Skeleton variant='text' sx={{ width: 80 }} />
        }
        secondary={stakedTokenInfo?.symbol ? <TransTypography
          variant='caption'
          message='staking:pool:header:stakingToken'
          values={{ name: stakedTokenInfo?.symbol }}
        /> : <Skeleton variant='text' sx={{ width: 50 }} />}
      />
      <ListItemAvatar sx={{ minWidth: 30 }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            rewardTokenInfo?.image ?
              <SmallAvatar alt="reward-token" src={rewardTokenInfo?.image} /> : <Skeleton variant='circular' sx={{
                width: 16,
                height: 16
              }} />
          }
        >
          {
            stakedTokenInfo?.image ?
              <LargeAvatar alt="staking-token" src={stakedTokenInfo?.image} /> : <Skeleton variant='circular' sx={{
                width: 24,
                height: 24
              }} />
          }

        </Badge>
      </ListItemAvatar>
    </ListItem>
  );

}

export default memo(Header);


