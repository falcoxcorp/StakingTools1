import { memo, useEffect } from 'react'
import { useEthers } from '@usedapp/core';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/Loading';
import { ConditionContainer } from '../components/ConditionContainer';
import { useCallOwner } from '../hooks/useCallOwner';
import { ChildrenProps } from '../common/types';

const AdminLayoutApp = ({ children }: ChildrenProps) => {
  const navigate = useNavigate()
  const { account, isLoading } = useEthers()
  const { owner } = useCallOwner()

  useEffect(() => {
    if (!isLoading && !!owner && account !== owner) {
      return navigate('/')
    }
  }, [navigate, account, owner, isLoading])

  return (
    <ConditionContainer active={account === owner} alternative={<Loader />}>
      {children}
    </ConditionContainer>
  );

}

export default memo(AdminLayoutApp);