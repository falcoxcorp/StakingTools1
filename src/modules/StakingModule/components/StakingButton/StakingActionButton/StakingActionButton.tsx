import { memo } from 'react'
import StakingActionModal from './StakingDepositModal';
import { LoadingButton } from '@mui/lab';
import useToggle from '../../../../../common/hooks/useToggle';
import { useTranslation } from 'react-i18next';
import { IStakingContractInfo, ITokenInfo } from '../../../interfaces/ISmartChef';

type StakingActionButtonProps = {
  item: IStakingContractInfo
  stakedTokenInfo: ITokenInfo
}

const StakingActionButton = ({ item, stakedTokenInfo }: StakingActionButtonProps) => {
  const { t } = useTranslation()
  const { isOpen, onClose, onOpen } = useToggle(false)

  return (
    <>
      <LoadingButton fullWidth variant='contained' size='large' onClick={onOpen}>
        {t('common:stake')}
      </LoadingButton>
      <StakingActionModal onClose={onClose} open={isOpen} {...{ item, stakedTokenInfo }} />
    </>
  );

}

export default memo(StakingActionButton);