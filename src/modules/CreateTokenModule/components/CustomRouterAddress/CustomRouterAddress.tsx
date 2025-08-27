import { Grid } from '@mui/material';
import { memo } from 'react'
import { FormSwitchField, FormTextField } from '../../../../components/FormFields';
import { useTranslation } from 'react-i18next';
import { IRouterAddress } from '../../../../settings/router_address';
import TranslationByStyled from '../../../../components/TranslationByStyled/TranslationByStyled';

type CustomRouterAddressProps = {
  name?: string,
  label?: string,
  router: IRouterAddress,
  switchlabel: string,
  switchName: string
  isCustomRouter: boolean
}

const CustomRouterAddress = ({ label, name = 'routerAddress', router, switchName, switchlabel, isCustomRouter }: CustomRouterAddressProps) => {
  const { t } = useTranslation('createToken')
  return (
    <>
      <Grid item xs={12} md={4}>
        <FormSwitchField name={switchName} label={switchlabel || t('form.routerAddress')} />
      </Grid>
      <Grid item xs={12} md={8} display={'flex'} alignItems={'center'}>
        {
          isCustomRouter ?
            <FormTextField name={name} label={label || t('form.routerAddress')} required /> :
            <TranslationByStyled variant="body1" message='createToken:swapDefault' values={{ router: router?.router?.nameRouter }} />
        }
      </Grid>
    </>
  );

}

export default memo(CustomRouterAddress);