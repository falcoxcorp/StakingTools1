import { memo, useEffect, useMemo } from 'react'
import { ChildrenProps } from '../common/types';
import { useEthers } from '@usedapp/core';
import { useCallOwner } from '../hooks/useCallOwner';
import { useCookies } from 'react-cookie'
const OwnerAdminLayout = ({ children }: ChildrenProps) => {
  const { account } = useEthers()
  const { owner, token, chainId } = useCallOwner()
  const cookie = useMemo(() => `owner_${token}_${chainId}`, [token]) 
  const [cookies, setCookie] = useCookies([cookie]);

  useEffect(() => {
    if (account && owner && account === owner) {
      const cook = `${chainId}_${token}_${account}`
      const day = new Date();
      day.setDate(day.getDate() + 1);
      setCookie(cookie, cook, { path: '/', expires: day });
    }
  }, [account, owner, cookies, setCookie, cookie, token,chainId]);

  if (cookies?.[cookie]) {
    return <>{children}</>;
  }

  return <></>

}

export default memo(OwnerAdminLayout);