import { ButtonProps } from '@mui/material';
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next';
import { useEthers } from '@usedapp/core'
import { LoadingButton } from '@mui/lab';
import { MetamaskIcon } from '../IconSVG/MetamaskIcon';

const MetamaskButton: FC<ButtonProps> = ({ ...props }: ButtonProps) => {
  const { t } = useTranslation('web3')
  const { account, deactivate, activateBrowserWallet, isLoading } = useEthers()

  if (account) return (
    <LoadingButton fullWidth startIcon={<MetamaskIcon />} loading={isLoading} {...props} onClick={() => deactivate()}>
      {t('metamask.connect_button.disconnect')}
    </LoadingButton>
  )

  return (
    <LoadingButton fullWidth startIcon={<MetamaskIcon />} loading={isLoading} {...props} onClick={() => activateBrowserWallet()}>
      {t('metamask.connect_button.connect')}
    </LoadingButton>
  );

}

export default memo(MetamaskButton);