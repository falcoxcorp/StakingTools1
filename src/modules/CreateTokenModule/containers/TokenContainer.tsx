import { memo } from 'react'
import { useParams } from 'react-router-dom';
import { TOKEN_TYPE_ENUM } from '../../../contracts/instances/interfaces';
import { CreateTokenStepperBasicContainer, CreateTokenStepperAdvancedContainer, CreateTokenStepperStandardContainer } from '.';
import CreateTokenStepperSimpleContainer from './CreateTokenStepperSimpleContainer';
import { RedirectHome } from '../../../components/RedirectHome';

const TokenContainer = () => {
  const { token } = useParams()
  switch (token) {
    case TOKEN_TYPE_ENUM.SIMPLE:
      return <CreateTokenStepperSimpleContainer />

    case TOKEN_TYPE_ENUM.BASIC:
      return <CreateTokenStepperBasicContainer />

    case TOKEN_TYPE_ENUM.STANDARD:
      return <CreateTokenStepperStandardContainer />

    case TOKEN_TYPE_ENUM.ADVANCED:
      return <CreateTokenStepperAdvancedContainer />

    default:
      return <RedirectHome/>
  }

}

export default memo(TokenContainer);