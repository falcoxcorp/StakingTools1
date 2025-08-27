import { memo, useEffect } from 'react'
import { CurrencyAvatar, PriceCard, PriceCardContent } from './styled';
import { useCoingeckoPrice, } from '@usedapp/coingecko';
import { ICurrencyNetworks } from '../../../../settings/networks';
import CurrencyBitcoinSharpIcon from '@mui/icons-material/CurrencyBitcoinSharp';
import Typography from '@mui/material/Typography'
import { useCookies } from 'react-cookie'

type DashboardCardPriceItemProps = {
  currency: ICurrencyNetworks
}

const DashboardCardPriceItem = ({ currency }: DashboardCardPriceItemProps) => {
  const price = useCoingeckoPrice(currency?.id, 'usd')
  const [cookies, setCookie] = useCookies([currency?.id]);

  useEffect(() => {
    if (price) {
      setCookie(currency?.id, price, { path: '/' });
    }
  }, [price])

  return (
    <PriceCard>
      <PriceCardContent>
        <CurrencyAvatar src={currency?.icon}>
          <CurrencyBitcoinSharpIcon />
        </CurrencyAvatar>
        <Typography variant="h1" fontWeight={800}>{`${currency?.name} / USD`}</Typography>
        <Typography variant="h2">{`$ ${ price || cookies[currency?.id]}`}</Typography>
       
      </PriceCardContent>
    </PriceCard>
  );

}

export default memo(DashboardCardPriceItem);