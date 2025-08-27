import { memo } from 'react'
import { ChildrenProps } from '../../common/types';
import UseDappProvider from './UseDappProvider';

const Web3Provider = ({ children }: ChildrenProps) => {

  return (
    <UseDappProvider>
      {children}
    </UseDappProvider>
  );

}

export default memo(Web3Provider);