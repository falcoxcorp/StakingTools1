import { memo } from 'react'
import { DAppProvider } from '@usedapp/core'
import { ChildrenProps } from '../../common/types'
import { config } from '../../settings/networks';

const UseDappProvider = ({ children }: ChildrenProps) => {
 
  return (
    <DAppProvider config={config}>
      {children}
    </DAppProvider>
  );

}

export default memo(UseDappProvider);