import { memo } from 'react'
import { ITokenInfo } from '../../interfaces/ISmartChef';
import { Skeleton, Stack, Typography } from '@mui/material';
import { SmallAvatar } from '../StakingPools/StakingPoolItem/styled';
type TokenAvatarSymbolProps = {
  token: ITokenInfo
}

const TokenAvatarSymbol = ({ token }: TokenAvatarSymbolProps) => {

  return (
    <Stack gap={0.5} flexDirection={'row'} alignItems={'center'}>
      {
        token?.image ? <SmallAvatar alt="reward-token" src={token?.image} /> : <Skeleton variant='circular' sx={{
          width: 18,
          height: 18
        }} />
      }
      <Typography>{token?.symbol}</Typography>
    </Stack>
  );

}

export default memo(TokenAvatarSymbol);