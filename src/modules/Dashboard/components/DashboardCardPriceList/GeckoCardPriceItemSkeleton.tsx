import { memo } from 'react'
import { CurrencyAvatar, PriceCard, PriceCardContent } from './styled';
import { Skeleton } from '@mui/material';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const GeckoCardPriceItemSkeleton = () => {
  return (
    <PriceCard>
      <PriceCardContent>
        <CurrencyAvatar>
          <MonetizationOnOutlinedIcon />
        </CurrencyAvatar>
        <Skeleton variant='text' sx={{ fontSize: 18, width: 50 }} />
        <Skeleton variant='text' sx={{ fontSize: 16, width: 80 }} />
      </PriceCardContent>
    </PriceCard>
  );

}

export default memo(GeckoCardPriceItemSkeleton);