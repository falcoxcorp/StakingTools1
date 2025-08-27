import { memo } from 'react'
import { TaxCardContent } from './styled'
import TaxSellBuy from './TaxSellBuy'
import { useTheme } from '@mui/material'

type TaxCardProps = {
  taxBuy: number[]
  taxSell: number[]
}

const TaxCard = ({ taxBuy, taxSell }: TaxCardProps) => {
  const { palette } = useTheme()
  return (
    <TaxCardContent>
      <TaxSellBuy color={palette.success.main} title='BUY' taxs={taxBuy} />
      <TaxSellBuy color={palette.error.main} title='SELL' taxs={taxSell} />
    </TaxCardContent>
  );

}

export default memo(TaxCard);