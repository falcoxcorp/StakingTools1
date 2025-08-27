import { Grid, InputAdornment } from '@mui/material';
import { memo } from 'react'
import { Form, FormTextField } from '../../../../../components/FormFields';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined'
import { useTranslation } from 'react-i18next';
import { useFeeUpdateForm } from '../../../hooks/standard/useFeeUpdateForm';
import { LoadingButton } from '../../../../../components/Buttons';
import { Section } from '../styled';
import { useOwnerCall } from '../../../hooks/standard/useOwnerCall';
import { IContractCall } from '../../../interfaces/IContractCall';

type FeeUpdateFromProps={
  contract: IContractCall
}
const FeeUpdateFrom = ({contract}:FeeUpdateFromProps) => {
  const { t } = useTranslation('falcoCoin')
  const { isOwner } = useOwnerCall({ contract })
  const { control, onSubmit, isLoading } = useFeeUpdateForm()

  if (!isOwner) return (
    <></>
  )

  return (
    <Section gap={2}>
      <Form onSubmit={onSubmit} control={control} id='create-token-form' isLoading={isLoading}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={3}>
            <FormTextField
              name='_TAX_FEE'
              label={t('details._TAX_FEE')}
              placeholder={t('details._TAX_FEE')}
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

          <Grid item xs={12} md={3}>
            <FormTextField
              name='_BURN_FEE'
              label={t('details._BURN_FEE')}
              placeholder={t('details._BURN_FEE')}
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

          <Grid item xs={12} md={3}>
            <FormTextField
              name='_CHARITY_FEE'
              label={t('details._CHARITY_FEE')}
              placeholder={t('details._CHARITY_FEE')}
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

export default memo(FeeUpdateFrom);