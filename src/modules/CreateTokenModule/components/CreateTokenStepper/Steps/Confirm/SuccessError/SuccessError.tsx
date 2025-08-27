import { memo, useCallback } from 'react'
import { Button, Stack, Typography } from '@mui/material';
import { Section } from './styled';
import { useTranslation } from 'react-i18next';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
type SuccessErrorProps = {
  reset: () => void
  title?: string
  description?: string
  action?: string

}

const SuccessError = ({ reset,action,description,title }: SuccessErrorProps) => {
  const { t } = useTranslation('erc20')
  const onReset = useCallback(() => {
    reset()
  }, [reset])

  return (
    <Section>
      <ErrorOutlineIcon color={'error'}  sx={{ fontSize: 100 }} />
      <Typography variant="h1" color={'error'}  textAlign={'center'} fontWeight={600}>{t(title ?? 'successError.title')}</Typography>
      <Typography variant="h1" color={'error'} textAlign={'center'} >{t(description ?? 'successError.description')}</Typography>

      <Stack gap={1} sx={{
        flexDirection: {
          xs: 'column',
          md: 'row'
        }
      }}>
        <Button variant='outlined' color='error' startIcon={<ArrowBackOutlinedIcon />} onClick={onReset}> {t(action ?? 'successError.buttons.createNewToken')}</Button>
      </Stack>

    </Section>
  );

}

export default memo(SuccessError);