import { memo, useMemo } from 'react'
import { CurrencyAvatar, PriceCard, PriceCardContent } from './styled';
import Typography from '@mui/material/Typography'
import { ICurrencyNetworks } from '../../../../settings/token-prices';
import { countZero } from '../../../../utils/utils-func/parseNumber';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { useFindToken } from '../../services/getprices.service';
import GeckoCardPriceItemSkeleton from './GeckoCardPriceItemSkeleton';

type GeckoCardPoolPriceItemProps = {
  token: ICurrencyNetworks
}


const GeckoCardPoolPriceItem = ({ token }: GeckoCardPoolPriceItemProps) => {
  const { data, isLoading } = useFindToken(token?.network, token?.address)
  const price = useMemo(() => {
    const p = Number(data?.attributes?.price_usd)
    const count = countZero(p)
    return (p.toFixed(count + 3))
  }, [data, countZero, token])

  if (isLoading) return <GeckoCardPriceItemSkeleton />


  return (
    <PriceCard network={token.network.toUpperCase()}>
      <PriceCardContent>
        <CurrencyAvatar src={token?.icon}>
          <MonetizationOnOutlinedIcon />
        </CurrencyAvatar>
        <Typography variant="h1" fontWeight={800}>{ `${token?.token} / USD`}</Typography>
        <Typography variant="h2">{`$ ${price}`}</Typography>
      </PriceCardContent>
    </PriceCard>
  );

}

export default memo(GeckoCardPoolPriceItem);