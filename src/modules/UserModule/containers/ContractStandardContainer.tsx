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
import { StandardCoinInstance } from '../../../contracts/instances/StandardCoin/standard.coin.contract.instance';
import { COIN_ENUM } from '../constants/token-basic';
import { FalcoCoinUpdateOwnerFrom } from '../components/FalcoCoinContent/FalcoCoinUpdateOwnerFrom';
import { StandardUpdateFeeForm } from '../components/FalcoCoinContent/StandardUpdateFeeForm';
import StandardUpdateAddressForm from '../components/FalcoCoinContent/StandardUpdateAddressForm/StandardUpdateAddressForm';
import { useStandardAddressUpdate } from '../hooks/standard/useStandardAddressUpdate';
import { useStandardAddressCall } from '../hooks/standard/useStandardAddressCall';
import { CoinTotalSupply } from '../components/FalcoCoinContent/CoinTotalSupply';

type ContractStandardContainerProps = {
  address: string,
  token: TOKEN_TYPE_ENUM
}

const ContractStandardContainer = ({ address, token }: ContractStandardContainerProps) => {
  const { t } = useTranslation('falcoCoin') 
  return (
    <CoinProvider contractAddress={address as string} token={token} Instance={StandardCoinInstance}>
      <ContainerPaper>
        <Section gap={{ xs: 1, md: 2 }}>
          <Typography variant="h1" mb={1} color={'primary'} fontWeight={800}>{t('details.title')}</Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={4}>
              <FalcoCoinName title={t('details.name')} contract={{
                args: [],
                Instance: StandardCoinInstance,
                method: COIN_ENUM.NAME,
                address
              }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FalcoCoinSymbol title={t('details.symbol')} contract={{
                args: [],
                Instance: StandardCoinInstance,
                method: COIN_ENUM.SYMBOL,
                address
              }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <CoinTotalSupply title={t('details.decimals')} decimals={0} contract={{
                args: [],
                Instance: StandardCoinInstance,
                method: COIN_ENUM.DECIMALS,
                address
              }} />
            </Grid>
            <Grid item xs={12}>
              <Stack gap={1}>
                <Section gap={2}>
                  <FalcoCoinOwner title={t('details.owner')} contract={{
                    args: [],
                    Instance: StandardCoinInstance,
                    method: COIN_ENUM.OWNER,
                    address
                  }} />
                  <RenounceOwnershipForm title={t('details.renounceOwnership')} contract={{
                    args: [],
                    Instance: StandardCoinInstance,
                    method: COIN_ENUM.OWNER,
                    address
                  }} />
                </Section>
                <FalcoCoinUpdateOwnerFrom contract={{
                  args: [],
                  Instance: StandardCoinInstance,
                  method: COIN_ENUM.OWNER,
                  address
                }} />
                <Divider sx={{ mt: 2 }} flexItem />
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <StandardUpdateFeeForm contract={{
                args: [],
                Instance: StandardCoinInstance,
                method: COIN_ENUM.SET_TAX_FEE_PERCENT,
                address
              }}
                methodCall={COIN_ENUM.TAX_FEE}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StandardUpdateFeeForm contract={{
                args: [],
                Instance: StandardCoinInstance,
                method: COIN_ENUM.SET_LIQUIDITY_FEE_PERCENT,
                address
              }}
                methodCall={COIN_ENUM.LIQUIDITY_FEE}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StandardUpdateFeeForm contract={{
                args: [],
                Instance: StandardCoinInstance,
                method: COIN_ENUM.SET_DEV_FEE_PERCENT,
                address
              }}
                methodCall={COIN_ENUM.DEV_FEE}
              />
            </Grid>

            {/*  <Grid item xs={12} md={6}>
              <StandardUpdateAmountForm contract={{
                args: [],
                Instance: StandardCoinInstance,
                method: COIN_ENUM.SET_MAX_TX_PERCENT,
                address
              }}
                methodCall={COIN_ENUM.MAX_TX_AMOUNT}                
                useHook={useStandardAmonutUpdate}
                useCallHook={useStandardAmountCall}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StandardUpdateAmountForm contract={{
                args: [],
                Instance: StandardCoinInstance,
                method: COIN_ENUM.SET_NUM_TOKENS_SELL_TO_ADD_TO_LIQUIDITY,
                address
              }}
                methodCall={COIN_ENUM.NUM_TOKENS_SELL_TO_ADD_TO_LIQUIDITY}                
                useHook={useStandardAmonutUpdate}
              />
            </Grid> */}
            <Grid item xs={12}>
              <StandardUpdateAddressForm contract={{
                args: [],
                Instance: StandardCoinInstance,
                method: COIN_ENUM.SET_DEV_WALLET_ADDRESS,
                address
              }}
                methodCall={COIN_ENUM.DEV_WALLET_ADDRESS}
                useHook={useStandardAddressUpdate}
                useCallHook={useStandardAddressCall}
              />
            </Grid>
            <Grid item xs={12}>
              <StandardUpdateAddressForm contract={{
                args: [],
                Instance: StandardCoinInstance,
                method: COIN_ENUM.SET_ROUTER_ADDRESS,
                address
              }}
                methodCall={COIN_ENUM.UNISWAP_V2_ROUTER}
                useHook={useStandardAddressUpdate}
                useCallHook={useStandardAddressCall}
              />
            </Grid>
          </Grid>
        </Section>
      </ContainerPaper>
    </CoinProvider>
  );

}

export default memo(ContractStandardContainer);