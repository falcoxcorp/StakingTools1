import { LoadingButton } from '@mui/lab';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material';
import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { IStakingContractInfo, ITokenInfo } from '../../interfaces/ISmartChef';
import RewardDebtInfoModal from './RewardDebtInfoModal';
import { TransTypography } from '../../../../components/TransTypography';
import { useStakingWithdrawContract } from '../../hooks/contract/useStakingWithdrawContract';

type RewardDebtModalProps = {
  open: boolean
  onClose: () => void,
  item: IStakingContractInfo
  rewardToken: ITokenInfo | undefined
}

const RewardDebtModal = ({ open, onClose, item, rewardToken }: RewardDebtModalProps) => {
  const { t } = useTranslation('staking')

  const { withdraw, isLoading } = useStakingWithdrawContract({
    SPENDER_ADDRESS: item?.stakingContact
  })


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
        <TransTypography fontSize={22} fontWeight={800} message='staking:harvesting' values={{ symbol: rewardToken?.symbol }} />
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <RewardDebtInfoModal item={item} rewardToken={rewardToken} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Stack gap={1} width={'100%'}>
          <LoadingButton
            fullWidth
            size='large'
            onClick={async () => await withdraw(0)}
            form='stake-amount'
            autoFocus
            variant={"contained"}
            color={'error'}
            loading={isLoading}
          >
            {t("common:confirm")}
          </LoadingButton>
          <Button variant='outlined' size='large' fullWidth onClick={onClose}>  {t("common:cancel")}</Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );

}

export default memo(RewardDebtModal);