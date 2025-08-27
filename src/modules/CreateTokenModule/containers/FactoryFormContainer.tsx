import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { TOKEN_TYPE_ENUM } from '../../../contracts/instances/interfaces'
import { CreateTokenBasicStep } from '../components/FactoryFormBasic'
import { CreateTokenAdvancedStep } from '../components/FactoryFormAdvanced'
import { CreateTokenStandardStep } from '../components/FactoryFormStandard'
import { CreateTokenSimpleStep } from '../components/FactoryFormSimple'
import { RedirectHome } from '../../../components/RedirectHome'
import { IRouterAddress } from '../../../settings/router_address'

type FactoryFormContainerProps = {
  activeStep: number,
  _supply: number
  paidByToken: boolean
  chainId: number
  getValues: any,
  isLoading: boolean
  status: "loading" | "error" | "idle" | "success"
  nameToken: string
  reset: () => void
  paymentAmount: number
  watch: any
  getTaxBuy?: number[],
  getTaxSell?: number[],
  router?: IRouterAddress
  isCustomRouter?: boolean
}

const FactoryFormContainer = ({ getTaxBuy,
  getTaxSell, router, isCustomRouter=false, ...props }: FactoryFormContainerProps) => {
  const { token } = useParams()
  switch (token) {
    case TOKEN_TYPE_ENUM.SIMPLE:
      return <CreateTokenSimpleStep {...props} />

    case TOKEN_TYPE_ENUM.BASIC:
      return <CreateTokenBasicStep {...props} />

    case TOKEN_TYPE_ENUM.STANDARD:
      return <CreateTokenStandardStep {...props} router={router as IRouterAddress} isCustomRouter={isCustomRouter} />

    case TOKEN_TYPE_ENUM.ADVANCED:
      return <CreateTokenAdvancedStep {...props}  getTaxBuy={getTaxBuy || []}
      getTaxSell={getTaxSell || []} />

    default:
      return <RedirectHome/>
  }

}

export default memo(FactoryFormContainer);