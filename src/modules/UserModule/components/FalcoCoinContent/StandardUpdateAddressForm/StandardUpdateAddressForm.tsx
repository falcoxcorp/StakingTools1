import { Grid } from '@mui/material';
import { memo } from 'react'
import { Form, FormTextField } from '../../../../../components/FormFields';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../../../../components/Buttons';
import { Section } from '../styled';
import { IContractCall } from '../../../interfaces/IContractCall';
import { useStandardFeeUpdate } from '../../../hooks/standard/useStandardFeeUpdate';
import { StandardFeeCall } from '../StandardFeeCall';
import { COIN_ENUM } from '../../../constants/token-basic';
import { useOwnerCall } from '../../../hooks/standard/useOwnerCall';

type StandardUpdateAddressFormProps = {
  contract: IContractCall
  methodCall: COIN_ENUM
  useHook?: any
  useCallHook?: any
}
const StandardUpdateAddressForm = ({ contract, methodCall, useHook = useStandardFeeUpdate, useCallHook }: StandardUpdateAddressFormProps) => {
  const { t } = useTranslation('standardCoin')
  const { isOwner } = useOwnerCall({ contract: { ...contract, method: COIN_ENUM.OWNER } })
  const { control, onSubmit, isLoading } = useHook(contract?.method)
  return (
    <Section gap={2}>
      <StandardFeeCall useCallHook={useCallHook} contract={contract} method={methodCall} symbol='' />
      <Form onSubmit={onSubmit} control={control} id='update-address-form' isLoading={isLoading}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={8}>
            <FormTextField readOnly={!isOwner} name='address' label={t(methodCall)} required />
          </Grid>

          <Grid item xs={12} md={4} width={'100%'} display={'flex'} justifyContent={'end'}>
            <LoadingButton disabled={!isOwner} fullWidth loading={isLoading} type='submit' variant='contained'>
              {t('common:update')}
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </Section>
  );

}

export default memo(StandardUpdateAddressForm);