import { memo } from 'react'
import { useEthers } from '@usedapp/core';
import { Grid, Stack } from '@mui/material';
import { ServiceUpdateFee } from '../components/ServiceUpdateFee';
import { ServiceUpdateAdminWallet } from '../components/ServiceUpdateAdminWallet';
import { StakingFactoryUpdateServiceAddress } from '../components/StakingFactoryUpdateServiceAddress';
import { SERVICE_OWNER } from '../../../settings/config/services';
import ServiceUpdateEtherPayment from '../components/ServiceUpdateEtherPayment/ServiceUpdateEtherPayment';
import ServiceHeader from '../components/ServiceHeader/ServiceHeader';
import { ServiceWithdrawEther } from '../components/ServiceWithdrawEther';


const ServiceConfigContainer = () => {
  const { account } = useEthers()

  if (!account) return <>Loading</>
  if (account && SERVICE_OWNER.includes(account as string)) {
    return (
      <Stack gap={{ xs: 1, md: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ServiceHeader />
          </Grid>
          <Grid item xs={12} >
            <ServiceUpdateFee />
          </Grid>
          <Grid item xs={12}>
            <ServiceUpdateAdminWallet />
          </Grid>
          <Grid item xs={12}>
            <ServiceUpdateEtherPayment />
          </Grid>
          {/* <Grid item xs={12}>
            <ServiceUpdateTokenPayment />
          </Grid>  */}        
          <Grid item xs={12}>
            <ServiceWithdrawEther />
          </Grid>
         {/*  <Grid item xs={12}>
            <ServiceWithdrawByToken />
          </Grid> */}
        </Grid>
        <StakingFactoryUpdateServiceAddress />


      </Stack>
    )
  }
  /* return (
    <RedirectHome />
  ); */

}

export default memo(ServiceConfigContainer);