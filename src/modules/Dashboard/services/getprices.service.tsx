
import { GeckoTerminalAPI } from '../../../settings/services';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { GECKO_POOL_KEY, GECKO_PRICES_LIST_KEY, GECKO_TOKEN_INFO_KEY, GECKO_TOKEN_KEY } from '../constants/query';
import { IGeckoPriceApiResponse } from '../interfaces/IGeckoPrices';

export const useFindTokenPricess = (address: string[]) => {
  const GeckoService = new GeckoTerminalAPI('https://api.geckoterminal.com/api/v2');
  const fetch = useCallback(() => GeckoService.getPrices(address), [GeckoService]);
  return useQuery<IGeckoPriceApiResponse>([GECKO_PRICES_LIST_KEY], fetch);
};

export const useFindPool = (network: string, address: string) => {
  const GeckoService = new GeckoTerminalAPI('https://api.geckoterminal.com/api/v2');
  const fetch = useCallback(() => GeckoService.getPool(network, address), [GeckoService]);
  return useQuery<any>([GECKO_POOL_KEY, network, address], fetch);
};

export const useFindToken = (network: string, address: string) => {
  const GeckoService = new GeckoTerminalAPI('https://api.geckoterminal.com/api/v2');
  const fetch = useCallback(() => GeckoService.getToken(network, address), [GeckoService]);
  return useQuery<any>([GECKO_TOKEN_KEY, network, address], fetch);
};

export const useFindTokenInfo = (network: string, address: string) => {
  const GeckoService = new GeckoTerminalAPI('https://api.geckoterminal.com/api/v2');
  const fetch = useCallback(() => GeckoService.getToken(network, address), [GeckoService]);
  return useQuery<any>([GECKO_TOKEN_INFO_KEY, network, address], fetch);
};
