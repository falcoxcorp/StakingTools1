import { Stack } from '@mui/material';
import { memo } from 'react'
import { DashboardCardPriceList } from '../components/DashboardCardPriceList';
import { Footer } from '../../../layouts/Footer';
import { HomeSection1 } from '../components/HomeSection1';


const DashboardContainer = () => {

  return (
    <Stack gap={{ xs: 2, md: 4 }}>
      <HomeSection1 />
      <DashboardCardPriceList />
      <Footer />
    </Stack>
  );

}

export default memo(DashboardContainer);