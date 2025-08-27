import { memo } from 'react'
import { Divider, Grid, InputAdornment, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Form, FormTextField } from '../../../../components/FormFields';
import { LoadingButton } from '../../../../components/Buttons';
import { useServiceUpdateAdminWalletForm } from '../../hooks/set/useServiceUpdateAdminWalletForm';
import { Wallet } from '@mui/icons-material';
import ParserWallet from '../../../../components/ParserWallet/ParserWallet';

const ServiceUpdateAdminWalletForm = ({ serviceAddress }: { serviceAddress: string }) => {
  const { t } = useTranslation('service')
  const { control, onSubmit, isLoading, wallet } = useServiceUpdateAdminWalletForm(serviceAddress)


  return (
    <Stack mt={1} gap={4}>
      <Stack gap={1} flexDirection={'row'} flexWrap={'wrap'} divider={<Divider orientation='vertical' flexItem />}>
        <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
          <Typography variant="h1" color="primary">{t('form.developer')}</Typography>
          {wallet?.developer &&
            <ParserWallet address={wallet?.developer || ''} />
          }
        </Stack>
        <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
          <Typography variant="h1" color="primary">{t('form.marketing')}</Typography>
          {wallet?.marketing &&
            <ParserWallet address={wallet?.marketing || ''} />
          }
        </Stack>
        <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
          <Typography variant="h1" color="primary">{t('form.admin')}</Typography>
          {wallet?.admin &&
            <ParserWallet address={wallet?.admin || ''} />
          }
        </Stack>
      </Stack>
      <Form control={control} id='admin-wallet-form' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12}>
            <FormTextField
              name="wallet.developer"
              label={t("form.developer")}
              placeholder={t("form.developer")}
              required
              InputProps={{
                endAdornment: <InputAdornment position="end"><Wallet /></InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              name="wallet.marketing"
              label={t("form.marketing")}
              placeholder={t("form.marketing")}
              required
              InputProps={{
                endAdornment: <InputAdornment position="end"><Wallet /></InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12} >
            <FormTextField
              name="wallet.admin"
              label={t("form.admin")}
              placeholder={t("form.admin")}
              required
              InputProps={{
                endAdornment: <InputAdornment position="end"><Wallet /></InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Stack gap={1} width={'100%'}>
              <LoadingButton
                fullWidth
                size='large'
                type='submit'
                form='admin-wallet-form'
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

export default memo(ServiceUpdateAdminWalletForm);