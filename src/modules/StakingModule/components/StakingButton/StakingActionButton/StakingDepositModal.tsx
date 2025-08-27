import { LoadingButton } from '@mui/lab';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { IStakingContractInfo, ITokenInfo } from '../../../interfaces/ISmartChef';
import TokenAvatarSymbol from '../../TokenInfo/TokenAvatarSymbol';
import { Form, FormTextField } from '../../../../../components/FormFields';
import { TransTypography } from '../../../../../components/TransTypography';
import AmountToggleButton from './AmountToggleButton';
import { useDepositStakingForm } from '../../../hooks/useDepositStakingForm';
import { useEnabledContract } from '../../../hooks/contract/useEnabledContract';
import { Close } from '@mui/icons-material';

type StakingDepositModalProps = {
  open: boolean
  onClose: () => void,
  item: IStakingContractInfo
  stakedTokenInfo: ITokenInfo
}

const StakingDepositModal = ({ open, onClose, item, stakedTokenInfo }: StakingDepositModalProps) => {
  const { t } = useTranslation('staking')
  const { allowance, approve, isLoading: isApproveLoading } = useEnabledContract({
    SPENDER_ADDRESS: item?.stakingContact,
    TOKEN_ADDRESS: item?.stakedToken?.toLowerCase()
  })
  const { balance, amount, control, onSubmit, isLoading } = useDepositStakingForm(item?.stakedToken?.toLowerCase(), item?.stakingContact)
  const balanceUSD = useMemo(() => stakedTokenInfo?.price ? Number(balance * stakedTokenInfo?.price).toFixed(2) : 0, [stakedTokenInfo, balance])
  const isNotAllowance = useMemo(() => (allowance ?? 0) - amount, [allowance, amount])

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
        {t('stake.modal.title')}
        <IconButton size='small' onClick={onClose} sx={{ position: 'absolute', top: 16, right: 20 }}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Form control={control} id='stake-amount' onSubmit={onSubmit}>
            <Grid container spacing={{ xs: 2, md: 4 }}>

              <Grid item xs={12}>
                <Stack flexDirection={'row'} justifyContent={'space-between'}>
                  <Typography variant="h1" color="primary.main">{t('common:stake')}</Typography>
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
                    step: 1,
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
          {
            isNotAllowance < 0 ? <LoadingButton color='error' loading={isApproveLoading} fullWidth variant='outlined' size='large' onClick={async () => {
              approve(amount)
            }}>
              {t('common:enabledStaking')}
            </LoadingButton> :
              <LoadingButton
                fullWidth
                size='large'
                type='submit'
                form='stake-amount'
                autoFocus
                variant={"contained"}
                color={'error'}
                loading={isLoading}
              >
                {t("common:confirm")}
              </LoadingButton>
          }
          <Button variant='outlined' size='large' fullWidth onClick={onClose}>  {t("common:cancel")}</Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );

}

export default memo(StakingDepositModal);