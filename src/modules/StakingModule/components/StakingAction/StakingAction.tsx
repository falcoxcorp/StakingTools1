import { IconButton, Stack, Tooltip } from '@mui/material';
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import { useEthers } from '@usedapp/core';
import { config } from '../../../../settings/networks';
import { CustomNavLink } from '../../../../layouts/Menu/NavLinkListItem';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

type StakingActionProps = {
  address: string
}

const StakingAction = ({ address }: StakingActionProps) => {
  const { t } = useTranslation('common')
  const { chainId } = useEthers()
  const network: any = chainId && config?.networks?.find(nt => nt.chainId === chainId)
  const link = useMemo(() => `${network?.blockExplorerUrl}/address/${address}`, [network, address])

  return (
    <Stack direction={'row'} gap={1}>
      <Tooltip title={t('linkAddress')}>
        <IconButton size='small' href={link} target='_blank'>
          <InsertLinkOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title={t('edit')}>
        <CustomNavLink to={`/staking/owner/${address}`}>
          <IconButton size='small'>
            <EditOutlinedIcon />
          </IconButton>
        </CustomNavLink>
      </Tooltip>
    </Stack>
  );

}

export default memo(StakingAction);