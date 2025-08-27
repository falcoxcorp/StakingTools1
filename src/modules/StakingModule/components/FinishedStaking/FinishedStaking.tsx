import { Box, Typography } from '@mui/material';
import { memo } from 'react'
import { useTranslation } from 'react-i18next';

const FinishedStaking = () => {
  const { t } = useTranslation('staking')
  return (
    <Box sx={(theme) => ({
      zIndex: 10,
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      margin: 0,
      padding: '8px 0px',
      position: 'absolute',
      right: '0px',
      top: '0px',
      textAlign: 'center',
      transform: 'translateX(30%) translateY(0%) rotate(45deg)',
      transformOrigin: 'left top',
      width: '96px',
      ":before, :after": {
        backgroundColor: theme.palette.primary.main,
        content: '""',
        height: '100%',
        margin: '0px -1px',
        position: 'absolute',
        top: '0px',
        width: '100%',
        zIndex: -1
      },
      ":after": {
        left: '100%'
      },
      ":before": {
        right: '100%'
      }
    })
    }>
      <Typography variant='h2' textTransform={'uppercase'} fontWeight={600}>{t('finished')}</Typography>
    </Box>
  );

}

export default memo(FinishedStaking);