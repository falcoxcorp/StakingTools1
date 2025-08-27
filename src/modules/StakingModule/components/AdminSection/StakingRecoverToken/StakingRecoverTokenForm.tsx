import { Grid, Stack } from '@mui/material';
import { memo } from 'react'
import { useStakingRecoverTokenForm } from '../../../hooks/contract/admin/useStakingRecoverTokenForm';
import { useTranslation } from 'react-i18next';
import { Form, FormTextField } from '../../../../../components/FormFields';
import { TransTypography } from '../../../../../components/TransTypography';
import { LoadingButton } from '../../../../../components/Buttons';
import { useStakingConfigContext } from '../../../context/StakingConfigContext';

const StakingRecoverTokenForm = () => {
  const { t } = useTranslation('staking')
  const { stakingAddressId } = useStakingConfigContext()
  const { control, onSubmit, isLoading } = useStakingRecoverTokenForm(stakingAddressId)

  return (
    <Stack mt={3}>
      <Form control={control} id='recover-token' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>

          <Grid item xs={12}>
            <FormTextField
              name="token"
              placeholder={t("form.token")}
              helperText={<TransTypography message='staking:admin:recoverToken:helperText' />}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Stack gap={1} width={'100%'}>
              <LoadingButton
                fullWidth
                size='large'
                type='submit'
                form='recover-token'
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

export default memo(StakingRecoverTokenForm);