import { memo } from 'react'
import { StackItem } from '../../../../../components/StackItem';
import { useCallContractStandard } from '../../../hooks/standard/useCallContractStandard';

import { Content, Section } from '../styled';
import { IContractCall } from '../../../interfaces/IContractCall';


type FalcoCoinSymbolProps = {
  title: string,
  contract: IContractCall
}

const FalcoCoinSymbol = ({ title, contract }: FalcoCoinSymbolProps) => {
  const { value } = useCallContractStandard({ contract })

  return (
    <Section>
      <StackItem title={title} data={<Content>
        {value || '-'}
      </Content>} />
    </Section>
  );

}

export default memo(FalcoCoinSymbol);