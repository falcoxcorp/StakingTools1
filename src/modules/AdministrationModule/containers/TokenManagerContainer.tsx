import { Stack } from '@mui/material';
import { memo } from 'react'
import { TokenConfigSection } from '../components/TokenConfigSection';
import { EtherConfigSection } from '../components/EtherConfigSection';
import { TokenProvider } from '../context/TokenContext';
import TokenSection from '../components/EtherConfigSection/TokenSection';

const TokenManagerContainer = () => {

  return (
    <TokenProvider>
      <Stack gap={2} sx={{ maxWidth: 1000, marginX: 'auto', mb: 4 }}>
        <TokenSection />
        <EtherConfigSection />
        <TokenConfigSection />
      </Stack>
    </TokenProvider>
  );

}

export default memo(TokenManagerContainer);
