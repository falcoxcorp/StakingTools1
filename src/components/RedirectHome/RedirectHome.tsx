import { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const RedirectHome = () => {
  const navigate = useNavigate()

  useEffect(() => {
    return navigate('/')
  }, [navigate])
  return (
    <div></div>
  );

}

export default memo(RedirectHome);