import { memo } from 'react'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined'; 
import { Content, Logo } from './styled';
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next';
import { Button, Stack } from '@mui/material';

const FooterSummary = () => {
  const { t } = useTranslation('footer')

  return (
    <Content flexGrow={1} width={'100%'}>
      <Stack gap={1} alignItems={'center'}>
        <Logo src={'/logo.webp'}>
          <PhotoOutlinedIcon />
        </Logo>
        <Typography variant="h4" color="primary" fontWeight={800}>STAKING TOOLS</Typography>
      </Stack>
      <Typography variant="body1">{t('title')}</Typography>
      <Button variant='contained' href='https://icecreamswap.com/swap?outputCurrency=0x3034802fc4C9A278D0886eD77fd3F79fd789c898'>
        {t('buyTokens')}
      </Button>
    </Content >
  );

}

export default memo(FooterSummary);