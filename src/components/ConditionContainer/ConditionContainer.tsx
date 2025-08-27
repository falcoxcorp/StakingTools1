import {FC, memo} from "react";

type ConditionContainerProps = {
  active?: boolean,
  alternative?: any,
  children?: React.ReactNode,
}

const ConditionContainer: FC<ConditionContainerProps> = ({active, children, alternative}) => {
  if (active) return children;
  return alternative || "";
};

export default memo(ConditionContainer);

