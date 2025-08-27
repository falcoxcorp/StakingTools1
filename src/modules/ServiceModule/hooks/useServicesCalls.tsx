import { useCall, useEthers } from "@usedapp/core";
import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { isEmpty } from "lodash";
import { ServiceContractInstance } from "../../../contracts/service/service.instance";
import { METHODS_SERVICE } from "../interfaces/service.interface";
import { ethers } from "ethers";
import { SERVICE_ENUM } from "../../../settings/service";
import { getParseWeiToEther } from "../../../utils/number";


export const useCallOwner = (serviceAddress: string) => {
  const { account, chainId } = useEthers()

  const { value: owner } = useCall(serviceAddress && {
    contract: ServiceContractInstance(serviceAddress),
    method: METHODS_SERVICE.owner,
    args: []
  }) ?? {}

  const fetch = useCallback(() => owner && owner?.[0], [owner]);
  return useQuery<any>([METHODS_SERVICE.owner, serviceAddress, account, chainId], fetch, { enabled: !isEmpty(owner) || !!serviceAddress });
};


export const useCallGetFee = (serviceAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = ServiceContractInstance(serviceAddress)

  const { value: fee } = useCall(account && chainId && {
    contract: instance,
    method: METHODS_SERVICE.fee,
    args: []
  }) ?? {}

  const fetch = useCallback(() => fee && ({
    developer: ethers.BigNumber.from(fee?.developer).toNumber(),
    marketing: ethers.BigNumber.from(fee?.marketing).toNumber(),
    admin: ethers.BigNumber.from(fee?.admin).toNumber(),

  }), [fee]);
  return useQuery<any>([METHODS_SERVICE.fee, instance.address, account, chainId], fetch, { enabled: !isEmpty(fee) });
};


export const useCallGetAdminWallet = (serviceAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = ServiceContractInstance(serviceAddress)

  const { value: adminWallet } = useCall(account && chainId && {
    contract: instance,
    method: METHODS_SERVICE.adminWallet,
    args: []
  }) ?? {}

  const fetch = useCallback(() => adminWallet && ({
    developer: adminWallet?.developer,
    marketing: adminWallet?.marketing,
    admin: adminWallet?.admin
  }), [adminWallet]);
  return useQuery<any>([METHODS_SERVICE.adminWallet, instance.address, account, chainId], fetch, { enabled: !isEmpty(adminWallet) });
};

export const useCallGetServicePayment = (serviceAddress: string, service: SERVICE_ENUM) => {
  const { account, chainId } = useEthers()
  const instance = ServiceContractInstance(serviceAddress)

  const { value: getServicePayment } = useCall(account && service && chainId && {
    contract: instance,
    method: METHODS_SERVICE.getServicePayment,
    args: [service]
  }) ?? {}

  const fetch = useCallback(() => getServicePayment && getParseWeiToEther(getServicePayment?.[0]), [getServicePayment]);
  return useQuery<any>([METHODS_SERVICE.getServicePayment, service, instance.address, account, chainId], fetch, { enabled: !isEmpty(getServicePayment) });
};

export const useCallGetServiceTokenPayment = (serviceAddress: string, service: SERVICE_ENUM, tokenAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = ServiceContractInstance(serviceAddress)

  const { value: getServiceTokenPayment } = useCall(account && tokenAddress && service && chainId && {
    contract: instance,
    method: METHODS_SERVICE.getServiceTokenPayment,
    args: [service, tokenAddress]
  }) ?? {}

  const fetch = useCallback(() => getServiceTokenPayment && getParseWeiToEther(getServiceTokenPayment?.[0]), [getServiceTokenPayment]);
  return useQuery<any>([METHODS_SERVICE.getServiceTokenPayment, service, tokenAddress, instance.address, account, chainId], fetch, { enabled: !isEmpty(getServiceTokenPayment) });
};

export const useCallGetBalanceToken = (serviceAddress: string, tokenAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = ServiceContractInstance(serviceAddress)

  const { value: getBalanceToken } = useCall(account && tokenAddress && chainId && {
    contract: instance,
    method: METHODS_SERVICE.getBalanceToken,
    args: [tokenAddress]
  }) ?? {}

  const fetch = useCallback(() => getBalanceToken && getParseWeiToEther(getBalanceToken?.[0]), [getBalanceToken]);
  return useQuery<any>([METHODS_SERVICE.getBalanceToken, tokenAddress, instance.address, account, chainId], fetch, { enabled: !isEmpty(getBalanceToken) });
};

export const useCallGetBalanceEther = (serviceAddress: string) => {
  const { account, chainId } = useEthers()
  const instance = ServiceContractInstance(serviceAddress)

  const { value: getBalanceEther } = useCall(account && chainId && {
    contract: instance,
    method: METHODS_SERVICE.getBalanceEther,
    args: []
  }) ?? {}

  const fetch = useCallback(() => getBalanceEther && getParseWeiToEther(getBalanceEther?.[0]), [getBalanceEther]);
  return useQuery<any>([METHODS_SERVICE.getBalanceEther, instance.address, account, chainId], fetch, { enabled: !isEmpty(getBalanceEther) });
};

