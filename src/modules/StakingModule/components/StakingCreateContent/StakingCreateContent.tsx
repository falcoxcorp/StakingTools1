import { memo } from "react";
import { BoxFormContent, FormPaper } from "../../../CreateTokenModule/components/CreateTokenForm/styled";
import { Grid, Typography } from "@mui/material";

const StakingCreateContent = () => {
  return(
    <FormPaper>
    <BoxFormContent>
      <Grid container spacing={{ xs: 1, md: 2 }} height={'100%'} mt={'0px !important'} >
        <Grid item xs={12}>
          <Typography variant="h1">Inicializar staking </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* <StakingCreateForm /> */}
        </Grid>
      </Grid>
    </BoxFormContent>
  </FormPaper>
  )
};

export default memo(StakingCreateContent);
