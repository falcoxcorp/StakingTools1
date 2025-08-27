import { Grid, Stack, Typography } from '@mui/material';
import { memo } from 'react'
import NetworkCard from './NetworkCard';
import { INetworks } from '../../../../contracts/instances/interfaces';
import { FormRadioGroupField } from '../../../../components/FormFields';


type NetworkSectionProps = {
  title: string,
  networks: INetworks[]
}

const NetworkSection = ({ networks, title }: NetworkSectionProps) => {

  return (
    <FormRadioGroupField name='chainId'>
      <Stack gap={2}>
      <Typography variant="subtitle1" fontWeight={800}>{title}</Typography>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {
          networks?.map((network: INetworks) => (
            <Grid item xs={6} md={4} key={network?.chainId}>
              <NetworkCard network={network} />
            </Grid>
          ))
        }
      </Grid>
    </Stack>
    </FormRadioGroupField>
  );

}

export default memo(NetworkSection);