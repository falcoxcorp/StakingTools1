import { useSendTransaction } from "@usedapp/core"
import { useCallback } from "react"
import { ethers } from "ethers"
import toast from "react-hot-toast"
import { TOKEN_FACTORY_COIN_TOKEN, METHODS_ERC20 } from "../interfaces"
import { useUtilsChecking } from "../../hooks/useUtilsChecking"
import { CommonErc20CoinInstance } from "../../contracts/instances/BasicCoin/basic.coin.contract.instance"
import { ERRORS, HandleStateError, HandleThrowError } from "../CreateTokenModule/constants/errors"
import { ICreateTokenAdvancedERC20Extender } from "../CreateTokenModule/hooks/ERC20/useERC20StepAdvancedForm"
import { getBigNumberSupply } from "../../utils/number"

export const useCreateTokenAdvancedPaidEther = () => {

  const { onVerifyNetworks, getContractAddress } = useUtilsChecking()
  const { sendTransaction, state, resetState } = useSendTransaction();

  const onPaidByToken = useCallback(async (createToken: ICreateTokenAdvancedERC20Extender) => {
    const tokens = ethers.utils.parseEther(createToken?.paymentAmount.toString());
    const instance = CommonErc20CoinInstance(createToken?._tokenAddress)
    const address = createToken?.network?.contractInstance?.address
    try {
      const approveTx = await sendTransaction({
        to: instance?.address,
        value: 0,
        data: instance.interface.encodeFunctionData(TOKEN_FACTORY_COIN_TOKEN.APPROVE, [
          address,
          tokens
        ]),
      });
      if (approveTx?.status === undefined) {
        HandleThrowError(ERRORS.METAMASK_TX_SIGNATURE)
      }

      const createTokenTx = await sendTransaction({
        to: address,
        value: 0,
        gasLimit: 3000000,
        data: createToken?.network?.contractInstance?.interface.encodeFunctionData(METHODS_ERC20.DEPLOY_PAID_BY_TOKEN, [
          createToken._name.toUpperCase(),
          createToken._symbol.toUpperCase(),
          getBigNumberSupply(createToken._supply),
          [
            createToken.network.routerAddress,
            createToken._devWallet,
            createToken._marketingWallet,
            createToken._charityTaxWallet,
            createToken._tokenOwner,
          ],
          [
            createToken._devTaxBuy,
            createToken._marketingTaxBuy,
            createToken._charityTaxBuy,
            createToken._liquidityTaxBuy,
            createToken._devTaxSell,
            createToken._marketingTaxSell,
            createToken._charityTaxSell,
            createToken._liquidityTaxSell,
          ],
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

  const onPaidByEther = useCallback(async (createToken: ICreateTokenAdvancedERC20Extender) => {
    const address = createToken?.network?.contractInstance?.address
    try {
      const createTokenTx = await sendTransaction({
        to: address,
        gasLimit: 10000000,
        value: ethers.utils.parseEther(createToken?.paymentAmount?.toString()),
        data: createToken?.network?.contractInstance?.interface.encodeFunctionData(METHODS_ERC20.DEPLOY_PAID_ETHER, [
          createToken._name.toUpperCase(),
          createToken._symbol.toUpperCase(),
          getBigNumberSupply(createToken._supply),
          [
            createToken.network.routerAddress,
            createToken._devWallet,
            createToken._marketingWallet,
            createToken._charityTaxWallet,
            createToken._tokenOwner,
          ],
          [
            createToken._devTaxBuy,
            createToken._marketingTaxBuy,
            createToken._charityTaxBuy,
            createToken._liquidityTaxBuy,
            createToken._devTaxSell,
            createToken._marketingTaxSell,
            createToken._charityTaxSell,
            createToken._liquidityTaxSell,
          ],
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

  // CREATE TOKENS FUNCTION 
  const onCreateTokenPaidEther = useCallback(async (createToken: ICreateTokenAdvancedERC20Extender) => {
    onVerifyNetworks(createToken?.chainId)

    if (createToken?.paidByToken) {
      return await onPaidByToken(createToken)
    }
    return await onPaidByEther(createToken)

  }, [sendTransaction, onPaidByEther, onPaidByToken]);

  return {
    onCreateTokenPaidEther, state, resetState
  }

}