import { TableCell, TableRow } from '@mui/material';
import { memo } from 'react'
import ParserWallet from '../../../../components/ParserWallet/ParserWallet';


type TokenItemProps = {
  name: string,
  symbol: string,
  tokenAddress: string
}

const TokenItem = ({ name, symbol, tokenAddress }: TokenItemProps) => {

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name || '-'}
      </TableCell>
      <TableCell component="th" scope="row">
        {symbol || '-'}
      </TableCell>
      <TableCell align="center"><ParserWallet address={tokenAddress} /></TableCell>
    </TableRow>
  );

}

export default memo(TokenItem);