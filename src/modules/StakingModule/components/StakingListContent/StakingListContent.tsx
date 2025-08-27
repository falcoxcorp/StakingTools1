import { memo, useMemo } from 'react'
import { FormPaper } from '../../../CreateTokenModule/components/CreateTokenForm/styled';
import { useCall, useEthers } from '@usedapp/core';
import { Stack, Typography } from '@mui/material';
import TableHeaderTitle from '../../../../components/TableHeaderTitle/TableHeaderTitle';
import { useTranslation } from 'react-i18next';
import { ConditionContainer } from '../../../../components/ConditionContainer';
import { METHODS_STAKING_FACTORY } from '../../interfaces/staking.factory';
import { SwitchNetwork } from '../../../../components/SwitchNetwork';
import { NETWORKS_STAKING_FACTORY, NETWORKS_STAKING_FACTORY_MAP } from '../../../../contracts/staking/staking.intance';
import StakingTable from './StakingTable';


const StakingListContent = () => {
  const { t } = useTranslation(['staking', 'common'])
  const { account, chainId } = useEthers()
 
  const network = useMemo(() => chainId && NETWORKS_STAKING_FACTORY_MAP[chainId],[chainId] )

  const { error, value } = useCall(account && network && {
    contract: network.contractInstance,
    method: METHODS_STAKING_FACTORY?.GET_DEPLOYED_STAKING_CONTRACT_BY_OWNER,
    args: [account]
  }) ?? {}
  
  return (
    <ConditionContainer active={!!account} alternative={<></>}>
      <Stack gap={2}>
        <TableHeaderTitle title={t('stakingList')} />

        <FormPaper>
          <Stack gap={1} padding={{ xs: 1, md: 3 }} maxWidth={350}>
            <Typography variant="h2">{t('common:selectNetwork')}</Typography>
          <SwitchNetwork networks={NETWORKS_STAKING_FACTORY} />
          </Stack>
          <StakingTable shakings={value?.[0]} error={error}   />
        </FormPaper>
      </Stack>
    </ConditionContainer>
  );

}

export default memo(StakingListContent);