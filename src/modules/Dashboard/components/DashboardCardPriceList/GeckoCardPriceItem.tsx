import { memo, useMemo } from 'react'
import { CurrencyAvatar, PriceCard, PriceCardContent } from './styled';
import Typography from '@mui/material/Typography'
import { ICurrencyNetworks } from '../../../../settings/token-prices';
import { TokenPrices } from '../../interfaces/IGeckoPrices';
import { countZero } from '../../../../utils/utils-func/parseNumber';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

type GeckoCardPriceItemProps = {
  token: ICurrencyNetworks
  prices: TokenPrices
}


const GeckoCardPriceItem = ({ token, prices }: GeckoCardPriceItemProps) => {
  const price = useMemo(() => {
    const p = Number(prices[token?.address.toLocaleLowerCase()])
    const count = countZero(p)
    return (p.toFixed(count + 3))
  }, [token, prices, countZero])
  return (
    <PriceCard>
      <PriceCardContent>
        <CurrencyAvatar src={token?.icon}>
          <MonetizationOnOutlinedIcon />
        </CurrencyAvatar>
        <Typography variant="h1" fontWeight={800}>{`${token?.token} / USD`}</Typography>
        <Typography variant="h2">{`$ ${price}`}</Typography>
      </PriceCardContent>
    </PriceCard>
  );

}

export default memo(GeckoCardPriceItem);