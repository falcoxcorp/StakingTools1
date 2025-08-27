import ParserWallet from '../../../components/ParserWallet/ParserWallet';
import { CellAlign, HeadCell } from '../../../layouts/Table';
import { StakedTokenCell } from '../../StakingModule/components/StakedTokenCell';
import { StakingAction } from '../../StakingModule/components/StakingAction';
import { TokenStakingAmountCell } from '../../StakingModule/components/TokenStakingAmountCell';
import { useCallRewardToken } from '../../StakingModule/hooks/contract/useStakingCalls';

export const stakingListColumns: HeadCell[] = [

  {
    field: 'tokenStaking',
    headerName: 'staking:columns:tokenStaking',
    renderCell: (_, data: any) => <StakedTokenCell stakingAddress={data?.staking} />,
    align: CellAlign.LEFT
  },
  {
    field: 'tokenReward',
    headerName: 'staking:columns:tokenReward',
    renderCell: (_, data: any) => <StakedTokenCell useHook={useCallRewardToken} stakingAddress={data?.staking} />,
    align: CellAlign.LEFT
  },
  {
    field: 'total',
    headerName: 'staking:columns:total',
    renderCell: (_, data: any) => <TokenStakingAmountCell stakingAddress={data?.staking} />,
    align: CellAlign.CENTER
  },
  {
    field: 'staking',
    headerName: 'staking:columns:address',
    renderCell: (staking: string) => <ParserWallet address={staking} />,
    align: CellAlign.CENTER
  },
  {
    field: 'action',
    headerName: 'common:action',
    width: 100,
    renderCell: (_, data: any) => <StakingAction address={data?.staking} />,
    align: CellAlign.CENTER
  },
]