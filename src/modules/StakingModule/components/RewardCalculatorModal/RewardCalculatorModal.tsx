import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { Form } from '../../../../components/FormFields';
import { useRewardCalculator } from './useRewardCalculator';
import { TransTypography } from '../../../../components/TransTypography';
import BalanceInput from './BalanceInput';
import { Close } from '@mui/icons-material';
import { getBlockBetweenStartAndEnd } from '../../../../utils/block-time';
import { useEthers } from '@usedapp/core';
import { StackItem } from '../../../../components/StackItem';
import { DateValue } from '../../../../components/Data';


type RewardCalculatorModalProps = {
  open: boolean,
  onClose: () => void
  startBlock: Date
  bonusEndBlock: Date
}
const RewardCalculatorModal = ({ onClose, open, bonusEndBlock, startBlock }: RewardCalculatorModalProps) => {
  const { t } = useTranslation('staking')
  const { chainId } = useEthers()
  const { control, balance, reset, isOpen, onToggle } = useRewardCalculator()
  const blocks = useMemo(() => getBlockBetweenStartAndEnd(startBlock, bonusEndBlock, chainId as number), [getBlockBetweenStartAndEnd, startBlock, bonusEndBlock])

  const reward = useMemo(() => {
    const reward = isOpen ? (balance * blocks) : (balance / blocks)
    return reward

  }, [balance, blocks])

  const handleClose = useCallback(() => {
    onClose()
    reset()
  }, [reset, onClose])

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="apy-dialog"
      aria-describedby="apy-dialog-description"
      fullWidth
      maxWidth='xs'
    >
      <DialogTitle id="apy-dialog">
        {t('staking:rewardCalculate')}
        <IconButton size='small' onClick={handleClose} sx={{ position: 'absolute', top: 16, right: 20 }}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="apy-dialog-description">
          <Form control={control}>
            <Stack gap={2}>
              <Stack gap={1} sx={{
                padding: 1,
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius:1
              }}>
                <StackItem title={t('form.startBlock')} data={<Typography sx={{ color: 'primary.main' }}><DateValue value={startBlock} /></Typography>} />
                <StackItem title={t('form.bonusEndBlock')} data={<Typography sx={{ color: 'primary.main' }}><DateValue value={bonusEndBlock} /></Typography>} />
                <StackItem title={t('totalBlock')} data={<Typography sx={{ color: 'primary.main' }}>{blocks}</Typography>} />
              </Stack>
              <Stack gap={1}>
                <TransTypography textTransform={'uppercase'} message='staking:rewardCalculate' />
                <BalanceInput name='balance' balance={reward} {...{ isOpen, onToggle }} />
              </Stack>
            </Stack>
          </Form>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );

}

export default memo(RewardCalculatorModal);