import { memo, useMemo } from 'react'
import { useServiceContext } from '../../contexts/ServiceContext';
import { CardSection } from '../../../AdministrationModule/components/CardSection';
import { useEthers } from '@usedapp/core';
import { TransTypography } from '../../../../components/TransTypography';
import { Chip, Stack } from '@mui/material';
import { GLOBAL_NETWORKS } from '../../../../contracts/instances/ERC20/network-token-erc20';
import ParserWallet from '../../../../components/ParserWallet/ParserWallet';

const ServiceHeader = () => {
  const { chainId } = useEthers()
  const { serviceAddress } = useServiceContext()
  const network = useMemo(() => GLOBAL_NETWORKS?.find(n => n.chainId === chainId), [GLOBAL_NETWORKS, chainId])
  return (
    <CardSection title='' subtitle=''>
      <Stack gap={1} alignItems={'center'} justifyContent={'space-between'} direction={{ xs: 'column', md: 'row' }}>
        <TransTypography message='service:name' values={{ address: serviceAddress }} />
        <Stack gap={1} direction={{ xs: 'column', md: 'row' }}>
          <ParserWallet address={serviceAddress || ''} />
          <Chip icon={network?.icon} label={network?.name} />
        </Stack>
      </Stack>
    </CardSection>
  );

}

export default memo(ServiceHeader);