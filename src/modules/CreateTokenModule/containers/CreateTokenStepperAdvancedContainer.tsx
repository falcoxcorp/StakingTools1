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
import { useERC20StepAdvancedForm } from '../hooks/ERC20/useERC20StepAdvancedForm';
import FactoryFormContainer from './FactoryFormContainer';

const CreateTokenStepperAdvancedContainer = () => {
  const { t } = useTranslation('erc20')
  const { activeStep, handleBack, control, onSubmit, _supply, isLoading, paidByToken, chainId, watch, getValues, paymentAmount, status, nameToken, reset, isVerify, getTaxBuy,
    getTaxSell } = useERC20StepAdvancedForm()

  const steps = useMemo(() => [
    t('stepper.stepper_1'),
    t('stepper.stepper_2'),
    t('stepper.stepper_3')
  ], [t])
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Form onSubmit={onSubmit} control={control} id='create-token-advanced-form' isLoading={isLoading}>
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
          <FactoryFormContainer {...{
            _supply, activeStep, paidByToken, chainId, watch, getValues, isLoading, status, nameToken, reset, paymentAmount, getTaxBuy,
            getTaxSell
          }} />
        </Box>

        <CreateTokenStepperActions
          form='create-token-advanced-form'
          {...{ handleBack, activeStep, onSubmit, chainId, paymentAmount, status, isVerify }}
        />
      </Form>
    </Stack>
  );
}


export default memo(CreateTokenStepperAdvancedContainer)