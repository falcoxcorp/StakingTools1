import { Stack, Typography } from '@mui/material';
import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import { Image, NoResult } from './styled';


import noResult from '../../assets/no-result.svg'


const ErrorResult = () => {
  const { t } = useTranslation('common')
  return (
    <NoResult>
      <Image src={noResult} />
      <Stack gap={1}>
        <Typography variant="h3" fontWeight={800}>{t('noResult.title')}</Typography>
        <Typography variant="h2">{t('noResult.description')}</Typography>
      </Stack>
    </NoResult>
  );

}

export default memo(ErrorResult);