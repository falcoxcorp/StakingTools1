import ParserWallet from '../../../components/ParserWallet/ParserWallet';
import { TOKEN_TYPE_ENUM } from '../../../contracts/instances/interfaces';
import { CellAlign, HeadCell } from '../../../layouts/Table';
import TokenListAction from '../../UserModule/components/TokenListAction/TokenListAction';

export const tokeListColumns = (token: TOKEN_TYPE_ENUM): HeadCell[] => ([
  {
    field: 'name',
    headerName: 'erc20:name',
    width: 300,
    align: CellAlign.LEFT
  },
  {
    field: 'symbol',
    headerName: 'erc20:symbol',
    align: CellAlign.CENTER
  },
  {
    field: 'tokenAddress',
    headerName: 'erc20:address',
    renderCell: (tokenAddress: string) => <ParserWallet address={tokenAddress} />,
    align: CellAlign.CENTER
  },
  {
    field: 'action',
    headerName: 'common:action',
    width: 100,
    renderCell: (_, data: any) => <TokenListAction address={data?.tokenAddress} token={token} />,
    align: CellAlign.CENTER
  },
])