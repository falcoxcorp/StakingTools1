import { memo, useMemo } from 'react';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useTranslation } from 'react-i18next';
import { Form } from '../../../components/FormFields';
import { Box } from '@mui/material';
import { CreateStakingStep } from '../components/CreateStakingStep';
import { QontoConnector, QontoStepIcon } from '../../CreateTokenModule/components/CreateTokenStepper/styled';
import { useSmartChefInitialize } from '../hooks/useSmartChefInitialize';
import { StakingStepperActions } from '../components/StakingStepperActions';


const CreateStakingStepperContainer = () => {
  const { t } = useTranslation('staking')
  const { activeStep, handleBack, control, onSubmit, isLoading, paidByToken, chainId, watch, getValues, status, nameToken, reset, isVerify, paymentAmount, activeLimitUser, startBlock, bonusEndBlock } = useSmartChefInitialize()

  const steps = useMemo(() => [
    t('stepper.stepper_1'),
    t('stepper.stepper_2'),
    t('stepper.stepper_3')
  ], [t])
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Form onSubmit={onSubmit} control={control} id='staking-initialize-form' isLoading={isLoading}>
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
          <CreateStakingStep {...{ activeStep, paidByToken, chainId, watch, getValues, isLoading, status, nameToken, reset, paymentAmount, activeLimitUser, startBlock, bonusEndBlock }} />
        </Box>

        <StakingStepperActions form='staking-initialize-form' {...{ handleBack, activeStep, onSubmit, chainId, status, isVerify }} />
      </Form>
    </Stack>
  );
}


export default memo(CreateStakingStepperContainer)