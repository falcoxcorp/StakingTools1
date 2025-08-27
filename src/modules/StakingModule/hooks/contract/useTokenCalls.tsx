import { useCall, useEthers } from "@usedapp/core";
import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { isEmpty } from "lodash";
import { CommonErc20CoinInstance } from "../../../../contracts/instances/BasicCoin/basic.coin.contract.instance";


export const useCallNameAndSymbol = (tokenAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = CommonErc20CoinInstance(tokenAddress)

  const { value: name } = useCall(account && chainId && {
    contract: instance,
    method: 'name',
    args: []
  }) ?? {}

  const { value: symbol } = useCall(account && chainId && {
    contract: instance,
    method: 'symbol',
    args: []
  }) ?? {}

  const fetch = useCallback(() => ({ name: name?.[0] || '', symbol: symbol?.[0] || '' }), [name, symbol, tokenAddress]);
  return useQuery<any>(['symbol', 'name', tokenAddress], fetch, {
    enabled: !isEmpty(name) && !isEmpty(symbol),
    refetchInterval: 1000
  });
};
