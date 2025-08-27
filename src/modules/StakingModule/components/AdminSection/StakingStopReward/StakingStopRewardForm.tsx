import { memo } from 'react'
import { Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Form } from '../../../../../components/FormFields';
import { LoadingButton } from '../../../../../components/Buttons';
import { useStakingConfigContext } from '../../../context/StakingConfigContext';
import { useStakingStopRewardForm } from '../../../hooks/contract/admin/useStakingStopRewardForm';

const StakingStopRewardForm = () => {
  const { t } = useTranslation('staking')
  const { stakingAddressId } = useStakingConfigContext()
  const { control, onSubmit, isLoading } = useStakingStopRewardForm(stakingAddressId)

  return (
    <Stack mt={3}>
      <Form control={control} id='stop-reward-withdraw' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12}>
            <Stack gap={1} width={'100%'}>
              <LoadingButton
                fullWidth
                size='large'
                type='submit'
                form='stop-reward-withdraw'
                variant={"contained"}
                color={'error'}
                loading={isLoading}
              >
                {t("staking:admin:stopReward:action")}
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>

      </Form>
    </Stack>
  );

}

export default memo(StakingStopRewardForm);