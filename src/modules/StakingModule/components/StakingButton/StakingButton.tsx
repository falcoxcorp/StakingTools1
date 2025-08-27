import { LoadingButton } from '@mui/lab';
import { useEthers } from '@usedapp/core';
import { memo, useMemo } from 'react'
import { MetamaskIcon } from '../../../../components/IconSVG/MetamaskIcon';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import { IStakingContractInfo, ITokenInfo } from '../../interfaces/ISmartChef';
import { TransTypography } from '../../../../components/TransTypography';
import { getTokenByAddress } from '../../context/StakingReducer';
import StakingEnabledButton from './StakingEnabledButton';
import { useStakingContractContext } from '../../context/StakingContractContext';

type StakingButtonProps = {
  item: IStakingContractInfo
}
const StakingButton = ({ item }: StakingButtonProps) => {
  const { t } = useTranslation('web3')
  const { state } = useStakingContractContext()
  const { account, activateBrowserWallet, isLoading } = useEthers()
  const stakedTokenInfo = useMemo(() => getTokenByAddress(item?.stakedToken.toLowerCase()), [getTokenByAddress, item, state])


  if (account) return (
    <Stack gap={1}>
      <TransTypography message='staking:action:stake' values={{ symbol: stakedTokenInfo?.symbol }} />
      <StakingEnabledButton item={item} stakedTokenInfo={stakedTokenInfo as ITokenInfo} />
    </Stack>
  )

  return (
    <LoadingButton fullWidth variant='contained' size='large' startIcon={<MetamaskIcon />} loading={isLoading} onClick={() => activateBrowserWallet()}>
      {t('metamask.connect_button.connect')}
    </LoadingButton>
  );

}

export default memo(StakingButton);