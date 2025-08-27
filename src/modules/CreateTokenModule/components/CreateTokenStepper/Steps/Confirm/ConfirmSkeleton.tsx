import { Stack, Skeleton, Divider } from '@mui/material';
import { memo } from 'react'

const ConfirmSkeleton = () => {

  return (
    <Stack
      divider={<Divider flexItem />}
      gap={2} sx={{
        padding: 2,
        border: (theme) => `1px solid ${theme.palette.divider}`
      }} >
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
        <Skeleton variant='text' sx={{ width: { xs: '100%', md: 150 } }} />
        <Skeleton variant='rectangular' height={40} sx={{ width: { xs: '100%', md: 150 } }} />
      </Stack>

      <Stack gap={1}>
        {
          Array(4).fill('').map(item => (
            <Stack key={item} direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} alignItems={'center'}>
              <Skeleton height={20} variant='text' sx={{ width: { xs: '100%', md: '40%' } }} />
              <Skeleton variant='rectangular' height={25} sx={{
                width: { xs: '100', md: '50%' }
              }} />
            </Stack>
          ))
        }
      </Stack>

      <Stack gap={1}>
        {
          Array(10).fill('').map(item => (
            <Stack key={item} direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} alignItems={'center'}>
              <Skeleton height={20} variant='text' sx={{ width: { xs: '100%', md: '40%' } }} />
              <Skeleton variant='rectangular' height={25} sx={{
                width: { xs: '100', md: '50%' }
              }} />
            </Stack>
          ))
        }
      </Stack>



    </Stack>
  );

}

export default memo(ConfirmSkeleton);