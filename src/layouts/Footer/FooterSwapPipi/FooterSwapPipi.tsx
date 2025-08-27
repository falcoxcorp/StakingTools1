import { Button, Stack, Typography } from '@mui/material';
import { memo } from 'react'
import { useTranslation } from 'react-i18next';

const FooterSwapPipi = () => {
  const { t } = useTranslation('footer')
  return (
    <Stack gap={1} alignItems={'start'} flexGrow={1} width={'100%'}>
      <Typography variant="h4" fontWeight={800} color={'primary'}>{t('swap.title')}</Typography>
      <Typography variant="body1">{t('swap.description')}</Typography>
      <Button variant='contained' href={import.meta.env.VITE_APP_PIPI_SWAP || 'https://icecreamswap.com'} target='_blank'>
        {t('swap.action')}
      </Button>
    </Stack>
  );

}

export default memo(FooterSwapPipi);