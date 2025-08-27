import { memo, useCallback, useMemo } from 'react'
import { Alert, Button } from '@mui/material';
import { useEthers } from '@usedapp/core';
import { useTranslation } from 'react-i18next';
import TranslationByStyled from '../../../../../../components/TranslationByStyled/TranslationByStyled';
import { useLocation, useNavigate} from 'react-router-dom';
import { LIST_NETWORKS_ERC20 } from '../../../../../../contracts/instances/ERC20/network-token-erc20';
import { config } from '../../../../../../settings/networks';


type AlertChainProps = {
  _chainId: number,
  message?: string
}

const AlertChain = ({ _chainId, message }: AlertChainProps) => {
  const { t } = useTranslation('erc20')
  const { switchNetwork, chainId, activateBrowserWallet } = useEthers()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const network = useMemo(() => config?.networks?.find((n) => n?.chainId === _chainId), [LIST_NETWORKS_ERC20, _chainId])

  const handleSwitchNetwork = useCallback(async () => {
    await switchNetwork(_chainId)
    await activateBrowserWallet()
    return navigate(pathname, { preventScrollReset: false })
  }, [switchNetwork, _chainId])

  if (_chainId === 0) return <></>

  if (chainId !== _chainId) {
    return (
      <Alert variant="outlined" severity="warning" action={
        <Button variant='outlined' onClick={handleSwitchNetwork}>
          {t('alert.action')}
        </Button>}>
        <TranslationByStyled message={message ?? 'erc20:alert:alertSwitchNetwork'} values={{ network: network?.chainName, slug: network?.nativeCurrency?.symbol }} />
      </Alert>
    )
  }

  return <></>


}

export default memo(AlertChain);