import { Grid, InputAdornment } from '@mui/material';
import { memo } from 'react'
import { Form, FormTextField } from '../../../../../components/FormFields';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '../../../../../components/Buttons';
import { Section } from '../styled';
import { IContractCall } from '../../../interfaces/IContractCall';
import { StandardFeeCall } from '../StandardFeeCall';
import { COIN_ENUM } from '../../../constants/token-basic';
import { useStandardFeeUpdate } from '../../../hooks/standard/useStandardFeeUpdate';
import { useCallContractStandard } from '../../../hooks/standard/useCallContractStandard';
import { useOwnerCall } from '../../../hooks/standard/useOwnerCall';

type StandardUpdateAmountFormProps = {
  contract: IContractCall
  methodCall: COIN_ENUM
  useHook?: any
  useCallHook?: any
}
const StandardUpdateAmountForm = ({ contract, methodCall, useHook = useStandardFeeUpdate, useCallHook }: StandardUpdateAmountFormProps) => {
  const { t } = useTranslation('standardCoin')
  const { value: symbol } = useCallContractStandard({ contract: { ...contract, method: COIN_ENUM.SYMBOL } })
  const { isOwner } = useOwnerCall({ contract: { ...contract, method: COIN_ENUM.OWNER } })
  const { control, onSubmit, isLoading } = useHook(contract?.method)

  return (
    <Section gap={2}>
      <StandardFeeCall useCallHook={useCallHook} contract={contract} method={methodCall} symbol={symbol} />

      <Form onSubmit={onSubmit} control={control} id='update-amonut-form' isLoading={isLoading}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={8}>
            <FormTextField
              readOnly={!isOwner}
              name='amount'
              label={t(methodCall)}
              placeholder={t(methodCall)}
              type='number'
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {symbol}
                  </InputAdornment>
                )
              }}
              inputProps={{
                min: 0,
                step: 1,
                inputMode: 'numeric', pattern: '[0-9]*'
              }}
            />
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

export default memo(StandardUpdateAmountForm);