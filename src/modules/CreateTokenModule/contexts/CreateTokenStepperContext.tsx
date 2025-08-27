import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { ChildrenProps } from '../../../common/types';
// Data value of the provider context
type CreateTokenStepperContextValue = {
  activeStep?: number,
  setActiveStep?: Dispatch<SetStateAction<number>>
}
// default value of the context
const defaultValue: CreateTokenStepperContextValue = {}

// create context
const CreateTokenStepperContext = createContext<CreateTokenStepperContextValue>(defaultValue);

// Proptypes of Provider component
type CreateTokenStepperContextProps = ChildrenProps & {
  children: any
}

/**
* Provider component
 * */
const CreateTokenStepperContextProvider = (props: CreateTokenStepperContextProps) => {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <CreateTokenStepperContext.Provider
      value={{
        activeStep, setActiveStep
      }}
      {...props}
    />
  );
}


// Default hook to retrieve context data
const useCreateTokenStepperContext = () => {
  const context = useContext(CreateTokenStepperContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
}

export { CreateTokenStepperContextProvider, useCreateTokenStepperContext };