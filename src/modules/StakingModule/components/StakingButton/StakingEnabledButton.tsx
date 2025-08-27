import { memo } from 'react'
import { useEnabledContract } from '../../hooks/contract/useEnabledContract';
import { IStakingContractInfo, ITokenInfo } from '../../interfaces/ISmartChef';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import StakingActionButton from './StakingActionButton/StakingActionButton';

type StakingEnabledButtonProps = {
  item: IStakingContractInfo
  stakedTokenInfo: ITokenInfo
}

const StakingEnabledButton = ({ item, stakedTokenInfo }: StakingEnabledButtonProps) => {
  const { t } = useTranslation()
  const { allowance, approve, isLoading } = useEnabledContract({
    SPENDER_ADDRESS: item?.stakingContact,
    TOKEN_ADDRESS: item?.stakedToken?.toLowerCase()
  })

  if (allowance) {
    return (
      <StakingActionButton item={item} stakedTokenInfo={stakedTokenInfo} />
    )
  }
  return (
    <LoadingButton loading={isLoading} fullWidth variant='outlined' size='large' onClick={async () => {
      approve()
    }}>
      {t('common:enabledStaking')}
    </LoadingButton>
  );

}

export default memo(StakingEnabledButton);


