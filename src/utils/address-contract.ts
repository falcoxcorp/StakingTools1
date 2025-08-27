import { config } from "../settings/networks";

export const getContractAddressPath = ({
  chainId,
  address,
}: {
  chainId: number;
  address: string;
}) => {
  const network: any =
    chainId && config?.networks?.find((nt) => nt.chainId === chainId);

  switch (chainId) {
    case 995:
      return `${network?.blockExplorerUrl}/contract/evm/${address}`;

    default:
      `${network?.blockExplorerUrl}/address/${address}`;
  }
};
