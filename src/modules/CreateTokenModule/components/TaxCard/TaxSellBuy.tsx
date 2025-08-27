import { memo, useMemo } from 'react'
import { Item, Section, Sell } from './styled';
import { Box, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import { TAX_ENUM } from '../../../interfaces/create-token-advanced.interface';
import { useTranslation } from 'react-i18next';

type TaxSellBuyProps = {
  color: string,
  title: string
  taxs: number[]
}

const TaxSellBuy = ({ color, title, taxs }: TaxSellBuyProps) => {
  const total = useMemo(() => taxs?.reduce((pre, curr) => pre + curr), [taxs])
  const { t } = useTranslation('createToken')

  return (
    <Section>
      <Sell c={color}>
        <Box sx={{ transform: { xs: 'none', md: 'rotate(-90deg)' } }}>
          <Typography variant="h5" fontWeight={800}>{title}</Typography>
        </Box>
      </Sell>
      <Item>
        <Typography variant="h5" fontWeight={800} color={'primary.main'}>{total}</Typography>
        <Typography variant="h1" >{t('form.taxType.fee')}</Typography>
      </Item>
      <DragHandleOutlinedIcon fontSize='medium' sx={{ color: color }} />
      <>
        <Item>
          <Typography variant="h5" fontWeight={800} color={'primary.main'}>{taxs[0]}</Typography>
          <Typography variant="h1" >{t(`form.taxType.${TAX_ENUM[0]}`)}</Typography>
        </Item>
        <AddOutlinedIcon fontSize='medium' />
      </>
      <>
        <Item>
          <Typography variant="h5" fontWeight={800} color={'primary.main'}>{taxs[1]}</Typography>
          <Typography variant="h1" >{t(`form.taxType.${TAX_ENUM[1]}`)}</Typography>
        </Item>
        <AddOutlinedIcon fontSize='medium' />
      </>
      <>
        <Item>
          <Typography variant="h5" fontWeight={800} color={'primary.main'}>{taxs[2]}</Typography>
          <Typography variant="h1" >{t(`form.taxType.${TAX_ENUM[2]}`)}</Typography>
        </Item>
        <AddOutlinedIcon fontSize='medium' />
      </>
      <>
        <Item>
          <Typography variant="h5" fontWeight={800} color={'primary.main'}>{taxs[3]}</Typography>
          <Typography variant="h1" >{t(`form.taxType.${TAX_ENUM[3]}`)}</Typography>
        </Item>
      </>
    </Section>
  );

}

export default memo(TaxSellBuy);