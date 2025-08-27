import { useCall, useEthers } from "@usedapp/core";
import { METHODS_STAKING_FACTORY } from "../../interfaces/staking.factory";
import { useCallback, useMemo } from "react";
import { STAKING_CONTRACT_LIST_KEY } from "../../constants/querys";
import { useQuery } from "@tanstack/react-query";
import { NETWORKS_STAKING_FACTORY_MAP } from "../../../../contracts/staking/staking.intance";
import { isEmpty } from "lodash";


export const useFindStakingContract = () => {
  const { account, chainId } = useEthers()
  const network = useMemo(() => chainId && NETWORKS_STAKING_FACTORY_MAP[chainId], [chainId])

  const { value: staking } = useCall(account && network && {
    contract: network.contractInstance,
    method: METHODS_STAKING_FACTORY?.getDeployedStakingContractsInfo,
    args: []
  }) ?? {}

  const fetch = useCallback(() => staking?.[0], [staking?.[0]]);
  return useQuery<any>([STAKING_CONTRACT_LIST_KEY,
    // @ts-ignore
    network?.contractInstance?.address, account, chainId], fetch, { enabled: !!network && !isEmpty(staking) });
};
