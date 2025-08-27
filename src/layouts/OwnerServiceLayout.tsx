import { memo} from 'react'
import { ChildrenProps } from '../common/types';
import { useEthers } from '@usedapp/core';
import { SERVICE_OWNER } from '../settings/config/services';


const OwnerServiceLayout = ({ children }: ChildrenProps) => {
  const { account } = useEthers()
  if(!account) return <></>
  if(account && SERVICE_OWNER.includes(account)) return <>{children}</>
}

export default memo(OwnerServiceLayout);