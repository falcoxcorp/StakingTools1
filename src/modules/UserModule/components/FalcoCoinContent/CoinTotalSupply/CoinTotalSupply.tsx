import { memo } from 'react'
import { StackItem } from '../../../../../components/StackItem';
import { useCallContractStandard } from '../../../hooks/standard/useCallContractStandard';
import { Content, Section } from '../styled';
import { IContractCall } from '../../../interfaces/IContractCall';
import { formatUnits } from 'ethers/lib/utils';


type CoinTotalSupplyProps = {
  title: string,
  contract: IContractCall
  decimals?: number
}

const CoinTotalSupply = ({ title, contract, decimals = 18 }: CoinTotalSupplyProps) => {
  const { value } = useCallContractStandard({ contract })

  return (
    <Section>
      <StackItem title={title} data={<Content>
        {formatUnits(value, decimals) || 0}
      </Content>} />
    </Section>
  );

}

export default memo(CoinTotalSupply);