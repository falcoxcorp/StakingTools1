import { Grid, InputAdornment, Stack } from '@mui/material';
import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { Form, FormTextField } from '../../../../../components/FormFields';
import { TransTypography } from '../../../../../components/TransTypography';
import { LoadingButton } from '../../../../../components/Buttons';
import { useStakingConfigContext } from '../../../context/StakingConfigContext';
import { useCallPoolLimitPerUser } from '../../../hooks/contract/useStakingCalls';
import { useCallNameAndSymbol } from '../../../hooks/contract/useTokenCalls';
import { useStakingUpdatePoolLimitPerUserForm } from '../../../hooks/contract/admin/useStakingUpdatePoolLimitPerUserForm';

const StakingUpdatePoolLimitPerUserForm = ({ stakedAddress }: { stakedAddress: string }) => {
  const { t } = useTranslation('staking')
  const { stakingAddressId } = useStakingConfigContext()
  const { control, onSubmit, isLoading } = useStakingUpdatePoolLimitPerUserForm(stakingAddressId)
  const { data } = useCallPoolLimitPerUser(stakingAddressId)
  const { data: tokenInfo } = useCallNameAndSymbol(stakedAddress)
  return (
    <Stack mt={3}>
      <Form control={control} id='update-pool-limit-per-block' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>

          <Grid item xs={12}>
            <FormTextField
              disabled={data === 0}
              name="amount"
              placeholder={t("form.amount")}
              helperText={<TransTypography message='staking:admin:updatePoolLimitPerUser:limit' values={{
                amount: data === 0 ? t('admin.updatePoolLimitPerUser.infinite') : data?.toFixed(2),
                symbol: data === 0 ? '' : tokenInfo?.symbol
              }} />}
              type="number"
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">{tokenInfo?.symbol}</InputAdornment>,
              }}
              inputProps={{
                min: 0,
                step: 1,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack gap={1} width={'100%'}>
              <LoadingButton
                disabled={data === 0}
                fullWidth
                size='large'
                type='submit'
                form='update-pool-limit-per-block'
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

export default memo(StakingUpdatePoolLimitPerUserForm);