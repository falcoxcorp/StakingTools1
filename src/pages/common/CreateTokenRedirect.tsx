import { useParams, useNavigate } from 'react-router-dom';
import { networks } from '../../settings/networks';
import { ChildrenProps } from '../../common/types';


export const CreateTokenRedirect = ({ children }: ChildrenProps) => {
  const { chainName } = useParams()
  const navigate = useNavigate();

  if (chainName && networks?.find(network => network?.name === chainName)) {
    return (
      <>
        {children}
      </>
    )
  }
  return navigate('/')

}
