import { memo } from 'react'
import { StackItem } from '../../../../../components/StackItem';
import { Content } from '../styled';
import { IContractCall } from '../../../interfaces/IContractCall';
import { useStandardFeeCall } from '../../../hooks/standard/useStandardFeeCall';
import { COIN_ENUM } from '../../../constants/token-basic';
import { useTranslation } from 'react-i18next';


type StandardFeeCallProps = {
  method: COIN_ENUM,
  contract: IContractCall
  symbol: any
  useCallHook?: any
}

const StandardFeeCall = ({ method, contract, symbol, useCallHook = useStandardFeeCall }: StandardFeeCallProps) => {
  const { t } = useTranslation('standardCoin')
  const { value } = useCallHook({ contract: { ...contract, method } })
  return (
    <StackItem title={t(method)} data={<Content>
      {value} {symbol}
    </Content>} />
  );

}

export default memo(StandardFeeCall);