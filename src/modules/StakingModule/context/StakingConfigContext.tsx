import { createContext, useContext } from 'react';
import { ChildrenProps } from '../../../common/types';
import { useCallRewardToken, useCallStakedToken } from '../hooks/contract/useStakingCalls';
// Data value of the provider context
type StakingConfigContextValue = {
  stakingAddressId?: any
  rewardAddress?: string
  stakedAddress?: string
  isRewardLoading?: boolean
  isStakedLoading?: boolean

}
// default value of the context
const defaultValue: StakingConfigContextValue = {}

// create context
const StakingConfigContext = createContext<StakingConfigContextValue>(defaultValue);

// Proptypes of Provider component
type StakingConfigContextProps = ChildrenProps & {
  children: any,
  stakingAddressId: string
}

/**
* Provider component
 * */
const StakingConfigProvider = ({ stakingAddressId, ...props }: StakingConfigContextProps) => {
  const { data: rewardAddress, isLoading: isRewardLoading } = useCallRewardToken(stakingAddressId)
  const { data: stakedAddress, isLoading: isStakedLoading } = useCallStakedToken(stakingAddressId)
  return (
    <StakingConfigContext.Provider
      value={{ stakingAddressId, isStakedLoading, isRewardLoading, stakedAddress, rewardAddress }}
      {...props}
    />
  );
}


// Default hook to retrieve context data
const useStakingConfigContext = () => {
  const context = useContext(StakingConfigContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
}

export { StakingConfigProvider, useStakingConfigContext };