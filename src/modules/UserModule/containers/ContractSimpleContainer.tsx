import { memo } from 'react'
import { ContainerPaper } from '../../Dashboard/components/SecurityPoliticContent/styled';
import { FalcoCoinName } from '../components/FalcoCoinContent/FalcoCoinName';
import FalcoCoinSymbol from '../components/FalcoCoinContent/FalcoCoinSymbol/FalcoCoinSymbol';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { CoinProvider } from '../context/FalcoCoinContent';
import { Section } from '../components/FalcoCoinContent/styled';
import { TOKEN_TYPE_ENUM } from '../../../contracts/instances/interfaces';
import { SimpleCoinInstance } from '../../../contracts/instances/SimpleCoin/simple.coin.contract.instance';
import { COIN_ENUM } from '../constants/token-basic';
import { CoinTotalSupply } from '../components/FalcoCoinContent/CoinTotalSupply';

type ContractSimpleContainerProps = {
  address: string,
  token: TOKEN_TYPE_ENUM
}
const ContractSimpleContainer = ({ address, token }: ContractSimpleContainerProps) => {

  const { t } = useTranslation('falcoCoin')

  return (
    <CoinProvider contractAddress={address as string} token={token} Instance={SimpleCoinInstance}>
      <ContainerPaper>
        <Section gap={{ xs: 1, md: 2 }}>
          <Typography variant="h1" mb={1} color={'primary'} fontWeight={800}>{t('details.title')}</Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={6}>
              <FalcoCoinName title={t('details.name')} contract={{
                args: [],
                Instance: SimpleCoinInstance,
                method: COIN_ENUM.NAME,
                address
              }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FalcoCoinSymbol title={t('details.symbol')} contract={{
                args: [],
                Instance: SimpleCoinInstance,
                method: COIN_ENUM.SYMBOL,
                address
              }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FalcoCoinSymbol title={t('details.decimals')} contract={{
                args: [],
                Instance: SimpleCoinInstance,
                method: COIN_ENUM.DECIMALS,
                address
              }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CoinTotalSupply title={t('details.totalSupply')} contract={{
                args: [],
                Instance: SimpleCoinInstance,
                method: COIN_ENUM.TOTAL_SUPPLY,
                address
              }} />
            </Grid>
            
          </Grid>
        </Section>
      </ContainerPaper>
    </CoinProvider>
  );

}

export default memo(ContractSimpleContainer);