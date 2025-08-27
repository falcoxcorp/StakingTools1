import { Grid } from '@mui/material';
import { memo } from 'react'
import { Form, FormTextField } from '../../../../../components/FormFields';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../../../../components/Buttons';
import { useOwnerCall } from '../../../hooks/standard/useOwnerCall';
import { useUpdateFeeAddress } from '../../../hooks/standard/useUpdateFeeAddress';
import { Section } from '../styled';
import { IContractCall } from '../../../interfaces/IContractCall';

type FalcoCoinFeeAddressUpdateProps = {
  contract: IContractCall
}
const FalcoCoinFeeAddressUpdate = ({ contract }: FalcoCoinFeeAddressUpdateProps) => {
  const { t } = useTranslation('falcoCoin')
  const { isOwner } = useOwnerCall({ contract })
  const { control, onSubmit, isLoading } = useUpdateFeeAddress()

  if (!isOwner) return (
    <></>
  )

  return (
    <Section>
      {/* <Typography variant="h1" mb={1} color={'primary'} fontWeight={800}>{t('feeAddress.title')}</Typography> */}
      <Form onSubmit={onSubmit} control={control} id='create-token-form' isLoading={isLoading}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={9}>
            <FormTextField name='newFeeAddress' label={t('details.newFeeAddress')} required />
          </Grid>

          <Grid item xs={12} md={3} width={'100%'} display={'flex'} justifyContent={'end'}>
            <LoadingButton fullWidth loading={isLoading} type='submit' variant='contained'>
              {t('common:update')}
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </Section>
  );

}

export default memo(FalcoCoinFeeAddressUpdate);