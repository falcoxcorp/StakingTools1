import { memo } from 'react'
import { BoxFormContent, FormPaper } from './styled';
import { Grid } from '@mui/material';
import TokenContainer from '../../containers/TokenContainer';

const CreateTokenForm = () => {

  return (
    <FormPaper>
      <BoxFormContent>
        <Grid container spacing={{ xs: 1, md: 2 }} height={'100%'} mt={'0px !important'} >
          <Grid item xs={12}>
            <TokenContainer />
          </Grid>
        </Grid>
      </BoxFormContent>
    </FormPaper>
  );

}

export default memo(CreateTokenForm);