import { Card } from '@mui/material';
import { memo, useEffect } from 'react'
import Header from './Header';
import { useStakingContractContext } from '../../../context/StakingContractContext';
import { useFindToken } from '../../../../Dashboard/services/getprices.service';
import { IStakingContractInfo } from '../../../interfaces/ISmartChef';
import Actions from './Actions';
import Content from './Content';
import { useStakingToken } from '../../../hooks/useStakingToken';
import { FinishedStaking } from '../../FinishedStaking';
import { useEthers } from '@usedapp/core';
import { GECKO_NETWORK_API } from '../../../../../settings/services/gecko-network';

type Props = {
  item: IStakingContractInfo
}
const StakingPoolItem = ({ item }: Props) => {
  const { chainId } = useEthers()
  const { dispatch } = useStakingContractContext()
  const { data: reward } = useFindToken(GECKO_NETWORK_API[chainId as number], item?.rewardToken?.toLowerCase())
  const { data: staking } = useFindToken(GECKO_NETWORK_API[chainId as number], item?.stakedToken?.toLowerCase())
  const { endBlocks } = useStakingToken(item)

  useEffect(() => {
    if (reward && staking) {
      dispatch?.({
        type: 'ADD_TOKEN_INFO',
        payload: {
          rewardToken: reward.attributes.address,
          stakedToken: staking.attributes.address,
          tokenInfo: {
            reward: {
              name: reward.attributes.name,
              symbol: reward.attributes.symbol,
              price: reward.attributes.price_usd,
              image: reward.attributes.image_url,
            },
            staking: {
              name: staking.attributes.name,
              symbol: staking.attributes.symbol,
              price: staking.attributes.price_usd,
              image: staking.attributes.image_url,
            }
          }
        }
      });
    }
  }, [dispatch, reward, staking, item]);

  return (
    <Card sx={{
      borderRadius: 3,
      paddingBottom: 2,
      position: 'relative',
      height: '100%',
      ":hover": {
        backgroundColor: (theme) => theme.palette.grey[800]
      }
    }}>
      {endBlocks === 0 && <FinishedStaking />}
      {/* <Stack sx={(theme) => ({
        ...(endBlocks === 0 && {
          ":before": {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, height: '100%', width: '100%',
            // backgroundColor: `#FFFFFF50`,
            zIndex: 5,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}60, #00000020)`,
            opacity: 0.5,
            cursor: 'not-allowed'
          }
        })

      })}> */}
      <Header item={item} />
      <Content item={item} />
      <Actions item={item} />
      {/* </Stack> */}
    </Card >
  );

}

export default memo(StakingPoolItem);