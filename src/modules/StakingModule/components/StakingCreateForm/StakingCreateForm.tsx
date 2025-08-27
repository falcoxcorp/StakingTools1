import { Button, Divider, Grid, InputAdornment, Stack } from "@mui/material";
import { memo, useCallback } from "react";
import { SecurityPoliticCheckBox } from "../../../CreateTokenModule/components/SecurityPoliticCheckBox";
import AlertNote from "../../../../components/AlertNote/AlertNote";
import {
  FormDatePickerField,
  FormSwitchField,
  FormTextField,
} from "../../../../components/FormFields";
import { useTranslation } from "react-i18next";
import { RewardCalculatorModal } from "../RewardCalculatorModal";
import useToggle from "../../../../common/hooks/useToggle";
import FromAutoSelectTokenAddressPaid from "../../../CreateTokenModule/components/FromSelectTokenPaid/FromAutoSelectTokenAddressPaid";
import { useNavigate } from "react-router-dom";

type StakingCreateFormProps = {
  paidByToken: boolean;
  chainId: number;
  activeLimitUser: boolean
  startBlock: Date | undefined
  bonusEndBlock: Date | undefined
};

const StakingCreateForm = ({
  paidByToken,
  chainId,
  activeLimitUser,
  bonusEndBlock, startBlock
}: StakingCreateFormProps) => {
  const { t } = useTranslation("staking");
  const navigate = useNavigate()

  const { isOpen, onClose, onOpen } = useToggle(false)

  const onCreateToken = useCallback(() => navigate('/create_token/STANDARD'), [navigate])

  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={12} md={6}>
        <Stack gap={1} direction={'row'}>
          <FormTextField
            name="stakedToken"
            label={t("form.stakedToken")}
            required
          />
          <Button onClick={onCreateToken} sx={{ width: 180 }} variant="outlined">{t('createToken:create')}</Button>
        </Stack>

      </Grid>
      <Grid item xs={12} md={6}>
      <Stack gap={1} direction={'row'}>
        <FormTextField
          name="rewardToken"
          label={t("form.rewardToken")}
          required
        />
          <Button onClick={onCreateToken} sx={{ width: 180 }} variant="outlined">{t('createToken:create')}</Button>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>

        <FormDatePickerField fullWidth name="startBlock" label={t("form.startBlock")} minDate={new Date()} />

      </Grid>
      <Grid item xs={12} md={6}>
        <FormDatePickerField fullWidth name="bonusEndBlock" label={t("form.bonusEndBlock")} minDate={new Date()} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack gap={1} flexDirection={'row'}>
          <FormTextField
            name="rewardPerBlock"
            label={t("form.rewardPerBlock")}
            placeholder={t("form.rewardPerBlock")}
            type="number"
            required
            InputProps={{
              endAdornment: <InputAdornment position="end">U</InputAdornment>,
            }}
            inputProps={{
              min: 0,
              step: 0.0000000000000000000000000001,
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
          <Button onClick={onOpen} variant="outlined">{t('calculate')}</Button>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          name="poolLimitPerUser"
          label={t("form.poolLimitPerUser.label")}
          placeholder={t("form.poolLimitPerUser.label")}
          helperText={t("form.poolLimitPerUser.helperText")}
          type="number"
          required
          InputProps={{
            endAdornment: <InputAdornment position="end">U</InputAdornment>,
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
        <FormSwitchField sx={{ mb: 1 }} label={t('form.numberBlocksForUserLimit.active')} name='numberBlocksForUserLimit.active' />
        <FormDatePickerField
          fullWidth
          disabled={!activeLimitUser}
          name="numberBlocksForUserLimit.date"
          label={t("form.numberBlocksForUserLimit.title")}
          placeholder={t("form.numberBlocksForUserLimit.title")}
          helperText={t("form.numberBlocksForUserLimit.helperText")}
          minDate={new Date()}
        />
      </Grid>

      <Grid item xs={12}>
        <FormSwitchField name="paidByToken" label={t("paidByToken")} />
      </Grid>

      {paidByToken && (
        <Grid item xs={12}>
          <FromAutoSelectTokenAddressPaid
            name="tokenAddress"
            label={t("tokenAddress")}
            required
            chainId={chainId as number}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <Divider flexItem sx={{ mb: 2 }} />
        <AlertNote note={t("notes.audit")} />
        <AlertNote note={t("notes.note_creation")} severity="warning" />
      </Grid>

      <Grid item xs={12}>
        <SecurityPoliticCheckBox name="isVerify" />
      </Grid>
      <RewardCalculatorModal bonusEndBlock={bonusEndBlock as Date} startBlock={startBlock as Date} onClose={onClose} open={isOpen} />
    </Grid>
  );
};

export default memo(StakingCreateForm);
