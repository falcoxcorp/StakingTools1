import { memo } from 'react'
import { useParams } from 'react-router-dom';
import { TOKEN_TYPE_ENUM } from '../../../contracts/instances/interfaces';
import ContractSimpleContainer from './ContractSimpleContainer';
import ContractBasicContainer from './ContractBasicContainer';
import ContractStandardContainer from './ContractStandardContainer';


const ContactEditTokenTypeContainer = () => {
  const { _address, _token } = useParams()

  if (_token === TOKEN_TYPE_ENUM.SIMPLE) return (
    <ContractSimpleContainer address={_address as string} token={_token} />
  )
  if (_token === TOKEN_TYPE_ENUM.BASIC) return (
    <ContractBasicContainer address={_address as string} token={_token} />
  )
  if (_token === TOKEN_TYPE_ENUM.STANDARD) return (
    <ContractStandardContainer address={_address as string} token={_token} />
  )
}

export default memo(ContactEditTokenTypeContainer);