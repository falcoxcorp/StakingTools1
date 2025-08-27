import { memo } from 'react'
import { Grid, Stack } from '@mui/material';
import { Form } from '../../../../../components/FormFields';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../../../../components/Buttons';
import { useSelectToken } from '../../../hooks/useSelectToken';
import { TokenTypeSelect } from '../../../../../components/TokenTypeSelect';


const FormTokenConfig = () => {
  const { t } = useTranslation(['admin', 'common'])
  const { control, onSubmit } = useSelectToken()

  return (
    <Stack sx={{ pt: 3 }} gap={{ xs: 2, md: 4 }}>
      <Form control={control} id='token-config-form'>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={6}>
            <TokenTypeSelect required size='small' name='token' label={t('common:selectToken')} />
          </Grid>


          <Grid item xs={12} md={6} width={'100%'}>
            <LoadingButton fullWidth onClick={onSubmit} variant='contained' sx={{ marginLeft: 'auto' }}>
              {t('common:config')}
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </Stack>
  );

}

export default memo(FormTokenConfig);