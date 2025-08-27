import { Grid } from '@mui/material';
import { memo } from 'react'
import { ICurrencyNetworks, TOKEN_PRICES } from '../../../../settings/token-prices';
import GeckoCardPoolPriceItem from './GeckoCardPoolPriceItem';


const DashboardCardPriceList = () => {


  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      {
        TOKEN_PRICES?.map((token: ICurrencyNetworks) => (
          <Grid item xs={6} md={2.4} key={token?.address}>
            <GeckoCardPoolPriceItem token={token} />
          </Grid>
        ))
      }
    </Grid>
  );

}

export default memo(DashboardCardPriceList);