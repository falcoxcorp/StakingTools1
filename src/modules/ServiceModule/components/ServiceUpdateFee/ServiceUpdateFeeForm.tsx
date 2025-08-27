import { memo } from 'react'
import { Chip, Divider, Grid, InputAdornment, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useServiceUpdateFeeForm } from '../../hooks/set/useServiceUpdateFeeForm';
import { Form, FormTextField } from '../../../../components/FormFields';
import { LoadingButton } from '../../../../components/Buttons';

const ServiceUpdateFeeForm = ({ serviceAddress }: { serviceAddress: string }) => {
  const { t } = useTranslation('service')
  const { control, onSubmit, isLoading, fee } = useServiceUpdateFeeForm(serviceAddress)

  return (
    <Stack mt={1} gap={4}>
      <Stack gap={1} flexDirection={'row'} flexWrap={'wrap'} divider={<Divider orientation='vertical' flexItem />}>
        <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
          <Typography variant="h1" color="primary">{t('form.developer')}</Typography>
          <Chip label={fee?.developer} />
        </Stack>
        <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
          <Typography variant="h1" color="primary">{t('form.marketing')}</Typography>
          <Chip label={fee?.marketing} />
        </Stack>
        <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
          <Typography variant="h1" color="primary">{t('form.admin')}</Typography>
          <Chip label={fee?.admin} />
        </Stack>
      </Stack>
      <Form control={control} id='fee-form' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12}>
            <FormTextField
              name="fee.developer"
              label={t("form.developer")}
              placeholder={t("form.developer")}
              type="number"
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              inputProps={{
                min: 0,
                max: 100,
                step: 1,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              name="fee.marketing"
              label={t("form.marketing")}
              placeholder={t("form.marketing")}
              type="number"
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              inputProps={{
                min: 0,
                max: 100,
                step: 1,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              name="fee.admin"
              label={t("form.admin")}
              placeholder={t("form.admin")}
              type="number"
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              inputProps={{
                min: 0,
                max: 100,
                step: 1,
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
                form='fee-form'
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

export default memo(ServiceUpdateFeeForm);