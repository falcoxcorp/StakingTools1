import { memo } from 'react'
import { Content } from './styled';
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next';
import { SOCIALS } from './mockup';
import SocialItem from './SocialItem';
import { Stack } from '@mui/material';

const FooterSocialNetworks = () => {
  const { t } = useTranslation('footer')
  return (
    <Content flexGrow={1} width={'100%'}>
      <Typography variant="h4" fontWeight={'bold'} color={'primary'} textTransform={'uppercase'}>{t('social_networks.title')}</Typography>
      <Stack direction={'row'} flexWrap={'wrap'} gap={2}>
        {
          SOCIALS?.map((social) => (
            <SocialItem key={social?.network} social={social} />
          ))
        }
      </Stack>
    </Content>
  );

}

export default memo(FooterSocialNetworks);