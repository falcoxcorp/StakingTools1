import { createContext, useContext } from 'react';
import { ChildrenProps } from '../../../common/types';
import { TOKEN_TYPE_ENUM } from '../../../contracts/instances/interfaces';
import { Contract } from "@ethersproject/contracts";

// Data value of the provider context
type CoinContextValue = {
  contractAddress?: string
  token?: TOKEN_TYPE_ENUM
  Instance?: (_tokenAddress: string) => Contract
  coinInstance?: Contract
}
// default value of the context
const defaultValue: CoinContextValue = {}

// create context
const CoinContext = createContext<CoinContextValue>(defaultValue);

// Proptypes of Provider component
type CoinContextProps = ChildrenProps & {
  children: any
  contractAddress: string
  token: TOKEN_TYPE_ENUM
  Instance: (_tokenAddress: string) => Contract  
}

/**
* Provider component
 * */
const CoinProvider = ({ contractAddress, token,Instance, ...props }: CoinContextProps) => {
  const coinInstance = Instance(contractAddress)
  return (
    <CoinContext.Provider
      value={{ contractAddress, token, coinInstance }}
      {...props}
    />
  );
}


// Default hook to retrieve context data
const useCoinContext = () => {
  const context = useContext(CoinContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
}

export { CoinProvider, useCoinContext };