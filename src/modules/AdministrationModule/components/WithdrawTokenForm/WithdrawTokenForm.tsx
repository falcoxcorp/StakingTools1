import { memo } from 'react'
import { Box, Grid, InputAdornment, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useWithdrawTokenForm } from '../../hooks/useWithdrawTokenForm';
import { Form, FormTextField } from '../../../../components/FormFields';
import { LoadingButton } from '../../../../components/Buttons';
import { FromSelectTokenAddressPaid } from '../../../CreateTokenModule/components/FromSelectTokenPaid';
import { useEthers } from '@usedapp/core';
import WithdrawTokenSummary from '../WithdrawTokenSummary/WithdrawTokenSummary';
import { useNetworkUtils } from '../../../../hooks/useNetworkUtils';
import { IToken } from '../../../../contracts/instances/interfaces';
import { CardSection } from '../CardSection';
import TranslationByStyled from '../../../../components/TranslationByStyled/TranslationByStyled';

const WithdrawTokenForm = () => {
  const { t } = useTranslation(['admin', 'common'])
  const { chainId } = useEthers()
  const { onSubmit, control, isLoading, tokenAddress } = useWithdrawTokenForm()
  const { getNetworkToken } = useNetworkUtils()
  const token = getNetworkToken(chainId as number, tokenAddress)

  return (
    <CardSection
      title={<TranslationByStyled message={'admin:ether:withdrawEther:title'} values={{ crypto: token?.name }} />}
      subtitle={<TranslationByStyled message={'admin:ether:withdrawEther:subtitle'} values={{ crypto: token?.name }} />}
    >

      <Stack pt={1} gap={1}>
        <WithdrawTokenSummary token={token as IToken} />
        <Box sx={{ pt: 3 }}>
          <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12}>
                <FromSelectTokenAddressPaid name='tokenAddress' label={t('selectTokenAddress')} required chainId={chainId as number} />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  name='withdraw'
                  disabled={!tokenAddress}
                  label={t('ether.withdraw')}
                  placeholder={t('ether.withdraw')}
                  type='number'
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        $
                      </InputAdornment>
                    )
                  }}
                  inputProps={{
                    min: 0,
                    step: 0.0001,
                    inputMode: 'numeric',
                    pattern: '[0-9]+(.[0-9]+)?'
                  }}
                />
              </Grid>

              <Grid item xs={12} width={'100%'}>
                <LoadingButton disabled={!tokenAddress} fullWidth loading={isLoading} type='submit' variant='contained' sx={{ marginLeft: 'auto' }}>
                  {t('common:withdraw')}
                </LoadingButton>
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Stack>
    </CardSection>
  );

}

export default memo(WithdrawTokenForm);