import { memo } from 'react'
import { Typography } from '@mui/material';
import { formatEther } from 'ethers/lib/utils';
import { useCallGetBalanceEther } from '../../../../hooks/useCallGetBalanceEther';
import { Balance, Content } from './styled';

const WithdrawEtherSummary = () => {
  const { balance, network } = useCallGetBalanceEther()
  return (
    <Content>
      <Typography variant="h1">Balance</Typography>
      <Balance>
        <Typography component={'span'} color={'primary'} variant='h4' fontWeight={600}>
          {formatEther(balance)} {network?.symbol}
        </Typography>
      </Balance>
    </Content>
  );

}

export default memo(WithdrawEtherSummary);