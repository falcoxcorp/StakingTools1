import { memo } from 'react'
import { Divider, Grid, InputAdornment } from '@mui/material';
import { FormTextField } from '../../../../components/FormFields';
import { FromSelectTokenAddressPaid } from '../FromSelectTokenPaid';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import { useTranslation } from 'react-i18next';
import FormTextFieldSupply from '../FormTextFieldSupply/FormTextFieldSupply';
import { SecurityPoliticCheckBox } from '../SecurityPoliticCheckBox';
import AlertNote from '../../../../components/AlertNote/AlertNote';
import { CustomRouterAddress } from '../CustomRouterAddress';
import { IRouterAddress } from '../../../../settings/router_address';

type FactoryFormStandardProps = {
  _supply: number,
  paidByToken: boolean
  isCustomRouter: boolean
  chainId: number,
  router: IRouterAddress
}

const FactoryFormStandard = ({ _supply, paidByToken, chainId, router, isCustomRouter }: FactoryFormStandardProps) => {
  const { t } = useTranslation('createToken')
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>

      <Grid item xs={12} md={4}>
        <FormTextField
          name='_NAME'
          label={t('form._name')}
          required
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormTextField
          name='_SYMBOL'
          label={t('form._symbol')}
          placeholder={t('form._eg_symbol')}
          required
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormTextField
          name='_DECIMALS'
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
          name='_supply'
          supply={_supply as number}
          label={t('form._supply')}
          placeholder={t('form._supply')}
          type='number'
          required
          inputProps={{
            min: 1,
            max: 999999999999999999,
            step: 1,
            inputMode: 'numeric', pattern: '[0-9]*'
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <FormTextField name='tokenOwner' label={t('form.tokenOwner')} required />
      </Grid>

      <CustomRouterAddress router={router} switchName='isCustomRouter' switchlabel={t('form.customRouter')} isCustomRouter={isCustomRouter} />

      <Grid item xs={12}>
        <FormTextField name='feeAddress' label={t('form.feeAddress')} required />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <FormTextField
          name='_txFee'
          label={t('form.standard._txFee')}
          placeholder={t('form.standard._txFee')}
          type='number'
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PercentOutlinedIcon />
              </InputAdornment>
            )
          }}
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
            inputMode: 'numeric', pattern: '[0-9]*'
          }}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <FormTextField
          name='_lpFee'
          label={t('form.standard._lpFee')}
          placeholder={t('form.standard._lpFee')}
          type='number'
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PercentOutlinedIcon />
              </InputAdornment>
            )
          }}
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
            inputMode: 'numeric', pattern: '[0-9]*'
          }}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <FormTextField
          name='_DexFee'
          label={t('form.standard._DexFee')}
          placeholder={t('form.standard._DexFee')}
          type='number'
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PercentOutlinedIcon />
              </InputAdornment>
            )
          }}
          inputProps={{
            min: 0,
            max: 100,
            step: 1,
            inputMode: 'numeric', pattern: '[0-9]*'
          }}
        />
      </Grid>

      {/* <Grid item xs={12}>
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

export default memo(FactoryFormStandard);