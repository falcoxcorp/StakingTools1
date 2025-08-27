import { memo } from 'react'
import { Content } from './styled';
import { CreateTokenChipList } from '.';

const CreateTokenSection = () => {

  return (
    <Content>
      <CreateTokenChipList/>
    </Content>
  );

}

export default memo(CreateTokenSection);