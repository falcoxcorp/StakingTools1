import { Box, Stack } from '@mui/material';
import { memo } from 'react'
import './styled.css'


const Loader = () => {

  return (
    <Stack height={'100vh'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
      <Box className='spinner'/>
    </Stack>
  );

}

export default memo(Loader);


