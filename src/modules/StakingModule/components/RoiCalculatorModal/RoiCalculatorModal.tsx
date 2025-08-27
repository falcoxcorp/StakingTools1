import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Stack } from '@mui/material';
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import { Form } from '../../../../components/FormFields';
import { useRoiCalculator } from './useRoiCalculator';
import { TransTypography } from '../../../../components/TransTypography';
import BalanceInput from './BalanceInput';
import StakedForToggleButton from './StakedForToggleButton';
import RoiDetails from './RoiDetails';
import { ITokenInfo } from '../../interfaces/ISmartChef';
import { Close } from '@mui/icons-material';


type RoiCalculatorModalProps = {
  open: boolean,
  onClose: () => void
  stakedTokenInfo: ITokenInfo
  apy: number
}
const RoiCalculatorModal = ({ onClose, open, stakedTokenInfo, apy }: RoiCalculatorModalProps) => {
  const { t } = useTranslation('staking')
  const { control, balance, staked, reset, isOpen, onToggle } = useRoiCalculator()

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
        {t('apy.title')}
        <IconButton size='small' onClick={handleClose} sx={{ position: 'absolute', top: 16, right: 20 }}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="apy-dialog-description">
          <Form control={control}>
            <Stack gap={2}>
              <Stack gap={1}>
                <TransTypography textTransform={'uppercase'} message='staking:staked' values={{ symbol: stakedTokenInfo?.symbol }} />
                <BalanceInput name='balance' stakedTokenInfo={stakedTokenInfo} balance={balance} {...{ isOpen, onToggle }} />
              </Stack>
              <Stack gap={1}>
                <TransTypography textTransform={'uppercase'} message='staking:apy:stakedFor' />
                <StakedForToggleButton name='staked' />
              </Stack>
              <Stack gap={1}>
                <RoiDetails staked={staked} balance={balance} apy={apy / 100} stakedTokenInfo={stakedTokenInfo} isOpen={isOpen} />
              </Stack>
            </Stack>
          </Form>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );

}

export default memo(RoiCalculatorModal);