import { memo } from 'react'
import { Form, FormSwitchField, FormTextField } from '../../../../components/FormFields';
import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type FromTokenConfigUpdateProps = {
  onSubmit: any
  control: any
  isLoading: boolean
}

const FromTokenConfigUpdate = ({ control, isLoading, onSubmit }: FromTokenConfigUpdateProps) => {
  const { t } = useTranslation('admin')
  return (
    <Box mt={4}>
      <Form onSubmit={onSubmit} control={control} id='form-update-token-config' isLoading={isLoading}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
         {/*  <Grid item xs={12}>
            <FromSelectTokenAddressPaid name='tokenAddress' label='Seleccione le token' excludeToken={[ADDRESS_TOKENS_BSC_ENUM.BNB]} />
          </Grid> */}
          <Grid item xs={12}>
            <FormTextField name='name' label={t('config.form.name')}
              placeholder={t('config.form.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              name='paymentAmount'
              label={t('config.form.paymentAmount')}
              placeholder={t('config.form.paymentAmount')}
              type='number'
              required
              inputProps={{
                min: 0,
                step: 1,
                inputMode: 'numeric', pattern: '[0-9]*'
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormSwitchField name='isActive' label={t('config.form.isActive')}
              placeholder={t('config.form.isActive')} />
          </Grid>
        </Grid>
      </Form>
    </Box>
  );

}

export default memo(FromTokenConfigUpdate);