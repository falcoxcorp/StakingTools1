import { Stack } from '@mui/material';
import { memo } from 'react'
import { WithdrawEtherSection } from '../components/WithdrawEtherSection';
import { WithdrawTokenSection } from '../components/WithdrawTokenSection';
import { TokenProvider } from '../context/TokenContext';
import TokenSection from '../components/EtherConfigSection/TokenSection';

const ConfigManagerContainer = () => {

  return (
    <TokenProvider>

      <Stack gap={2} sx={{ maxWidth: 1000, marginX: 'auto', mb: 4 }}>
        <TokenSection />
        <WithdrawEtherSection />
        <WithdrawTokenSection />
      </Stack>
    </TokenProvider>
  );

}

export default memo(ConfigManagerContainer);
