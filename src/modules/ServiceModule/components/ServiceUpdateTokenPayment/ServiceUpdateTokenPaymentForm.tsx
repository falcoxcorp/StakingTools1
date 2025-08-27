import { memo } from 'react'
import { Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Form, FormSwitchField, FormTextField } from '../../../../components/FormFields';
import { ServiceSelectForm } from '../../../../components/ServiceSelectForm';
import { LoadingButton } from '@mui/lab';
import { useServiceUpdateTokenPaymentForm } from '../../hooks/set/useServiceUpdateTokenPaymentForm';
import FromAutoSelectTokenAddressPaid from '../../../CreateTokenModule/components/FromSelectTokenPaid/FromAutoSelectTokenAddressPaid';
import { useEthers } from '@usedapp/core';
import { TransTypography } from '../../../../components/TransTypography';

const ServiceUpdateTokenPaymentForm = ({ serviceAddress }: { serviceAddress: string }) => {
  const { t } = useTranslation('service')
  const { control, onSubmit, isLoading, getPayment, tokenAddress } = useServiceUpdateTokenPaymentForm(serviceAddress)
  const { chainId } = useEthers()

  return (
    <Stack mt={1}>
      <TransTypography pb={3} message='service:updateTokenPayment:getPayment' values={{ payment: getPayment ?? 0, symbol: tokenAddress?.name }} />
      <Form control={control} id='update-service-token-form' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12}>
            <ServiceSelectForm
              name="service"
              label={t("form.service")}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FromAutoSelectTokenAddressPaid
              name="tokenAddress"
              label={t("form.tokenAddress")}
              readOnly={!chainId}
              required
              chainId={chainId as number}
            />
          </Grid>

          <Grid item xs={12}>
            <FormTextField
              name="payment"
              label={t("form.payment")}
              placeholder={t("form.payment")}
              type="number"
              required
              inputProps={{
                min: 0,
                step: 0.000000001,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormSwitchField name='active' label={t('form.active')} />
          </Grid>
          <Grid item xs={12}>
            <Stack gap={1} width={'100%'}>
              <LoadingButton
                fullWidth
                size='large'
                type='submit'
                form='update-service-token-form'
                variant={"contained"}
                loading={isLoading}
              >
                {t("common:confirm")}
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>

      </Form>
    </Stack>
  );

}

export default memo(ServiceUpdateTokenPaymentForm);