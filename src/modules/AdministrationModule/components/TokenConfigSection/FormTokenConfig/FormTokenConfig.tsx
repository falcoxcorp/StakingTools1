import { memo } from 'react'
import { useEthers } from '@usedapp/core';
import { Divider, Grid, InputAdornment, Stack } from '@mui/material';
import { Form, FormSwitchField, FormTextField } from '../../../../../components/FormFields';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../../../../components/Buttons';
import { FromSelectTokenAddressPaid } from '../../../../CreateTokenModule/components/FromSelectTokenPaid';
import { useTokenConfigUpdateForm } from '../../../hooks/useTokenConfigUpdateForm';
import { FormTokenSummary } from '../FormTokenSummary';


const FormTokenConfig = () => {
  const { t } = useTranslation(['admin', 'common'])
  const { chainId } = useEthers()
  const { onSubmit, control, isLoading, tokenAddress } = useTokenConfigUpdateForm()

  return (
    <Stack sx={{ pt: 3 }} gap={{ xs: 2, md: 4 }}>
      <FormTokenSummary tokenAddress={tokenAddress} />
      <Divider flexItem />
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12}>
            <FromSelectTokenAddressPaid name='tokenAddress' label={t('selectTokenAddress')} required chainId={chainId as number} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormTextField
              name='name'
              label={t('config.form.name')}
              placeholder={t('config.form.name')}
              type='text'
              required
              readOnly
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormTextField
              name='paymentAmount'
              label={t('etherConfig.paymentAmount')}
              placeholder={t('etherConfig.paymentAmount')}
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
                //pattern: '[0-9]*'
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FormSwitchField
              name='isActive'
              label={t('etherConfig.isActive')}              
            />
          </Grid>

          <Grid item xs={12} width={'100%'}>
            <LoadingButton fullWidth loading={isLoading} type='submit' variant='contained' sx={{ marginLeft: 'auto' }}>
              {t('common:update')}
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </Stack>
  );

}

export default memo(FormTokenConfig);