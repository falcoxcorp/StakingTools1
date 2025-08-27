import { Stack, Typography } from '@mui/material';
import { memo, useMemo } from 'react'
import { IStakingContractInfo } from '../../../interfaces/ISmartChef';
import { StackItem } from '../../../../../components/StackItem';
import { useTranslation } from 'react-i18next';
import { onConvertSupply } from '../../../../../utils/number';
import { useStakingToken } from '../../../hooks/useStakingToken';
import { TransTypography } from '../../../../../components/TransTypography';
import { DateValue } from '../../../../../components/Data';
import { Info } from '@mui/icons-material';
import { getBlockEndInDate } from '../../../../../utils/block-time';
import { CustomTooltip } from '../../../../../components/styled/tooltip';
import { useStakingContractContext } from '../../../context/StakingContractContext';
import { useCallStakedTokenAmount } from '../../../hooks/contract/useStakingCalls';

type ActionItemsProps = {
  item: IStakingContractInfo
}

const ActionItems = ({ item }: ActionItemsProps) => {
  const { t } = useTranslation('staking')
  const { state } = useStakingContractContext()
  const { data: stakedTokenAmount } = useCallStakedTokenAmount(item?.stakingContact)
  const token = useMemo(() => state?.tokens[item?.stakedToken.toLowerCase()], [state?.tokens])
  const total = useMemo(() => stakedTokenAmount ? `${Number(stakedTokenAmount)} ${token?.symbol}` : 0, [onConvertSupply, token, stakedTokenAmount])
  return (
    <Stack gap={1}>
      <StartInItem item={item} />
      <EndInItem item={item} />
      <StackItem title={t('pool.action.details.stakingTotal')} data={total} />
    </Stack>
  );

}

export default memo(ActionItems);


type APYItemProps = {
  item: IStakingContractInfo
}

const EndInItem = ({ item }: APYItemProps) => {
  const { t } = useTranslation('staking')
  const { endIn } = useStakingToken(item)
  const date = useMemo(() => getBlockEndInDate(endIn), [endIn, getBlockEndInDate])

  return (
    <StackItem title={t('pool.action.details.endIn')} data={
      <Stack gap={0.2} flexDirection={'row'} alignItems={'center'}>
        <TransTypography message='staking:pool:action:details:endInCount_one' values={{ count: endIn }} />
        <CustomTooltip placement='top' arrow title={
          <Stack>
            <Typography color="initial">{t('pool.action.details.endIn')}</Typography>
            <DateValue value={date} format='MMMM, dd yyyy hh:mm:ss' />
          </Stack>
        }>
          <Info color='primary' fontSize='small' />
        </CustomTooltip>
      </Stack>} />
  )
}

const StartInItem = ({ item }: APYItemProps) => {
  const { t } = useTranslation('staking')
  const { startIn } = useStakingToken(item)
  const date = useMemo(() => getBlockEndInDate(startIn), [startIn, getBlockEndInDate])
  if (startIn <= 0) return <></>
  return (
    <StackItem title={t('pool.action.details.startIn')} data={
      <Stack gap={0.2} flexDirection={'row'} alignItems={'center'}>
        <TransTypography message='staking:pool:action:details:startInCount_one' values={{ count: startIn }} />
        <CustomTooltip placement='top' arrow title={
          <Stack>
            <Typography color="initial">{t('pool.action.details.startIn')}</Typography>
            <DateValue value={date} format='MMMM, dd yyyy hh:mm:ss' />
          </Stack>
        }>
          <Info color='primary' fontSize='small' />
        </CustomTooltip>
      </Stack>} />
  )
}