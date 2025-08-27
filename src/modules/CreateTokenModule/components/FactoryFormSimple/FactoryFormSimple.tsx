import { memo } from 'react'
import { Divider, Grid } from '@mui/material';
import { FormTextField } from '../../../../components/FormFields';
import { FromSelectTokenAddressPaid } from '../FromSelectTokenPaid';
import { useTranslation } from 'react-i18next';
import FormTextFieldSupply from '../FormTextFieldSupply/FormTextFieldSupply';
import { SecurityPoliticCheckBox } from '../SecurityPoliticCheckBox';
import AlertNote from '../../../../components/AlertNote/AlertNote';

type FactoryFormSimpleProps = {
  _supply: number,
  paidByToken: boolean
  chainId: number,
}

const FactoryFormSimple = ({ _supply, paidByToken, chainId }: FactoryFormSimpleProps) => {
  const { t } = useTranslation('createToken')
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>

      <Grid item xs={12} md={4}>
        <FormTextField
          name='_name'
          label={t('form._name')}
          required
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormTextField
          name='_symbol'
          label={t('form._symbol')}
          placeholder={t('form._eg_symbol')}
          required
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormTextField
          name='_decimals'
          label={t('form._decimals')}
          required
          type='number'
          inputProps={{
            min: 1,
            max: 18,
            step: 1,
            inputMode: 'numeric', pattern: '[0-9]*'
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <FormTextFieldSupply
          name='_initialMint'
          supply={_supply as number}
          label={t('form._supply')}
          placeholder={t('form._supply')}
          type='number'
          required
        />
      </Grid>

      <Grid item xs={12}>
        <FormTextField name='_owner' label={t('form.tokenOwner')} required />
      </Grid>      

     {/*  <Grid item xs={12}>
        <FormSwitchField name='paidByToken' label={t('paidByToken')} />
      </Grid> */}

      {
        paidByToken &&
        <Grid item xs={12}>
          <FromSelectTokenAddressPaid name='tokenAddress' label={t('tokenAddress')} required chainId={chainId} />
        </Grid>
      }
      <Grid item xs={12}>
        <Divider flexItem sx={{ mb: 2 }} />
        <AlertNote note={t('notes.audit')} />
        <AlertNote note={t('notes.note_creation')} severity='warning' />
      </Grid>

      <Grid item xs={12}>
        <SecurityPoliticCheckBox name='isVerify' />
      </Grid>

    </Grid>
  );

}

export default memo(FactoryFormSimple);