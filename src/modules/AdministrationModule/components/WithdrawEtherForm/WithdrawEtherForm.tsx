import { memo } from 'react'
import { Box, Grid, InputAdornment } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useWithdrawEtherForm } from '../../hooks/useWithdrawEtherForm';
import { Form, FormTextField } from '../../../../components/FormFields';
import { LoadingButton } from '../../../../components/Buttons';

const WithdrawEtherForm = () => {
  const { t } = useTranslation(['admin', 'common'])
  const { onSubmit, control, isLoading } = useWithdrawEtherForm()

  return (
    <Box sx={{ pt: 3 }}>
      <Form onSubmit={onSubmit} isLoading={isLoading} control={control}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12}>
            <FormTextField
              name='withdraw'
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
            <LoadingButton fullWidth loading={isLoading} type='submit' variant='contained' sx={{ marginLeft: 'auto' }}>
              {t('common:withdraw')}
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </Box>
  );

}

export default memo(WithdrawEtherForm);