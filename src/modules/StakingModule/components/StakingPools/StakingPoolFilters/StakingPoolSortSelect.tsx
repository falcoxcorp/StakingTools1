import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useStakingContractContext } from '../../../context/StakingContractContext';


const StakingPoolSortSelect = () => {
  const { dispatch } = useStakingContractContext()
  const { t } = useTranslation('staking')
  const [sort, setSort] = useState('LATEST');


  const onSortFilter = useCallback((env: any) => {
    const value: string = env.target.value
    setSort(value);
    return dispatch?.({
      type: 'SORT_FILTER',
      payload: {
        sort: value
      }
    });

  }, [dispatch])

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{t('pool.sort.title')}</InputLabel>
      <Select
        labelId="staking-sort"
        id="staking-sort"
        value={sort}
        label={t('pool.sort.title')}
        onChange={onSortFilter}
      >
        <MenuItem value={'APR'}>{t('pool.sort.APR')}</MenuItem>
        {/* <MenuItem value={'EARNED'}>{t('pool.sort.EARNED')}</MenuItem> */}
        <MenuItem value={'TOTAL_STAKING'}>{t('pool.sort.TOTAL_STAKING')}</MenuItem>
        <MenuItem value={'LATEST'}>{t('pool.sort.LATEST')}</MenuItem>
      </Select>
    </FormControl>
  );

}

export default memo(StakingPoolSortSelect);