import { useSendTransaction } from "@usedapp/core"
import { useCallback } from "react"
import { ethers } from "ethers"
import toast from "react-hot-toast"
import { useUtilsChecking } from "../../../hooks/useUtilsChecking"
import { ISmartChefExtend } from "./useSmartChefInitialize"
import { TOKEN_FACTORY_COIN_TOKEN } from "../../interfaces"
import { ERRORS, HandleStateError, HandleThrowError } from "../../CreateTokenModule/constants/errors"
import { getParseEther } from "../../../utils/number"
import { METHODS_STAKING_FACTORY } from "../interfaces/staking.factory"
import { CommonErc20CoinInstance as CommonErc20CoinInstance } from "../../../contracts/instances/BasicCoin/basic.coin.contract.instance"
import { SERVICE_CONFIG } from "../../../settings/config/services"

export const useCreateStakingPaidEther = () => {
  const { onVerifyNetworks, getContractAddress } = useUtilsChecking()
  const { sendTransaction, state, resetState } = useSendTransaction();

  const onPaidByToken = useCallback(async (createStaking: ISmartChefExtend) => {
    const tokens = ethers.utils.parseEther(createStaking?.paymentAmount.toString());
    // @ts-ignore
    const instance = CommonErc20CoinInstance(createStaking?.tokenAddress?.address)
    const service = SERVICE_CONFIG[createStaking.chainId]

    //staking address
    const stakingAddress = createStaking?.network?.contractInstance?.address

    try {
      const approveTx = await sendTransaction({
        to: instance?.address,
        value: 0,
        data: instance?.interface.encodeFunctionData(TOKEN_FACTORY_COIN_TOKEN.APPROVE, [
          service,
          tokens
        ]),
      });
      if (approveTx?.status === undefined) {
        HandleThrowError(ERRORS.METAMASK_TX_SIGNATURE)
      }

      const createTokenTx = await sendTransaction({
        to: stakingAddress,
        value: 0,
        // gasLimit: 30000000,
        data: createStaking?.network?.contractInstance?.interface.encodeFunctionData(METHODS_STAKING_FACTORY.DEPLOY_PAID_BY_TOKEN, [
          createStaking._service,
          instance?.address,
          createStaking.stakedToken,
          createStaking.rewardToken,
          getParseEther(createStaking.rewardPerBlock),
          createStaking.startBlock,
          createStaking.bonusEndBlock,
          getParseEther(createStaking.poolLimitPerUser),
          getParseEther(createStaking.numberBlocksForUserLimit as unknown as number)
        ]),
      });
      if (createTokenTx?.status === undefined) {
        HandleThrowError(ERRORS.METAMASK_TX_SIGNATURE)
      }
      return true

    } catch (error) {
      HandleStateError(state)
      if (error) {
        // @ts-ignore
        toast.error(error?.message || 'error')
      }
      // @ts-ignore
      HandleThrowError(error?.message)
    }
  }, [sendTransaction, ethers, toast, getContractAddress, state])

  const onPaidByEther = useCallback(async (createStaking: ISmartChefExtend) => {
    const address = createStaking?.network?.contractInstance?.address   
    try {
      const createTokenTx = await sendTransaction({
        to: address,
        // gasLimit: 30000000,
        value: ethers.utils.parseEther(createStaking?.paymentAmount?.toString()),
        data: createStaking?.network?.contractInstance?.interface.encodeFunctionData(METHODS_STAKING_FACTORY.DEPLOY_PAID_ETHER, [
          createStaking._service,
          createStaking.stakedToken,
          createStaking.rewardToken,
          getParseEther(createStaking.rewardPerBlock),
          createStaking.startBlock,
          createStaking.bonusEndBlock,
          getParseEther(createStaking.poolLimitPerUser),
          getParseEther(createStaking.numberBlocksForUserLimit as unknown as number)
        ]),
      });
      if (createTokenTx?.status === undefined) {
        HandleThrowError(ERRORS.METAMASK_TX_SIGNATURE)
      }
      return true

    } catch (error) {
      HandleStateError(state)
      if (error) {
        // @ts-ignore
        toast.error(error?.message || 'error')
      }
      // @ts-ignore
      HandleThrowError(error?.message)
    }
  }, [sendTransaction, ethers, toast, getContractAddress, state])

  // CREATE STAKING FUNCTION 
  const onCreateStakingPaidEther = useCallback(async (createStaking: ISmartChefExtend) => {
    onVerifyNetworks(createStaking?.chainId)

    if (createStaking?.paidByToken) {
      return await onPaidByToken(createStaking)
    }
    return await onPaidByEther(createStaking)

  }, [sendTransaction, onPaidByEther, onPaidByToken]);

  return {
    onCreateStakingPaidEther, state, resetState
  }

}