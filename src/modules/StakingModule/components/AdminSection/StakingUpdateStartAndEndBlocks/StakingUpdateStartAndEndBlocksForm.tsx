import { Grid, Stack } from '@mui/material';
import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { Form, FormDatePickerField } from '../../../../../components/FormFields';
import { LoadingButton } from '../../../../../components/Buttons';
import { useStakingConfigContext } from '../../../context/StakingConfigContext';
import { useStakingUpdateStartAndEndBlocksForm } from '../../../hooks/contract/admin/useStakingUpdateStartAndEndBlocksForm';

const StakingUpdateStartAndEndBlocksForm = () => {
  const { t } = useTranslation('staking')
  const { stakingAddressId } = useStakingConfigContext()
  const { control, onSubmit, isLoading } = useStakingUpdateStartAndEndBlocksForm(stakingAddressId)

  return (
    <Stack mt={3}>
      <Form control={control} id='update-start-and-end-block' onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={6}>
            <FormDatePickerField fullWidth name="startBlock" label={t("form.startBlock")} minDate={new Date()} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormDatePickerField fullWidth name="bonusEndBlock" label={t("form.bonusEndBlock")} minDate={new Date()} />
          </Grid>
          <Grid item xs={12}>
            <Stack gap={1} width={'100%'}>
              <LoadingButton
                fullWidth
                size='large'
                type='submit'
                form='update-start-and-end-block'
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

export default memo(StakingUpdateStartAndEndBlocksForm);