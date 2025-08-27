import { memo, useEffect } from 'react'
import { useFalcoCoinRenounceOwnerService } from '../../../services/BASIC/renounce.owner.falco-coin'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { LoadingButton } from '@mui/lab'
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';

type RenounceOwnerButtonProps = {
  disabled: boolean
}
const RenounceOwnerButton = ({ disabled }: RenounceOwnerButtonProps) => {
  const { onRenounceOwner, resetState, state } = useFalcoCoinRenounceOwnerService()
  const { t } = useTranslation('falcoCoin')

  const isLoanding = state?.status === 'PendingSignature' || state?.status === 'Mining'

  useEffect(() => {
    if (state.status === 'Exception') {
      state.errorMessage && toast.error(state.errorMessage)
      resetState()
    }
    if (state.status === 'Success') {
      toast.success(t('renounceOwner.success'))
      resetState()
    }
  }, [toast, state])

  return (
    <LoadingButton
      size='large'
      disabled={disabled}
      startIcon={<TokenOutlinedIcon />}
      variant='contained' loading={isLoanding} onClick={onRenounceOwner}>
      {t('renounce')}
    </LoadingButton>
  );

}

export default memo(RenounceOwnerButton);