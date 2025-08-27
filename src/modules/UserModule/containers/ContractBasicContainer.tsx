import { memo } from 'react'
import { ContainerPaper } from '../../Dashboard/components/SecurityPoliticContent/styled';
import { FalcoCoinName } from '../components/FalcoCoinContent/FalcoCoinName';
import FalcoCoinSymbol from '../components/FalcoCoinContent/FalcoCoinSymbol/FalcoCoinSymbol';
import { useTranslation } from 'react-i18next';
import { Divider, Grid, Stack, Typography } from '@mui/material';
import { FalcoCoinOwner } from '../components/FalcoCoinContent/FalcoCoinOwner';
import { CoinProvider } from '../context/FalcoCoinContent';
import { Section } from '../components/FalcoCoinContent/styled';
import { RenounceOwnershipForm } from '../components/FalcoCoinContent/RenounceOwnershipForm';
import { TOKEN_TYPE_ENUM } from '../../../contracts/instances/interfaces';
import { CommonErc20CoinInstance } from '../../../contracts/instances/BasicCoin/basic.coin.contract.instance';
import { COIN_ENUM } from '../constants/token-basic';
import { FalcoCoinUpdateOwnerFrom } from '../components/FalcoCoinContent/FalcoCoinUpdateOwnerFrom';
import { FalcoCoinFeeAddress } from '../components/FalcoCoinContent/FalcoCoinFeeAddress';
import { FalcoCoinFeeAddressUpdate } from '../components/FalcoCoinContent/FalcoCoinFeeAddressUpdate';
import { FeeTokenStandardUpdate } from '../components/FeeTokenStandardUpdate';
import { FeeUpdateFrom } from '../components/FalcoCoinContent/FeeUpdateFrom';

type ContractBasicContainerProps = {
  address: string,
  token: TOKEN_TYPE_ENUM
}

const ContractBasicContainer = ({ address, token }: ContractBasicContainerProps) => {
  const { t } = useTranslation('falcoCoin')

  return (
    <CoinProvider contractAddress={address as string} token={token} Instance={CommonErc20CoinInstance}>
      <ContainerPaper>
        <Section gap={{ xs: 1, md: 2 }}>
          <Typography variant="h1" mb={1} color={'primary'} fontWeight={800}>{t('details.title')}</Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={6}>
              <FalcoCoinName title={t('details.name')} contract={{
                args: [],
                Instance: CommonErc20CoinInstance,
                method: COIN_ENUM.NAME,
                address
              }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FalcoCoinSymbol title={t('details.symbol')} contract={{
                args: [],
                Instance: CommonErc20CoinInstance,
                method: COIN_ENUM.SYMBOL,
                address
              }} />
            </Grid>
            <Grid item xs={12}>
              <Stack gap={1}>
                <Section gap={2}>
                  <FalcoCoinOwner title={t('details.owner')} contract={{
                    args: [],
                    Instance: CommonErc20CoinInstance,
                    method: COIN_ENUM.OWNER,
                    address
                  }} />
                  <RenounceOwnershipForm title={t('details.renounceOwnership')} contract={{
                    args: [],
                    Instance: CommonErc20CoinInstance,
                    method: COIN_ENUM.OWNER,
                    address
                  }} />
                </Section>
                <FalcoCoinUpdateOwnerFrom contract={{
                  args: [],
                  Instance: CommonErc20CoinInstance,
                  method: COIN_ENUM.OWNER,
                  address
                }} />
                <Divider sx={{ mt: 2 }} flexItem />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack gap={1}>
                <Section gap={2}>
                  <FalcoCoinFeeAddress title={t('details.feeAddress')} contract={{
                    args: [],
                    Instance: CommonErc20CoinInstance,
                    method: COIN_ENUM.FEE_ADDRESS,
                    address
                  }} />
                </Section>
                <FalcoCoinFeeAddressUpdate contract={{
                  args: [],
                  Instance: CommonErc20CoinInstance,
                  method: COIN_ENUM.OWNER,
                  address
                }} />
                <Divider sx={{ mt: 2 }} flexItem />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack gap={1}>
                <Section gap={2}>
                  <FeeTokenStandardUpdate contract={{
                    args: [],
                    Instance: CommonErc20CoinInstance,
                    method: COIN_ENUM._TAX_FEE,
                    address
                  }} />
                </Section>
                <FeeUpdateFrom contract={{
                  args: [],
                  Instance: CommonErc20CoinInstance,
                  method: COIN_ENUM.OWNER,
                  address
                }} />
              </Stack>
            </Grid>
          </Grid>
        </Section>
      </ContainerPaper>
    </CoinProvider>
  );

}

export default memo(ContractBasicContainer);