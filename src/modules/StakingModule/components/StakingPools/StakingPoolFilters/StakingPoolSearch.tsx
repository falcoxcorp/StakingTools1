import { TextField } from '@mui/material';
import { memo, useCallback } from 'react'
import { useStakingContractContext } from '../../../context/StakingContractContext';
import { useTranslation } from 'react-i18next';

const StakingPoolSearch = () => {
  const {t} = useTranslation('common')
  const { dispatch } = useStakingContractContext()

  const onSearch = useCallback((env: any) => {
    const value: string = env.target.value
    return dispatch?.({
      type: 'SEARCH_FILTER',
      payload: {
        search: value
      }
    });

  }, [dispatch])

  return (
    <TextField name='searchStaking' onChange={onSearch} id="outlined-search" label={t('search')} type="search" size='small' />
  );

}

export default memo(StakingPoolSearch);