import { memo, useMemo } from 'react'
import { ConfirmProps } from '../../../CreateTokenModule/components/CreateTokenStepper/Steps/Confirm/ConfirmContainer';
import { NETWORKS_STAKING_FACTORY_MAP } from '../../../../contracts/staking/staking.intance';
import { useTranslation } from 'react-i18next';
import ConfirmSkeleton from '../../../CreateTokenModule/components/CreateTokenStepper/Steps/Confirm/ConfirmSkeleton';
import { SuccessError } from '../../../CreateTokenModule/components/CreateTokenStepper/Steps/Confirm/SuccessError';
import { PaymentMethods } from '../../../CreateTokenModule/components/PaymentMethods';
import NetworkSummary from '../../../../components/NetworkSummary/NetworkSummary';
import { INetworks } from '../../../../contracts/instances/interfaces';
import { PaperSection } from '../../../../components/PaperSection';
import { Divider, Stack } from '@mui/material';
import { StackItem } from '../../../../components/StackItem';
import { ConditionContainer } from '../../../../components/ConditionContainer';
import { StakingSuccessOK } from '../StakingSuccessOK';
import { TransTypography } from '../../../../components/TransTypography';
import { DateValue } from '../../../../components/Data';
import { getBlockByDate } from '../../../../utils/block-time';

const StakingConfirm = ({ chainId, getValues, isLoading, status, nameToken, reset, paymentAmount }: ConfirmProps) => {

  const data = useMemo(() => getValues(), [getValues])
  const network = useMemo(() => NETWORKS_STAKING_FACTORY_MAP[chainId], [chainId])
  const { t } = useTranslation(['staking'])

  return (
    <ConditionContainer active={!isLoading} alternative={<ConfirmSkeleton />}>
      {
        status === 'success' ? <StakingSuccessOK reset={reset} /> :
          status === 'error' ? <SuccessError reset={reset} title={t('error.title')} /> :
            <>
              <PaymentMethods network={network as INetworks} nameToken={nameToken} paymentAmount={paymentAmount} />
              <NetworkSummary network={network as INetworks} />
              <PaperSection title={t('staking:details')}>
                <Stack gap={1} divider={<Divider flexItem />}>
                  <StackItem title={t('form.stakedToken')} data={data?.stakedToken} />
                  <StackItem title={t('form.rewardToken')} data={data?.rewardToken} />
                  <StackItem title={t('form.rewardPerBlock')} data={data?.rewardPerBlock} />
                  <StackItem title={t('form.startBlock')} data={<DateBlock date={data?.startBlock} chainId={chainId} />} />
                  <StackItem title={t('form.bonusEndBlock')} data={<DateBlock date={data?.bonusEndBlock} chainId={chainId} />} />
                  <StackItem
                    title={t('form.numberBlocksForUserLimit.title')}
                    data={
                      data?.numberBlocksForUserLimit.active ?
                        <DateBlock date={data?.numberBlocksForUserLimit.date} chainId={chainId} /> :
                        t('form.numberBlocksForUserLimit.detail')}
                  />
                  < StackItem title={t('form.poolLimitPerUser.label')} data={data?.poolLimitPerUser} />
                </Stack>
              </PaperSection></>
      }
    </ConditionContainer>
  );

}

export default memo(StakingConfirm);

type DateBlockProps = {
  date: Date,
  chainId: number
}
const DateBlock = ({ date, chainId }: DateBlockProps) => {
  const components = {
    date: <DateValue value={date} />
  }
  const blocks = useMemo(() => getBlockByDate(date, chainId), [getBlockByDate, date, chainId])

  return (
    <Stack alignItems={'end'}>
      <TransTypography message='staking:startBlockDate' components={components} />
      <TransTypography message='staking:startBlockNumber' values={{ blocks }} />
    </Stack>
  )
}