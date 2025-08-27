import { memo } from "react";
import PageCenterLayout from "../../../layouts/pages/PageCenterLayout";
import CreateStakingStepperContainer from "./CreateStakingStepperContainer";
import { BoxFormContent, FormPaper } from "../../CreateTokenModule/components/CreateTokenForm/styled";

const StakingCreateContainer = () => {
  return (
    <PageCenterLayout>
      <FormPaper>
        <BoxFormContent>
          <CreateStakingStepperContainer />
        </BoxFormContent>
      </FormPaper>
    </PageCenterLayout>
  );
};

export default memo(StakingCreateContainer);
