import { memo } from 'react'
import { StackItem } from '../../../../../components/StackItem';
import { useCallContractStandard } from '../../../hooks/standard/useCallContractStandard';
import { Content } from '../styled';
import { IContractCall } from '../../../interfaces/IContractCall';


type FalcoCoinFeeAddressProps = {
  title: string,
  contract: IContractCall
}

const FalcoCoinFeeAddress = ({ title, contract }: FalcoCoinFeeAddressProps) => {
  const { value } = useCallContractStandard({contract})

  return (
      <StackItem title={title} data={<Content>
        {value || '-'}
      </Content>} />
  );

}

export default memo(FalcoCoinFeeAddress);