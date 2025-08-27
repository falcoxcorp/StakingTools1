import { Stack } from '@mui/material'
import { memo, useMemo } from 'react'
import StackItem from '../../../../../../components/StackItem/StackItem'
import { useTranslation } from 'react-i18next'
import { PaperSection } from '../../../../../../components/PaperSection'
import NetworkSummary from '../../../../../../components/NetworkSummary/NetworkSummary'
import { INetworks, TOKEN_TYPE_ENUM } from '../../../../../../contracts/instances/interfaces'
import { PaymentMethods } from '../../../PaymentMethods'
import { ConditionContainer } from '../../../../../../components/ConditionContainer'
import ConfirmSkeleton from './ConfirmSkeleton'
import { SuccessOK } from './SuccessOK'
import { SuccessError } from './SuccessError'
import { LIST_NETWORKS_ERC20 } from '../../../../../../contracts/instances/ERC20/network-token-erc20'
import { ConfirmProps } from './ConfirmContainer'

const ConfirmSimple = ({ chainId, getValues, isLoading, status, nameToken, reset, paymentAmount }: ConfirmProps) => {
  const data = useMemo(() => getValues(), [getValues])
  const network = useMemo(() => LIST_NETWORKS_ERC20[TOKEN_TYPE_ENUM.SIMPLE]?.find(nt => nt.chainId === chainId), [chainId])
  const { t } = useTranslation(['createToken', 'erc20'])

  return (
    <ConditionContainer active={!isLoading} alternative={<ConfirmSkeleton />}>
      {
        status === 'success' ? <SuccessOK reset={reset} /> :
          status === 'error' ? <SuccessError reset={reset} /> :
            <>
              <PaymentMethods network={network as INetworks} nameToken={nameToken} paymentAmount={paymentAmount} />
              <NetworkSummary network={network as INetworks} />
              <PaperSection title={t('erc20:confirm:token:details')}>
                <Stack gap={1}>
                  <StackItem title={t('form._name')} data={data?._name} />
                  <StackItem title={t('form._symbol')} data={data?._symbol} />
                  <StackItem title={t('form._decimals')} data={data?._decimals} />
                  <StackItem title={t('form._supply')} data={data?._initialMint} />
                  <StackItem title={t('form.tokenOwner')} data={data?._owner} />
                </Stack>
              </PaperSection></>
      }
    </ConditionContainer>
  );

}

export default memo(ConfirmSimple);