import { isEmpty } from "lodash";
import { IStakingContractData, IStakingContractInfo } from "../interfaces/ISmartChef";
import { useStakingContractContext } from "./StakingContractContext";

export const reducer = (state: IStakingContractData, action: any) => {
  switch (action.type) {
    case 'SET_STAKING': {
      const onlyStaking = getStatusActiveStaking(action.payload.staking, true)

      return {
        ...state,
        data: onlyStaking,
        originalData: action.payload.staking,
        tokens: action.payload.tokens ?? {}
      };
    }

    case 'ADD_TOKEN_INFO': {
      const tokens = state.tokens
      if (isEmpty(tokens[action.payload.rewardToken]?.symbol)) {
        tokens[action.payload.rewardToken.toLowerCase()] = action.payload.tokenInfo.reward
      }
      if (isEmpty(tokens[action.payload.stakedToken]?.symbol)) {
        tokens[action.payload.stakedToken.toLowerCase()] = action.payload.tokenInfo.staking
      }

      return {
        ...state,
        data: state.data,
        originalData: state.originalData,
        tokens
      };
    }
    case 'SEARCH_FILTER': {
      const search = action.payload.search;
      if (!search.trim()) {
        const dataStaking = getStatusActiveStaking(state.originalData, state?.sort?.onlyStaking)
        return {
          ...state,
          data: dataStaking
        };
      }   
      
      const addressList = Object.entries(state.tokens).filter(([_address, tokenInfo]) => {
        return tokenInfo?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
          tokenInfo?.symbol?.toLowerCase()?.includes(search?.toLowerCase())
      }).map(([address]) => address)

      const filteredData = state.originalData.filter(item => {
        return addressList.includes(item.rewardToken.toLowerCase()) || addressList.includes(item.stakedToken.toLowerCase())
      });

      return {
        ...state,
        data: filteredData
      };
    }

    case 'SORT_FILTER': {
      const selectedSort = action.payload.sort;
      let sortedData = [];
      switch (selectedSort) {
        case 'APR':
          const keyApy = Object.keys(state?.totals);
          const dataFilter = state.data?.filter(d => keyApy.includes(d.stakingContact));
          sortedData = dataFilter.sort((a, b) => keyApy.indexOf(a.stakingContact) - keyApy.indexOf(b.stakingContact));
          break;

        case 'TOTAL_STAKING': {
          const keyTotals = Object.keys(state?.totals);
          const dataFilter = state.data?.filter(d => keyTotals.includes(d.stakingContact));
          sortedData = dataFilter.sort((a, b) => keyTotals.indexOf(a.stakingContact) - keyTotals.indexOf(b.stakingContact));
          break;
        }

        case 'LATEST': {
          sortedData = getStatusActiveStaking(state.originalData, state?.sort?.onlyStaking)
          break;
        }

        default:
          sortedData = state.data
          break;
      }

      return {
        ...state,
        data: sortedData
      };
    }

    case 'ONLY_STAKING': {
      const active = action.payload.active
      const onlyStaking = getStatusActiveStaking(state.originalData, active)

      return {
        ...state,
        data: onlyStaking,
        sort: {
          ...state.sort,
          onlyStaking: active
        }
      };
    }

    case 'ADD_STAKED_TOKEN_AMOUNT': {
      const totals = state.totals
      if (isEmpty(totals[action.payload.stakingContact])) {
        totals[action.payload.stakingContact] = action.payload.stakedTokenAmount
      }

      return {
        ...state,
        data: state.data,
        originalData: state.originalData,
        totals
      };
    }

    case 'ADD_APY': {
      const apy = state.apy
      if (isEmpty(apy[action.payload.apy])) {
        apy[action.payload.stakingContact] = action.payload.apy
      }
      return {
        ...state,
        data: state.data,
        originalData: state.originalData,
        apy
      };
    }

    default:
      return state;
  }
};


export const getTokenByAddress = (address: string) => {
  const { state } = useStakingContractContext()
  const tokens = state?.tokens
  const token = tokens?.[address.toLowerCase()]
  return token
}



export const getStatusActiveStaking = (data: IStakingContractInfo[], active: boolean) => {
  const onlyStaking = data?.filter(((st: IStakingContractInfo) => st.stakingActive === active))
  return onlyStaking
}
