import { Link, Stack, Typography, useTheme } from '@mui/material';
import { memo } from 'react'
import { useTranslation } from 'react-i18next';

import { SocialIcon } from 'react-social-icons'

type SocialItemProps = {
  social: {
    network: string,
    link: string
  }
}

const SocialItem = ({ social }: SocialItemProps) => {
  const { t } = useTranslation('footer')
  const theme = useTheme()
  return (
    <Link href={social?.link} target='_blank' underline='hover'>
      <Stack direction={'row'} gap={1} alignItems={'center'} >
        <SocialIcon
          network={social?.network}
          bgColor={theme.palette.primary.main}
        />
        <Typography variant="h1">{t(`social_networks.${social?.network}`)}</Typography>
      </Stack>
    </Link>
  );

}

export default memo(SocialItem);