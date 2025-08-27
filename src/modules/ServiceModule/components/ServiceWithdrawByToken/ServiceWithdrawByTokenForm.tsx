import { memo } from 'react'
import { Grid, InputAdornment, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Form, FormTextField } from '../../../../components/FormFields';
import { LoadingButton } from '../../../../components/Buttons';
import FromAutoSelectTokenAddressPaid from '../../../CreateTokenModule/components/FromSelectTokenPaid/FromAutoSelectTokenAddressPaid';
import { useEthers } from '@usedapp/core';
import { useServiceWithdrawByTokenForm } from '../../hooks/set/useServiceWithdrawByTokenForm';
import { TransTypography } from '../../../../components/TransTypography';

const ServiceWithdrawByTokenForm = ({ serviceAddress }: { serviceAddress: string }) => {
  const { t } = useTranslation('service')
  const { control, onSubmit, isLoading, balance } = useServiceWithdrawByTokenForm(serviceAddress)
  const { chainId } = useEthers()
  return (
    <Stack mt={1} gap={4}>
      <Stack>
        <TransTypography message='service:balance' values={{ balance: balance ?? 0 }} />
      </Stack>
      <Form control={control} id='withdraw-token-form' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
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
              name="amount"
              label={t("form.amount")}
              placeholder={t("form.amount")}
              type="number"
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              inputProps={{
                min: 0,
                step: 0.0000000000000001,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
            />
          </Grid>


          <Grid item xs={12}>
            <Stack gap={1} width={'100%'}>
              <LoadingButton
                fullWidth
                size='large'
                type='submit'
                form='withdraw-token-form'
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

export default memo(ServiceWithdrawByTokenForm);