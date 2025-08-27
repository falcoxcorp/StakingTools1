import { TransactionStatus } from "@usedapp/core"
import { useMemo } from "react"

export type ContractStatusProps = {
  isLoading: boolean,
  isSuccess: boolean,
  error: boolean,
  state: TransactionStatus
}

export const useContractStatus = (state: TransactionStatus): ContractStatusProps => {

  const isLoading = useMemo(() => state?.status === 'PendingSignature', [state])
  const isSuccess = useMemo(() => state?.status === 'Success', [state])
  const error = useMemo(() => state?.status === 'Exception' || state?.status === 'Fail', [state])

  return {
    isLoading,
    isSuccess,
    error,
    state
  }
}