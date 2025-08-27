import { Grid, InputAdornment, Stack } from '@mui/material';
import { memo } from 'react'
import { useStakingEmergencyRewardWithdrawForm } from '../../../hooks/contract/admin/useStakingEmergencyRewardWithdrawForm';
import { useTranslation } from 'react-i18next';
import { Form, FormTextField } from '../../../../../components/FormFields';
import { TransTypography } from '../../../../../components/TransTypography';
import { LoadingButton } from '../../../../../components/Buttons';
import { useStakingConfigContext } from '../../../context/StakingConfigContext';
import { useCallNameAndSymbol } from '../../../hooks/contract/useTokenCalls';

const StakingEmergencyRewardWithdrawForm = ({ rewardAddress, stakedAddress }: { rewardAddress: string, stakedAddress: string }) => {
  const { t } = useTranslation('staking')
  const { stakingAddressId } = useStakingConfigContext()
  const { balance, control, onSubmit, isLoading } = useStakingEmergencyRewardWithdrawForm(stakingAddressId, rewardAddress, stakedAddress)
  const { data } = useCallNameAndSymbol(rewardAddress)

  return (
    <Stack mt={3}>
      <Form control={control} id='emergency-reward-withdraw' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>

          <Grid item xs={12}>
            <FormTextField
              name="amount"
              placeholder={t("form.amount")}
              helperText={<TransTypography message='staking:admin:balance' values={{
                balance: balance.toFixed(2),
                symbol: data?.symbol
              }} />}
              type="number"
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">{data?.symbol}</InputAdornment>,
              }}
              inputProps={{
                min: 0,
                step: 0.00000000000000000000000000001,
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
                form='emergency-reward-withdraw'
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

export default memo(StakingEmergencyRewardWithdrawForm);