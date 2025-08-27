import { Box, Card, Grid, Skeleton, Stack } from '@mui/material';
import { memo } from 'react'


const StakingPoolContentSkeleton = () => {

  return (
    <Card sx={{
      borderRadius: 3,
      paddingBottom: 2,
      position: 'relative',
      padding: '8px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2.5
    }}>
      <Stack gap={1} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Box flex={1}>
          <Skeleton variant='text' width={'60%'} sx={{ fontSize: 16 }} />
          <Skeleton variant='text' width={'40%'} sx={{ fontSize: 12 }} />
        </Box>
        <Skeleton variant='circular' sx={{ height: { xs: 20, md: 30 }, width: { xs: 20, md: 30 } }} />
      </Stack>
      <Stack gap={1} sx={{
        '.MuiSkeleton-root': {
          borderRadius: 1
        }
      }}>
        <Skeleton variant='rectangular' sx={{ width: '100%', height: 50 }} />
        <Skeleton variant='rectangular' sx={{ width: '100%', height: 40 }} />
        <Skeleton variant='rectangular' sx={{ width: '100%', height: 30 }} />
      </Stack>
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <Skeleton variant='text' sx={{ maxWidth: 200, width: '100%' }} />
        <Skeleton variant='circular' sx={{ height: { xs: 20 }, width: { xs: 20 } }} />
      </Stack>
      <Stack flex={1} gap={0.1}>
        <Skeleton variant='text' sx={{ width: '100%', height: 12 }} />
        <Skeleton variant='text' sx={{ width: '80%', height: 12 }} />
        <Skeleton variant='text' sx={{ width: '50%', height: 12 }} />
      </Stack>

    </Card >
  );

}

export default memo(StakingPoolContentSkeleton);



export const StakingPoolContentSkeletonGrid = () => {

  return (
    <Grid container spacing={{ xs: 2 }}>
      {
        Array(6).fill('').map((sk) => (
          <Grid item xs={12} md={6} lg={4} key={sk}>
            <StakingPoolContentSkeleton />
          </Grid>
        ))
      }
    </Grid>
  )
} 