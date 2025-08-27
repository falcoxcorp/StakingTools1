import { LoadingButton } from '@mui/lab';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { IStakingContractInfo, ITokenInfo } from '../../../interfaces/ISmartChef';
import TokenAvatarSymbol from '../../TokenInfo/TokenAvatarSymbol';
import { Form, FormTextField } from '../../../../../components/FormFields';
import { TransTypography } from '../../../../../components/TransTypography';
import AmountToggleButton from './AmountToggleButton';
import { useWithdrawStakingForm } from '../../../hooks/useWithdrawStakingForm';
import { Close, Info} from '@mui/icons-material';
import { CustomTooltip } from '../../../../../components/styled/tooltip';

type StakingWithdrawModalProps = {
  open: boolean
  onClose: () => void,
  item: IStakingContractInfo
  stakedTokenInfo: ITokenInfo
}

const StakingWithdrawModal = ({ open, onClose, item, stakedTokenInfo }: StakingWithdrawModalProps) => {
  const { t } = useTranslation('staking')
  const { balance, amount, control, onSubmit, isLoading, onEmergencyWithdraw } = useWithdrawStakingForm(item?.stakingContact)
  const balanceUSD = useMemo(() => stakedTokenInfo?.price ? Number(balance * stakedTokenInfo?.price).toFixed(2) : 0, [stakedTokenInfo, balance])

  return (
    <Dialog
      open={open}
      // onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth='xs'
    >
      <DialogTitle id="alert-dialog-title">
        {t('stake.withdraw.title')}
        <IconButton size='small' onClick={onClose} sx={{ position: 'absolute', top: 16, right: 20 }}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Form control={control} id='withdraw-amount' onSubmit={onSubmit}>
            <Grid container spacing={{ xs: 2, md: 4 }}>

              <Grid item xs={12}>
                <Stack flexDirection={'row'} justifyContent={'space-between'}>
                  <Typography variant="h1" color="primary.main">{t('staking:withdraw')}</Typography>
                  <TokenAvatarSymbol token={stakedTokenInfo} />
                </Stack>
                <FormTextField
                  name="amount"
                  // label={t("form.amount")}
                  placeholder={t("form.amount")}
                  helperText={<TransTypography message='staking:stake:modal:balance' values={{
                    balance: balance.toFixed(2),
                    balanceUSD,
                    symbol: stakedTokenInfo?.symbol
                  }} />}
                  type="number"
                  required
                  InputProps={{
                    endAdornment: <InputAdornment position="end">{stakedTokenInfo?.symbol}</InputAdornment>,
                  }}
                  inputProps={{
                    min: 0,
                    step: 0.00000000000000000001,
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <AmountToggleButton amount={amount} balance={balance} name='amount' />
              </Grid>
            </Grid>

          </Form>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Stack gap={1} width={'100%'}>
          <LoadingButton
            fullWidth
            size='large'
            type='submit'
            form='withdraw-amount'
            autoFocus
            variant={"contained"}
            color={'error'}
            loading={isLoading}
          >
            {t("common:confirm")}
          </LoadingButton>
          <Button variant='outlined' size='large' fullWidth onClick={onClose}>  {t("common:cancel")}</Button>
          <Divider sx={{ mt: 2 }} />
          <CustomTooltip placement='top-start' title={<TransTypography sx={{ padding: 1 }} message='staking:emergencyWithdrawNote' />}>
            <Stack gap={1} alignItems={'center'} flexDirection={'row'}>
              <Info fontSize='small' />
              <Typography>{t('common:note')}</Typography>
            </Stack>
          </CustomTooltip>
          <LoadingButton
            fullWidth
            size='large'
            form='withdraw-amount'
            autoFocus
            variant={"outlined"}
            color={'error'}
            loading={isLoading}
            onClick={onEmergencyWithdraw}
          >
            {t("staking:emergencyWithdraw")}
          </LoadingButton>
        </Stack>
      </DialogActions>
    </Dialog>
  );

}

export default memo(StakingWithdrawModal);