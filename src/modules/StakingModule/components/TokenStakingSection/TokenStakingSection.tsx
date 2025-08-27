import { Button, Stack } from '@mui/material';
import { Fragment, memo } from 'react'
import { IStakingContractInfo, ITokenInfo } from '../../interfaces/ISmartChef';
import useToggle from '../../../../common/hooks/useToggle';
import AddIcon from '@mui/icons-material/Add';
import TokenStakingInfo from './TokenStakingInfo';
import RemoveIcon from '@mui/icons-material/Remove';
import StakingDepositModal from '../StakingButton/StakingActionButton/StakingDepositModal';
import StakingWithdrawModal from '../StakingButton/StakingActionButton/StakingWithdrawModal';

type Props = {
  item: IStakingContractInfo,
  stakedToken: ITokenInfo | undefined
}

const TokenStakingSection = ({ item, stakedToken }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle(false)
  const { isOpen: isWithdrawOpen, onClose: onWithdrawClose, onOpen: onWithdrawOpen } = useToggle(false)

  return (
    <Fragment>
      <TokenStakingInfo item={item} stakedToken={stakedToken} isConvert>
        <Stack gap={1} flexDirection={'row'}>
          <Button size='large' variant='outlined' onClick={onWithdrawOpen}>
            <RemoveIcon fontSize='medium' />
          </Button>
          <Button size='large' variant='outlined' onClick={onOpen}>
            <AddIcon fontSize='medium' />
          </Button>
        </Stack>
      </TokenStakingInfo>
      <StakingWithdrawModal onClose={onWithdrawClose} open={isWithdrawOpen} {...{ item, stakedTokenInfo: stakedToken as ITokenInfo }} />
      <StakingDepositModal onClose={onClose} open={isOpen} {...{ item, stakedTokenInfo: stakedToken as ITokenInfo }} />
    </Fragment>

  );

}

export default memo(TokenStakingSection);