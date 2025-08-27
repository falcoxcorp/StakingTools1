import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { ChildrenProps } from '../../../common/types';
import { TOKEN_TYPE_ENUM } from '../../../contracts/instances/interfaces';

// Data value of the provider context
type TokenContextValue = {
  token?: TOKEN_TYPE_ENUM
  setToken?: Dispatch<SetStateAction<TOKEN_TYPE_ENUM>>
}
// default value of the context
const defaultValue: TokenContextValue = {}

// create context
const TokenContext = createContext<TokenContextValue>(defaultValue);

// Proptypes of Provider component
type TokenContextProps = ChildrenProps & {
  children: any
}

/**
* Provider component
 * */
const TokenProvider = (props: TokenContextProps) => {
  const [token, setToken] = useState<TOKEN_TYPE_ENUM>(TOKEN_TYPE_ENUM.BASIC)

  return (
    <TokenContext.Provider
      value={{ token, setToken }}
      {...props}
    />
  );
}


// Default hook to retrieve context data
const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
}

export { TokenProvider, useTokenContext };