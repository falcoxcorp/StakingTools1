import { useEthers, useSendTransaction, useTokenAllowance } from "@usedapp/core";
import { useCallback, useEffect, useMemo } from "react";
import { CommonErc20CoinInstance } from "../../../../contracts/instances/BasicCoin/basic.coin.contract.instance";
import useToggle from "../../../../common/hooks/useToggle";
import { formatUnits } from "ethers/lib/utils";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { getParseEther } from "../../../../utils/number";


type Props = {
  TOKEN_ADDRESS: string,// address token 
  SPENDER_ADDRESS: string //address staking contract
}
export const useEnabledContract = ({ SPENDER_ADDRESS, TOKEN_ADDRESS }: Props) => {
  const { account } = useEthers()
  const { t } = useTranslation('staking')
  const { isOpen, onToggle } = useToggle()
  const allowance = useTokenAllowance(TOKEN_ADDRESS, account, SPENDER_ADDRESS)

  const instance = CommonErc20CoinInstance(SPENDER_ADDRESS)
  const { sendTransaction, state, resetState } = useSendTransaction();

  useEffect(() => {
    if (state) {
      if (state.status === 'Exception' || state.status === 'Fail') {
        toast.error(state.errorMessage as string)
        resetState()
        return
      } else if (state.status === 'Success') {
        toast.success(t('message.approve'))
        resetState()
        return
      }
    }
  }, [state, toast, resetState])

  const approve = useCallback(async (amount?: number | undefined) => {
    onToggle()
    await sendTransaction({
      to: TOKEN_ADDRESS,
      value: 0,
      data: instance.interface.encodeFunctionData('approve', [SPENDER_ADDRESS, getParseEther(amount ?? 5000)])
    }).then(() => { onToggle() }).catch(() => { onToggle() })

  }, [onToggle, TOKEN_ADDRESS, SPENDER_ADDRESS, sendTransaction]);

  return {
    allowance: useMemo(() => allowance && Number(formatUnits?.(allowance, 18)), [allowance, formatUnits]),
    approve,
    isLoading: isOpen
  }
}