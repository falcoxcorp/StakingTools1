import { memo, useMemo } from 'react';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { QontoConnector, QontoStepIcon } from '../components/CreateTokenStepper/styled';
import { useTranslation } from 'react-i18next';
import CreateTokenStepperActions from '../components/CreateTokenStepper/CreateTokenStepperActions';
import { Form } from '../../../components/FormFields';
import { Box } from '@mui/material';
import FactoryFormContainer from './FactoryFormContainer';
import { useERC20StepStandardForm } from '../hooks/ERC20/useERC20StepStandardForm';
import { IRouterAddress } from '../../../settings/router_address';

const CreateTokenStepperStandardContainer = () => {
  const { t } = useTranslation('erc20')
  const { activeStep, handleBack, control, onSubmit, _supply, isLoading, paidByToken, chainId, watch, getValues, paymentAmount, status, nameToken, reset, isVerify,router, isCustomRouter } = useERC20StepStandardForm()

  const steps = useMemo(() => [
    t('stepper.stepper_1'),
    t('stepper.stepper_2'),
    t('stepper.stepper_3')
  ], [t])
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Form onSubmit={onSubmit} control={control} id='create-token-standard-form' isLoading={isLoading}>
        <Stepper sx={{
          mb: 4,
          '& .MuiStepLabel-labelContainer': {
            display: {
              xs: 'none', md: 'block'
            }
          }
        }
        } alternativeLabel activeStep={activeStep} connector={<QontoConnector />} >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box pt={2}>
          <FactoryFormContainer {...{ _supply, activeStep, paidByToken, chainId, watch, getValues, isLoading, status, nameToken, reset, paymentAmount }} router={router as IRouterAddress} isCustomRouter={isCustomRouter} />
        </Box>

        <CreateTokenStepperActions form='create-token-standard-form' {...{ handleBack, activeStep, onSubmit, chainId, paymentAmount, status, isVerify }} />
      </Form>
    </Stack>
  );
}


export default memo(CreateTokenStepperStandardContainer)