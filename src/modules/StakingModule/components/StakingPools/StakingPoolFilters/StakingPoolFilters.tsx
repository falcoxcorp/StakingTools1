import { FormControlLabel, Stack, Switch } from '@mui/material';
import { memo, useCallback } from 'react'
import StakingPoolSortSelect from './StakingPoolSortSelect';
import StakingPoolSearch from './StakingPoolSearch';
import { useTranslation } from 'react-i18next';
import { useStakingContractContext } from '../../../context/StakingContractContext';


const StakingPoolFilters = () => {
  const { t } = useTranslation('staking')
  const { dispatch } = useStakingContractContext()

  const onOnlyStaking = useCallback((_event: any, checked: boolean) => {
    dispatch?.({
      type: 'ONLY_STAKING',
      payload: {
        active: checked
      }
    })
  }, [dispatch])

  /*  const onLiveStaking = useCallback((_event: any, checked: boolean) => {
     dispatch?.({
       type: 'LIVE_STAKING',
       payload: {
         active: checked
       }
     })
   }, [dispatch])
  */
  return (
    <Stack gap={2} flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'}>
      <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
        {/*  <ToggleButtons /> */}

        {/*  <FormControlLabel
          control={<Switch sx={{ m: 1 }} defaultChecked />}
          label={t('liveStaking')}
          onChange={onLiveStaking}
        /> */}
      </Stack>
      <Stack gap={1} flexDirection={{xs:'column', md:'row'}} alignItems={{xs:'start', md:'center'}} justifyContent={'end'} flexWrap={'wrap'}>
        <FormControlLabel
          defaultChecked={false}
          control={<Switch sx={{ m: 1 }} defaultChecked />}
          label={t('onlyStaking')}
          onChange={onOnlyStaking}
        />
        <Stack gap={1} flexDirection={'row'} >
        <StakingPoolSortSelect />
        <StakingPoolSearch />
        </Stack>
      </Stack>
    </Stack>
  );

}

export default memo(StakingPoolFilters);