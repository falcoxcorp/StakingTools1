import { Box, Button, Divider, Stack } from '@mui/material';
import { useEthers } from '@usedapp/core';
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next';

type CreateTokenStepperActionsProps = {
  handleBack: any,
  activeStep: number
  chainId: number
  paymentAmount: number
  status: string
  isVerify: boolean | undefined
  form: string
}
const CreateTokenStepperActions = ({ handleBack, activeStep, chainId, paymentAmount, status, isVerify, form = 'create-token-standard-form' }: CreateTokenStepperActionsProps) => {
  const { t } = useTranslation('erc20')
  const { chainId: _chainId, account } = useEthers()
  const isChain = useMemo(() => chainId !== _chainId, [_chainId, chainId])
  const isSVerify = useMemo(() => !isVerify && activeStep === 1, [isVerify, activeStep])
  const loading = ["loading", "error", "success"]

  return (
    <Stack gap={2}>
      <Divider sx={{ mt: 4 }} />
      <Stack gap={2} flexDirection={{ xs: 'column', md: 'row' }} >
        <Button
          variant='contained'
          fullWidth
          disabled={activeStep === 0 || loading.includes(status) || !account}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          {t('actions.back')}
        </Button>
        <Box sx={{ flex: '1 1 auto', display: { xs: 'none', md: 'block' } }} />
        <Button
          fullWidth
          variant='contained'
          disabled={activeStep === 2 || isChain || !account || isSVerify}
          sx={{ mr: 1 }}
          type='submit'
          form={form}>
          {t('actions.next')}
        </Button>
        <Button
          fullWidth
          variant='contained'
          disabled={activeStep != 2 || paymentAmount === 0 || loading.includes(status) || !account}
          sx={{ mr: 1 }}
          type='submit'
          form={form}>
          {t('actions.confirmation')}
        </Button>

      </Stack>
    </Stack>
  );

}

export default memo(CreateTokenStepperActions);