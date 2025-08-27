import { Box, CardContent, IconButton, Skeleton, Stack, Typography } from '@mui/material';
import { Fragment, memo, useEffect, useMemo } from 'react'
import { IStakingContractInfo, ITokenInfo } from '../../../interfaces/ISmartChef';
import { StakingButton } from '../../StakingButton';
import { RewardDebt } from '../../RewardDebt';
import { getTokenByAddress } from '../../../context/StakingReducer';
import { useStakingContractContext } from '../../../context/StakingContractContext';
import { TokenStakingSection } from '../../TokenStakingSection';
import { useCallPendingReward, useCallStakedTokenAmount, useCallUserInfo } from '../../../hooks/contract/useStakingCalls';
import { useTranslation } from 'react-i18next';
import { useStakingToken } from '../../../hooks/useStakingToken';
import { StackItem } from '../../../../../components/StackItem';
import RoiCalculatorModal from '../../RoiCalculatorModal/RoiCalculatorModal';
import useToggle from '../../../../../common/hooks/useToggle';
import { CalculateOutlined, InfoOutlined } from '@mui/icons-material';
import { isEmpty } from 'lodash';
import { CustomTooltip } from '../../../../../components/styled/tooltip';
import numeral from 'numeral';

type Props = {
  item: IStakingContractInfo
}

const Content = ({ item }: Props) => {
  const { state } = useStakingContractContext()
  const rewardTokenInfo = useMemo(() => getTokenByAddress(item?.rewardToken?.toLowerCase()), [getTokenByAddress, item, state])
  const stakedTokenInfo = useMemo(() => getTokenByAddress(item?.stakedToken?.toLowerCase()), [getTokenByAddress, item, state])
  const { data: pendingReward } = useCallPendingReward(item?.stakingContact)
  const { data: userInfo } = useCallUserInfo(item?.stakingContact)

  const whitAmount = useMemo(() => userInfo?.amount && userInfo?.amount > 0, [userInfo])

  return (
    <CardContent>
      <TotalStaking item={item} />
      {
        whitAmount ?
          <Fragment>
            <APYItem item={item} stakedTokenInfo={stakedTokenInfo as ITokenInfo} rewardTokenInfo={rewardTokenInfo as ITokenInfo} />
            <RewardDebt rewardToken={rewardTokenInfo} item={item} />
            <TokenStakingSection stakedToken={stakedTokenInfo} item={item} />
          </Fragment> :
          <Fragment>
            <APYItem item={item} stakedTokenInfo={stakedTokenInfo as ITokenInfo} rewardTokenInfo={rewardTokenInfo as ITokenInfo} />
            <StakingButton item={item} />
            {
              pendingReward > 0 &&
              <Box mt={1}>
                <RewardDebt rewardToken={rewardTokenInfo} item={item} />
              </Box>
            }
          </Fragment>

      }
    </CardContent>
  );

}

export default memo(Content);


const TotalStaking = ({ item }: { item: IStakingContractInfo }) => {
  const { dispatch } = useStakingContractContext()
  const { data: stakedTokenAmount } = useCallStakedTokenAmount(item?.stakingContact)
  useEffect(() => {
    if (stakedTokenAmount !== undefined) {
      dispatch?.({
        type: 'ADD_STAKED_TOKEN_AMOUNT',
        payload: {
          stakedTokenAmount,
          stakingContact: item?.stakingContact
        }
      });
    }
  }, [stakedTokenAmount]);
  return null
}

const APYItem = ({ item, stakedTokenInfo, rewardTokenInfo }: Props & { stakedTokenInfo: ITokenInfo, rewardTokenInfo: ITokenInfo }) => {
  const { t } = useTranslation('staking')
  const { isOpen, onClose, onOpen } = useToggle(false)
  const { dispatch } = useStakingContractContext()
  const { data: stakedTokenAmount } = useCallStakedTokenAmount(item?.stakingContact)
  const { getApy } = useStakingToken(item)
  const apy = useMemo(() => getApy(item?.rewardPerBlock, stakedTokenAmount as number, stakedTokenInfo, rewardTokenInfo), [stakedTokenAmount, item, getApy])
  const parseApy = numeral(apy)?.format('0.0 %')

  useEffect(() => {
    if (!isEmpty(apy)) {
      dispatch?.({
        type: 'ADD_APY',
        payload: {
          apy,
          stakingContact: item?.stakingContact
        }
      });
    }
  }, [apy]);

  return (
    <Box mb={2}>
      <RoiCalculatorModal open={isOpen} onClose={onClose} stakedTokenInfo={stakedTokenInfo} apy={Number(apy*100)} />

      <StackItem
        data={apy === undefined ? <Skeleton variant='text' width={40} /> :
          <Stack gap={0.5} flexDirection={'row'} alignItems={'center'}>
            {parseApy}
            <IconButton size='small' onClick={onOpen}>
              <CalculateOutlined color='primary' />
            </IconButton>
          </Stack>}
        // @ts-ignore
        title={
          <Stack gap={0.5} flexDirection={'row'} alignItems={'center'}>
            <Typography>{t('pool.action.details.APY')}</Typography>
            <CustomTooltip title={t('apy.info')}>
              <InfoOutlined sx={{ cursor: 'pointer' }} fontSize='small' />
            </CustomTooltip>
          </Stack>
        }
      />
    </Box>
  )
}
