import { memo, useMemo } from 'react'
import { INetworks } from '../../../../contracts/instances/interfaces';
import { ListItem, ListItemIcon, ListItemText, Radio, Stack, Typography } from '@mui/material';
import { CryptoCard } from './styled';

type NetworkCardProps = {
  network: INetworks
}

const NetworkCard = ({ network }: NetworkCardProps) => {
  const disabled = useMemo(() => network?.disabled || false, [network])


  return (
    <CryptoCard disabled={network?.disabled}>
      <ListItem >
        <ListItemIcon sx={{
          position: 'absolute',
          top: 3, right: 3,
          zIndex: 1
        }}>
          <Radio disabled={disabled} name='chainId' value={network?.chainId} size='small' />
        </ListItemIcon>
        <Stack mt={1} flexDirection={{ xs: 'column', md: 'row' }} alignItems={{xs:'start', md:'center'}}>
          <ListItemIcon>
            {network?.icon}
          </ListItemIcon>
          <ListItemText
            primary={<Typography width={'100%'} sx={{ wordBreak: 'break-word' }}>{network?.name}</Typography>}
            secondary={<Typography width={'100%'} fontWeight={800} sx={{ wordBreak: 'break-word' }}>{network?.symbol}</Typography>} />
        </Stack>
      </ListItem>
    </CryptoCard>
  );

}

export default memo(NetworkCard);