import { memo } from 'react'
import { useCallContractStandard } from '../../../hooks/standard/useCallContractStandard';
import { BigNumber, utils } from 'ethers';
import { Content, Section } from '../../FalcoCoinContent/styled';
import { StackItem } from '../../../../../components/StackItem';
import { IContractCall } from '../../../interfaces/IContractCall';

type FeeItemProps = {
  contract: IContractCall
  title: string
}

const FeeItem = ({ contract, title }: FeeItemProps) => {
  const { value } = useCallContractStandard({ contract })

  const bigNumber = BigNumber.from(value);
  const decimalValue = utils.formatUnits(bigNumber, 2); // 18 es el número de decimales de Ethereum

  return (
    <Section>
      <StackItem title={title} data={
        <Content>
          {Number(decimalValue || 0).toFixed(0)} %
        </Content>} />
    </Section>
  )

}

export default memo(FeeItem);