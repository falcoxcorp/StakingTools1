import { memo } from 'react'
import { StackItem } from '../../../../../components/StackItem';
import { useCallContractName } from '../../../hooks/standard/useCallContractName';
import { Content, Section } from '../styled';
import { IContractCall } from '../../../interfaces/IContractCall';

type FalcoCoinNameProps = {
  title: string,
  contract: IContractCall
}

const FalcoCoinName = ({ title, contract }: FalcoCoinNameProps) => {
  const { name } = useCallContractName({ contract })
  return (
    <Section>
      <StackItem title={title} data={<Content>
        {name || '-'}
      </Content>} />
    </Section>
  );

}

export default memo(FalcoCoinName);