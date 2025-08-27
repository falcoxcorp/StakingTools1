import { memo, useCallback } from 'react'
import { Button, Stack, Typography } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Section } from './styled';
import { useTranslation } from 'react-i18next';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import { CustomNavLink } from '../../../../../../../layouts/Menu/NavLinkListItem';

type SuccessOKProps = {
  reset: () => void
}

const SuccessOK = ({ reset }: SuccessOKProps) => {
  const { t } = useTranslation('erc20')
  const onReset = useCallback(() => {
    reset()
  }, [reset])

  return (
    <Section>
      <CheckCircleOutlineOutlinedIcon color={'primary'} sx={{ fontSize: 100 }} />
      <Typography variant="h1" textAlign={'center'} color={'primary'} fontWeight={600}>{t('successOk.title')}</Typography>
      <Typography variant="h1" textAlign={'center'} color={'primary'}>{t('successOk.description')}</Typography>

      <Stack gap={1} sx={{
        flexDirection: {
          xs: 'column',
          md: 'row'
        }
      }}>
        <CustomNavLink to={'/tokens_list'}>
          <Button variant='outlined' startIcon={<ChecklistOutlinedIcon />}>{t('successOk.buttons.viewTokens')}</Button>
        </CustomNavLink>
        <Button variant='outlined' startIcon={<ArrowBackOutlinedIcon />} onClick={onReset}> {t('successOk.buttons.createNewToken')}</Button>
      </Stack>

    </Section>
  );

}

export default memo(SuccessOK);