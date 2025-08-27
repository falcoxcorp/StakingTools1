import { memo, useMemo } from 'react'
import { Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Form, FormSwitchField, FormTextField } from '../../../../components/FormFields';
import { useServiceUpdateEtherPaymentForm } from '../../hooks/set/useServiceUpdateEtherPaymentForm';
import { ServiceSelectForm } from '../../../../components/ServiceSelectForm';
import { LoadingButton } from '@mui/lab';
import { TransTypography } from '../../../../components/TransTypography';
import { useEthers } from '@usedapp/core';
import { NETWORKS_STAKING_FACTORY_MAP } from '../../../../contracts/staking/staking.intance';

const ServiceUpdateEtherPaymentForm = ({ serviceAddress }: { serviceAddress: string }) => {
  const { t } = useTranslation('service')
  const { control, onSubmit, isLoading, getPayment } = useServiceUpdateEtherPaymentForm(serviceAddress)
  const { chainId } = useEthers()
  const network = useMemo(() => NETWORKS_STAKING_FACTORY_MAP[chainId as number], [NETWORKS_STAKING_FACTORY_MAP, chainId])

  return (
    <Stack mt={1}>
      <TransTypography pb={3} message='service:updateTokenPayment:getPayment' values={{ payment: getPayment ?? 0, symbol: network?.symbol }} />
      <Form control={control} id='update-service-form' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12}>
            <ServiceSelectForm
              name="service"
              label={t("form.service")}
              required
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
                form='update-service-form'
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

export default memo(ServiceUpdateEtherPaymentForm);