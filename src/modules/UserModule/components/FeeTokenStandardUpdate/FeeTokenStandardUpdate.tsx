import { memo } from 'react'
import { COIN_ENUM } from '../../constants/token-basic';
import { Grid } from '@mui/material';
import { FeeItem } from './FeeItem';
import { useTranslation } from 'react-i18next';
import { IContractCall } from '../../interfaces/IContractCall';

type FeeTokenStandardUpdateProps = {
  contract: IContractCall
}

const FeeTokenStandardUpdate = ({ contract }: FeeTokenStandardUpdateProps) => {
  const { t } = useTranslation('falcoCoin')
  const fees = [
    COIN_ENUM._TAX_FEE,
    COIN_ENUM._BURN_FEE,
    COIN_ENUM._CHARITY_FEE,
  ]

  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      {fees?.map(fee => (
        <Grid key={fee} item xs={12} md={4}>
          <FeeItem title={t(`details.${fee}`)} contract={{ ...contract, method: fee }} />
        </Grid>
      ))}

    </Grid>
  )

}

export default memo(FeeTokenStandardUpdate);