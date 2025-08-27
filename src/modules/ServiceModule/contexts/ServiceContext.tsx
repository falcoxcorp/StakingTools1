import {createContext, useContext, useMemo} from 'react';
import { useEthers } from '@usedapp/core';
import { SERVICE_CONFIG } from '../../../settings/config/services';
import { ChildrenProps } from '../../../common/types';
import { STAKING_CONFIG } from '../../../settings/config/staking.factory';
// Data value of the provider context
type ServiceContextValue = {
  serviceAddress?: string
  stakingFactoryAddress?: string
}
// default value of the context
const defaultValue: ServiceContextValue = {}

// create context
const ServiceContext = createContext<ServiceContextValue>(defaultValue);

// Proptypes of Provider component
type ServiceContextProps = ChildrenProps & {
children: any
}

/**
* Provider component
 * */
const ServiceProvider = (props: ServiceContextProps) => {
  const {chainId} = useEthers()
  const serviceAddress = useMemo(() => SERVICE_CONFIG[chainId as number], [chainId])
  const stakingFactoryAddress = useMemo(() => STAKING_CONFIG[chainId as number], [chainId])

return (
<ServiceContext.Provider
value={{serviceAddress, stakingFactoryAddress}}
{...props}
/>
);
}


// Default hook to retrieve context data
const useServiceContext = () => {
const context = useContext(ServiceContext);
if (context === undefined) {
return {}; // also, you can throw an error if it is you need the context
}
return context;
}

export {ServiceProvider, useServiceContext};