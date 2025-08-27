import { Grid } from '@mui/material';
import { memo } from 'react'
import { Form, FormTextField } from '../../../../../components/FormFields';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../../../../components/Buttons';
import { useOwnerCall } from '../../../hooks/standard/useOwnerCall';
import { useTransferOwnerForm } from '../../../hooks/standard/useTransferOwnerForm';
import { Section } from '../styled';
import { IContractCall } from '../../../interfaces/IContractCall';

type FalcoCoinUpdateOwnerFromProps = {
  contract: IContractCall
}
const FalcoCoinUpdateOwnerFrom = ({ contract }: FalcoCoinUpdateOwnerFromProps) => {
  const { t } = useTranslation('falcoCoin')
  const { isOwner } = useOwnerCall({ contract })
  const { control, onSubmit, isLoading } = useTransferOwnerForm()

  if (!isOwner) return (
    <></>
  )

  return (
    <Section>
      <Form onSubmit={onSubmit} control={control} id='create-token-form' isLoading={isLoading}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={9}>
            <FormTextField name='newOwner' label={t('details.newOwner')} required />
          </Grid>

          <Grid item xs={12} md={3} width={'100%'} display={'flex'} justifyContent={'end'}>
            <LoadingButton fullWidth loading={isLoading} type='submit' variant='contained'>
              {t('common:transfer')}
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </Section>
  );

}

export default memo(FalcoCoinUpdateOwnerFrom);