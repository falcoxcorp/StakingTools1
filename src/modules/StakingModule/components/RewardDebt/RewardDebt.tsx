import { Button } from '@mui/material';
import { Fragment, memo } from 'react'
import { IStakingContractInfo, ITokenInfo } from '../../interfaces/ISmartChef';
import RewardDebtInfo from './RewardDebtInfo';
import RewardDebtModal from './RewardDebtModal';
import useToggle from '../../../../common/hooks/useToggle';
import { useTranslation } from 'react-i18next';

type Props = {
  item: IStakingContractInfo,
  rewardToken: ITokenInfo | undefined
}

const RewardDebt = ({ item, rewardToken }: Props) => {
  const { t } = useTranslation('staking')
  const { isOpen, onClose, onOpen } = useToggle(false)
  return (
    <Fragment>
      <RewardDebtInfo item={item} rewardToken={rewardToken} isConvert>
        <Button size='large' variant='contained' onClick={onOpen}>
          {t('harvest')}
        </Button>
      </RewardDebtInfo>
      <RewardDebtModal item={item} onClose={onClose} open={isOpen} rewardToken={rewardToken} />
    </Fragment>

  );

}

export default memo(RewardDebt);