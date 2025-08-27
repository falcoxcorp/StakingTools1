import { Stack } from "@mui/material";
import { memo } from "react";
import { NetworkSection } from "../../../NetworkSection";
import AlertChain from "./AlertChain";
import { INetworks } from "../../../../../../contracts/instances/interfaces";
import { useTranslation } from "react-i18next";

type NetworkFormProps = {
  chainId: number;
  networks: INetworks[];
  title?: string;
};

const NetworkForm = ({ chainId, networks, title }: NetworkFormProps) => {
  const { t } = useTranslation("common");
  return (
    <Stack gap={4}>
      <AlertChain _chainId={chainId} message="staking:alert:message" />
      <NetworkSection title={t(title || "selectToken")} networks={networks} />
    </Stack>
  );
};

export default memo(NetworkForm);
