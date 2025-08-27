import { memo } from 'react'
import { TokenListContent } from '../components/TokenListContent';
import { Box } from '@mui/material';



const TokenListContainer = () => {

  return (
    <Box>
      <TokenListContent />
    </Box>
  );

}

export default memo(TokenListContainer);