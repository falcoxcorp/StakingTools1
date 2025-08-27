import { memo, useCallback } from 'react'
import { Button, Stack, Typography } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Section } from './styled';
import { useTranslation } from 'react-i18next';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { STAKING_CONTRACT_LIST_KEY } from '../../constants/querys';

type StakingSuccessOKProps = {
  reset: () => void
}

const StakingSuccessOK = ({ reset }: StakingSuccessOKProps) => {
  const { t } = useTranslation(['erc20', 'staking'])
  const navigate = useNavigate()
  const queryClient = useQueryClient()


  const onReset = useCallback(() => {
    reset()
  }, [reset])

  const onLink = useCallback(() => {
    navigate('/staking/pools')
    queryClient.invalidateQueries([STAKING_CONTRACT_LIST_KEY])
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
        <Button variant='outlined' startIcon={<ChecklistOutlinedIcon />} onClick={onLink}>{t('staking:success.viewStaking')}</Button>
        <Button variant='outlined' startIcon={<ArrowBackOutlinedIcon />} onClick={onReset}> {t('staking:success.createNewStaking')}</Button>
      </Stack>

    </Section>
  );

}

export default memo(StakingSuccessOK);