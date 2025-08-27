import {Button} from "@mui/material";
import MuiLoadingButton, {LoadingButtonProps} from "@mui/lab/LoadingButton";

export const LoadingButton = ({loading, ...props}: LoadingButtonProps) => {
  if (loading) return <MuiLoadingButton {...props} loading />;

  return <Button {...props} />;
};
