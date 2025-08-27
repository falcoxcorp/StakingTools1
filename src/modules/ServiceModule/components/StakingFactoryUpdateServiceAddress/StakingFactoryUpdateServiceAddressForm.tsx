import { memo } from 'react'
import { Grid, InputAdornment, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Form, FormTextField } from '../../../../components/FormFields';
import { LoadingButton } from '../../../../components/Buttons';
import { useStakingFactoryUpdateServiceAddressForm } from '../../hooks/set/useStakingFactoryUpdateServiceAddressForm';
import { Wallet } from '@mui/icons-material';

const ServiceUpdateFeeForm = ({ stakingFactoryAddress }: { stakingFactoryAddress: string }) => {
  const { t } = useTranslation('service')
  const { control, onSubmit, isLoading} = useStakingFactoryUpdateServiceAddressForm(stakingFactoryAddress)
  

  return (
    <Stack mt={3}>
      
      <Form control={control} id='newServiceAddress-form' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} >
            <FormTextField
              name="_newServiceAddress"
              label={t("form._newServiceAddress")}
              placeholder={t("form._newServiceAddress")}
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
                form='newServiceAddress-form'
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