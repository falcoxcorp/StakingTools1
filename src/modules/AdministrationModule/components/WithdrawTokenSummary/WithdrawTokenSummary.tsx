import { memo } from 'react'
import { Typography } from '@mui/material';
import { formatEther } from 'ethers/lib/utils';
import { Balance, Content } from './styled';
import { useCallGetBalanceToken } from '../../../../hooks/useCallGetBalanceToken';
import { IToken } from '../../../../contracts/instances/interfaces';

type WithdrawTokenSummaryProps = {
  token: IToken
}
const WithdrawTokenSummary = ({ token }: WithdrawTokenSummaryProps) => {
  const { balance } = useCallGetBalanceToken(token?.address)
  return (
    <Content>
      <Typography variant="h1">Balance</Typography>
      <Balance>
        <Typography component={'span'} color={'primary'} variant='h4' fontWeight={600}>
          {formatEther(balance)} {token?.name}
        </Typography>
      </Balance>
    </Content>
  );

}

export default memo(WithdrawTokenSummary);