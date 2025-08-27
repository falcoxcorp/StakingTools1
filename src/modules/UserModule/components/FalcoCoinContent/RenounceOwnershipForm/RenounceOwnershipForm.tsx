import { memo } from 'react'
import { useOwnerCall } from '../../../hooks/standard/useOwnerCall';
import { StackItem } from '../../../../../components/StackItem';
import { Skeleton } from '@mui/material';
import RenounceOwnerButton from './RenounceOwnerButton';
import { IContractCall } from '../../../interfaces/IContractCall';

type RenounceOwnershipFormProps = {
  title: string,
  contract: IContractCall
}

const RenounceOwnershipForm = ({ title, contract }: RenounceOwnershipFormProps) => {
  const { isOwner } = useOwnerCall({ contract })

  if (isOwner === 'loading') return (
    <Skeleton width={'100%'} height={40} />
  )

  return (
    <StackItem title={title} data={<RenounceOwnerButton disabled={!isOwner} />} />
  );


}

export default memo(RenounceOwnershipForm);