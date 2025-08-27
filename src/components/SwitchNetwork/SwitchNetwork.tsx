import { Menu, MenuItem, Stack } from '@mui/material';
import { memo, useCallback, useMemo, useState } from 'react'
import { useEthers } from '@usedapp/core';
import { LoadingButton } from '../Buttons';
import { useLocation, useNavigate } from 'react-router-dom';
import { GLOBAL_NETWORKS } from '../../contracts/instances/ERC20/network-token-erc20';
import TokenIcon from '@mui/icons-material/Token';
import { useTranslation } from 'react-i18next';

type Props = {
  networks?: any[]
}
const SwitchNetwork = ({ networks = GLOBAL_NETWORKS }: Props) => {
  const { t } = useTranslation('common')
  const { chainId, switchNetwork, activateBrowserWallet, isLoading } = useEthers()

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const DEFAULT = {
    name: t('selectNetwork'),
    icon: <TokenIcon />
  }

  const selected = useMemo(() => networks?.find(op => op.chainId === chainId) || DEFAULT, [chainId])
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = useCallback(async (index: number) => {
    setAnchorEl(null)
    await switchNetwork(networks[index].chainId)
    await activateBrowserWallet()
    return navigate(pathname, { preventScrollReset: false })
  }, [switchNetwork, navigate, activateBrowserWallet, pathname])

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!selected) return <></>

  return (
    <>
      <LoadingButton
        loading={isLoading}
        onClick={handleClickListItem}
        variant='outlined'
        startIcon={selected?.icon}
        fullWidth
      >

        {selected?.name}
      </LoadingButton>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {networks.map((option, index) => (
          <MenuItem
            key={option?.chainId}
            selected={option?.chainId === chainId}
            onClick={() => handleMenuItemClick(index)}

          >
            <Stack direction={'row'} gap={1} alignItems={'center'}>{option?.icon} {option.name}</Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );

}

export default memo(SwitchNetwork);