import { memo } from 'react'
import { StackItem } from '../../../../../components/StackItem';
import { Content } from '../styled';
import { useOwnerCall } from '../../../hooks/standard/useOwnerCall';
import { IContractCall } from '../../../interfaces/IContractCall';


type FalcoCoinOwnerProps = {
  title: string,
  contract: IContractCall
}

const FalcoCoinOwner = ({ title, contract }: FalcoCoinOwnerProps) => {
  const { owner } = useOwnerCall({ contract })

  return (
    <StackItem title={title} data={<Content>
      {owner}
    </Content>} />
  );

}

export default memo(FalcoCoinOwner);