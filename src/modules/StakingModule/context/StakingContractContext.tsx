import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './StakingReducer';
import { IStakingContractData, IStakingContractInfo } from '../interfaces/ISmartChef';
import { useFindStakingContract } from '../hooks/contract/useFindStakingContract';


type StakingContractContextValue = {
  state?: IStakingContractData
  dispatch?: React.Dispatch<any>
  data?: IStakingContractInfo[]
  isLoading?: boolean
}


const defaultValue: StakingContractContextValue = {};

const StakingContractContext = createContext<StakingContractContextValue>(defaultValue);

type StakingContractProviderProps = {
  children: React.ReactNode
}

const initialState = {
  data: [] as unknown as IStakingContractData[],
  originalData: [] as unknown as IStakingContractData[],
  tokens: {},
  totals: {},
  apy: {},
  sort: {
    // liveStaking: true,
    onlyStaking: true
  }
}

const StakingContractProvider = ({ children }: StakingContractProviderProps) => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading } = useFindStakingContract()

  return (
    <StakingContractContext.Provider value={{ state, dispatch, data, isLoading }}>
      {children}
    </StakingContractContext.Provider>
  );
}

const useStakingContractContext = () => {
  const context = useContext(StakingContractContext);
  if (!context) {
    throw new Error("useStakingContractContext is inside to StakingContractProvider");
  }
  return context;
}

export { StakingContractProvider, useStakingContractContext };


