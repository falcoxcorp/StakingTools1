import { memo, useEffect, } from 'react'
import { Grid, Stack } from '@mui/material';
import StakingPoolFilters from './StakingPoolFilters/StakingPoolFilters';
import { StakingContractProvider, useStakingContractContext } from '../../context/StakingContractContext';
import { StakingPoolItem } from './StakingPoolItem';
import { getStakingContractMapper } from '../../../../utils/staking-utils';
import { StakingPoolContentSkeletonGrid } from './StakingPoolContentSkeleton';
import StakingEmptyList from '../StakingEmptyList/StakingEmptyList';

const StakingPoolContent = () => {

  return (
    <Stack gap={{ xs: 2, md: 4 }}>
      {/*  <Box>
        <Typography color={'primary.main'} variant='title'>{t('pool.title')}</Typography>
        <Typography variant='h1'>{t('pool.subtitle')}</Typography>
      </Box> */}
      <StakingContractProvider>

        <StakingPoolFilters />
        <StakingPools />
      </StakingContractProvider>
    </Stack>
  );

}

export default memo(StakingPoolContent);


const StakingPools = () => {
  const { state, data, isLoading, dispatch } = useStakingContractContext()
  useEffect(() => {
    if (data) {
      const stakingList = getStakingContractMapper(data)
      dispatch?.({
        type: 'SET_STAKING',
        payload: {
          staking: stakingList
        }
      });
    }
  }, [data, dispatch, getStakingContractMapper]);

  if (isLoading) {
    return <StakingPoolContentSkeletonGrid />
  }

  if (state?.data?.length === 0) {
    return (<StakingEmptyList />)
  }


  return (
    <Grid container spacing={{ xs: 2 }}>
      {
        state?.data?.map((staking: any, index: number) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <StakingPoolItem item={staking} />
          </Grid>
        ))
      }
    </Grid>)
}