import { memo } from 'react'
import { ContainerPaper, Section } from './styled';
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next';
import { Avatar, styled } from '@mui/material';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const SecurityAvatar = styled(Avatar)(({ theme }) => ({
  width: 80, height: 80, color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: 'transparent',
  marginLeft: 'auto',
  marginRight: 'auto'
}))

const SecurityPoliticContent = () => {
  const { t } = useTranslation('securityPolitic')
  return (
    <ContainerPaper>
      <SecurityAvatar>
        <SecurityOutlinedIcon fontSize='large' />
      </SecurityAvatar>
      <Typography variant='h4' textAlign={'center'} mb={2} fontWeight={800} color={'primary'}>{t('title')}</Typography>

      <Section>
        <Typography variant="h2" fontWeight={800}>{t('section_1.title')}</Typography>
        <Typography variant="body1">{t('section_1.description_1')}</Typography>
      </Section>

      <Section>
        <Typography variant="h2" fontWeight={800}>{t('section_2.title')}</Typography>
        <Typography variant="body1">{t('section_2.description_1')}</Typography>
      </Section>

      <Section>
        <Typography variant="h2" fontWeight={800}>{t('section_3.title')}</Typography>
        <Typography variant="body1">{t('section_3.description_1')}</Typography>
      </Section>

      <Section>
        <Typography variant="h2" fontWeight={800}>{t('section_4.title')}</Typography>
        <Typography variant="body1">{t('section_4.description_1')}</Typography>
        <Typography variant="body1">{t('section_4.description_2')}</Typography>
      </Section>

      <Section>
        <Typography variant="h2" fontWeight={800}>{t('section_5.title')}</Typography>
        <Typography variant="body1">{t('section_5.description_1')}</Typography>
      </Section>

      <Section>
        <Typography variant="h2" fontWeight={800}>{t('section_6.title')}</Typography>
        <Typography variant="body1">{t('section_6.description_1')}</Typography>
      </Section>

      <Section>
        <Typography variant="h2" fontWeight={800}>{t('section_7.title')}</Typography>
        <Typography variant="body1">{t('section_7.description_1')}</Typography>
        <Typography variant="body1">{t('section_7.description_2')}</Typography>
        <Typography variant="body1">{t('section_7.description_3')}</Typography>
      </Section>

      <Section>
        <Typography variant="h2" fontWeight={800}>{t('section_8.title')}</Typography>
        <Typography variant="body1">{t('section_8.description_1')}</Typography>
      </Section>


    </ContainerPaper>
  );

}

export default memo(SecurityPoliticContent);