import { useEthers } from "@usedapp/core"
import { useCallback } from "react"
import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"

export const useUtilsChecking = () => {
  const { t } = useTranslation(['common', 'createToken'])
  const { account, chainId } = useEthers()

  const regex = /^0x000000000000000000000000000000000000/i;

  const onVerifyNetworks = useCallback(async (_chainId: number) => {
    if (!account) return toast.error(t('connectMetamask'))
    if (chainId !== _chainId) return toast.error(t('networks.connect.bsc'))
  }, [account])

  type ContractAddressProps = {
    logs: any[],
    address: string //address network
  }
  const getContractAddress = useCallback(async ({
    address, logs
  }: ContractAddressProps) => {
    const contractLogs = logs.filter((log: any) => log.address && !log.address.match(regex));
    const contractAddresses = contractLogs.map((log: any) => log.address);
    if (contractAddresses.length > 0) {
      const contractAddress = contractAddresses?.filter(add => add !== address)?.[0];
      return contractAddress
    }
    return 'No se obtuvo la dirección, por favor revisar ultima transacion de tu Billetera'
  }, [])

  return {
    onVerifyNetworks,
    getContractAddress
  }
}