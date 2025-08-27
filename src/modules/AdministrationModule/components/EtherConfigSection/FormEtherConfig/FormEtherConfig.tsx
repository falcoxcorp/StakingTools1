import { memo } from 'react'
import { Grid, InputAdornment, Stack } from '@mui/material';
import { useEtherConfigUpdateForm } from '../../../hooks/useEtherConfigUpdateForm';
import { Form, FormSwitchField, FormTextField } from '../../../../../components/FormFields';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../../../../components/Buttons';
import { FormEtherSummary } from '../FormEtherSummary';


const FormEtherConfig = () => {
  const { t } = useTranslation(['admin', 'common'])
  const { onSubmit, control, isLoading } = useEtherConfigUpdateForm()

  return (
    <Stack sx={{ pt: 3 }} gap={{ xs: 2, md: 4 }}>
      <FormEtherSummary />
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={6}>
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

          <Grid item xs={12} md={6}>
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

export default memo(FormEtherConfig);