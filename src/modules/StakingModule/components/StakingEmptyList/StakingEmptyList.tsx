import { memo, useCallback } from 'react'
import Typography from '@mui/material/Typography'
import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Image } from '../../../../components/styled/avatar';
import { useNavigate } from 'react-router-dom';
import empty from '../../../../assets/empty-list.webp'

const StakingEmptyList = () => {
  const { t } = useTranslation('staking')
  const navigate = useNavigate()

  const onCreate = useCallback(() => {
    navigate('/staking/create')
  }, [navigate])

  return (
    <Stack sx={{
      padding: {
        xs: '20px 40px',
        md: '40px 80px'
      },
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      border: (theme) => `1px solid ${theme.palette.divider}`,
      borderRadius: '20px'
    }}>
      <Image sx={{ height: { xs: 100, md: 150 }, width: { xs: 100, md: 150 } }} src={empty} />
      <Stack alignItems={'start'} gap={0.5}>
        <Typography variant="subtitle" fontWeight={800} color='primary.main'>{t('noResult.title')}</Typography>
        <Typography variant="h1">{t('noResult.subtitle')}</Typography>
        <Typography variant="body1">{t('noResult.description')}</Typography>
        <Button variant='contained' sx={{ mt: 2 }} onClick={onCreate}>
          {t('noResult.action')}
        </Button>
      </Stack>
    </Stack>
  );

}

export default memo(StakingEmptyList);