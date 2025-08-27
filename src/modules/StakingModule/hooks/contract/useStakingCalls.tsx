import { useCall, useEthers } from "@usedapp/core";
import { METHODS_STAKING_FACTORY } from "../../interfaces/staking.factory";
import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { StakingTokenInstance } from "../../../../contracts/staking/staking.token.contract.instance";
import { formatEther } from "ethers/lib/utils";
import { IStakingUserInfo } from "../../interfaces/ISmartChef";
import { isEmpty } from "lodash";


export const useCallPendingReward = (stakingTokenAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = StakingTokenInstance(stakingTokenAddress)

  const { value: pendingReward } = useCall(account && chainId && {
    contract: instance,
    method: METHODS_STAKING_FACTORY.pendingReward,
    args: [account]
  }) ?? {}

  const fetch = useCallback(() => pendingReward && Number(formatEther?.(pendingReward?.[0]) || 0), [pendingReward]);
  return useQuery<any>([METHODS_STAKING_FACTORY.pendingReward, instance.address, account, chainId], fetch, {
    enabled: !isEmpty(pendingReward),
    refetchInterval: 5000
  });
};

export const useCallUserInfo = (stakingTokenAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = StakingTokenInstance(stakingTokenAddress)

  const { value: userInfo } = useCall(account && chainId && {
    contract: instance,
    method: METHODS_STAKING_FACTORY.userInfo,
    args: [account]
  }) ?? {}
  const fetch = useCallback(() => userInfo && {
    amount: Number(formatEther?.(userInfo?.amount)) || 0,
    rewardDebt: Number(formatEther?.(userInfo?.rewardDebt)) || 0
  }, [userInfo]);
  return useQuery<IStakingUserInfo>([METHODS_STAKING_FACTORY.userInfo, instance.address, account, chainId, userInfo], fetch, { enabled: !!instance && !isEmpty(userInfo) });
};

export const useCallRewardPerBlock = (stakingTokenAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = StakingTokenInstance(stakingTokenAddress)

  const { value: rewardPerBlock } = useCall(account && chainId && {
    contract: instance,
    method: METHODS_STAKING_FACTORY.rewardPerBlock,
    args: []
  }) ?? {}

  const fetch = useCallback(() => rewardPerBlock && Number(formatEther?.(rewardPerBlock?.[0]) || 0), [rewardPerBlock]);
  return useQuery<number>([METHODS_STAKING_FACTORY.rewardPerBlock, instance.address, account, chainId], fetch, { enabled: !isEmpty(rewardPerBlock) });
};

export const useCallPoolLimitPerUser = (stakingTokenAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = StakingTokenInstance(stakingTokenAddress)

  const { value: poolLimitPerUser } = useCall(account && chainId && {
    contract: instance,
    method: METHODS_STAKING_FACTORY.poolLimitPerUser,
    args: []
  }) ?? {}

  const fetch = useCallback(() => poolLimitPerUser && Number(formatEther?.(poolLimitPerUser?.[0]) || 0), [poolLimitPerUser]);
  return useQuery<number>([METHODS_STAKING_FACTORY.poolLimitPerUser, instance.address, account, chainId], fetch, { enabled: !isEmpty(poolLimitPerUser) });
};

export const useCallStakedTokenAmount = (stakingTokenAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = StakingTokenInstance(stakingTokenAddress)

  const { value: stakedTokenAmount } = useCall(account && chainId && {
    contract: instance,
    method: METHODS_STAKING_FACTORY.stakedTokenAmount,
    args: []
  }) ?? {}

  const fetch = useCallback(() => stakedTokenAmount && Number(formatEther?.(stakedTokenAmount?.[0]) || 0), [stakedTokenAmount]);
  return useQuery<number>([METHODS_STAKING_FACTORY.stakedTokenAmount, instance.address, account, chainId], fetch, { enabled: !isEmpty(stakedTokenAmount) });
};


export const useCallStakedToken = (stakingTokenAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = StakingTokenInstance(stakingTokenAddress)

  const { value: stakedToken } = useCall(account && chainId && {
    contract: instance,
    method: METHODS_STAKING_FACTORY.stakedToken,
    args: []
  }) ?? {}

  const fetch = useCallback(() => stakedToken && stakedToken?.[0], [stakedToken]);
  return useQuery<any>([METHODS_STAKING_FACTORY.stakedToken, instance.address, account, chainId], fetch, { enabled: !isEmpty(stakedToken) && !isEmpty(stakingTokenAddress) });
};

export const useCallRewardToken = (stakingTokenAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = StakingTokenInstance(stakingTokenAddress)

  const { value: rewardToken } = useCall(account && chainId && {
    contract: instance,
    method: METHODS_STAKING_FACTORY.rewardToken,
    args: []
  }) ?? {}

  const fetch = useCallback(() => rewardToken && rewardToken?.[0], [rewardToken]);
  return useQuery<any>([METHODS_STAKING_FACTORY.rewardToken, instance.address, account, chainId], fetch, { enabled: !isEmpty(rewardToken) });
};


export const useCallOwner = (stakingTokenAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = StakingTokenInstance(stakingTokenAddress)

  const { value: owner } = useCall(account && chainId && {
    contract: instance,
    method: METHODS_STAKING_FACTORY.owner,
    args: []
  }) ?? {}

  const fetch = useCallback(() => owner && owner?.[0], [owner]);
  return useQuery<any>([METHODS_STAKING_FACTORY.owner, instance.address, account, chainId], fetch, { enabled: !isEmpty(owner) });
};