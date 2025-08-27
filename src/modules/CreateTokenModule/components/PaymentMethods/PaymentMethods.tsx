import { memo } from 'react'
import { PaperSection } from '../../../../components/PaperSection'
import { useTranslation } from 'react-i18next'
import { FormTextField } from '../../../../components/FormFields'
import { StackItem } from '../../../../components/StackItem'
import { INetworks } from '../../../../contracts/instances/interfaces'
import { InputAdornment, Skeleton, Stack } from '@mui/material'

type PaymentMethodsProps = {
  network: INetworks
  nameToken: string
  paymentAmount: number
}

const PaymentMethods = ({ network, nameToken, paymentAmount }: PaymentMethodsProps) => {
  const { t } = useTranslation('erc20')

  const content = <FormTextField InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        {nameToken || network?.symbol}
      </InputAdornment>
    )
  }} name='paymentAmount' readOnly />

  if (paymentAmount === 0) return (
    <PaymentSkeleton />
  )

  return (
    <PaperSection title>
      <StackItem title={t('form.paymentAmount')} data={content} />
    </PaperSection>
  );

}

export default memo(PaymentMethods);


const PaymentSkeleton = () => {
  return (
    <PaperSection title>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
        <Skeleton variant='text' sx={{ width: { xs: '100%', md: 150 } }} />
        <Skeleton variant='rectangular' height={40} sx={{ width: { xs: '100%', md: 150 } }} />
      </Stack>
    </PaperSection>
  )
}