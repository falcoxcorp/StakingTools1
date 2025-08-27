import { Grid, InputAdornment, Stack } from '@mui/material';
import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { Form, FormTextField } from '../../../../../components/FormFields';
import { TransTypography } from '../../../../../components/TransTypography';
import { LoadingButton } from '../../../../../components/Buttons';
import { useStakingConfigContext } from '../../../context/StakingConfigContext';
import { useStakingUpdateRewardPerBlockForm } from '../../../hooks/contract/admin/useStakingUpdateRewardPerBlockForm';
import { useCallRewardPerBlock } from '../../../hooks/contract/useStakingCalls';
import { useCallNameAndSymbol } from '../../../hooks/contract/useTokenCalls';

const StakingUpdateRewardPerBlockForm = ({ rewardAddress }: { rewardAddress: string }) => {
  const { t } = useTranslation('staking')
  const { stakingAddressId } = useStakingConfigContext()
  const { control, onSubmit, isLoading } = useStakingUpdateRewardPerBlockForm(stakingAddressId)
  const { data } = useCallRewardPerBlock(stakingAddressId)
  const { data: tokenInfo } = useCallNameAndSymbol(rewardAddress)
  return (
    <Stack mt={3}>
      <Form control={control} id='update-reward-per-block' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>

          <Grid item xs={12}>
            <FormTextField
              name="amount"
              placeholder={t("form.amount")}
              helperText={<TransTypography message='staking:admin:updateRewardPerBlock:reward' values={{
                amount: data?.toFixed(2),
                symbol: tokenInfo?.symbol
              }} />}
              type="number"
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">{tokenInfo?.symbol}</InputAdornment>,
              }}
              inputProps={{
                min: 0,
                step: 0.00000000001,
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
                form='update-reward-per-block'
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

export default memo(StakingUpdateRewardPerBlockForm);