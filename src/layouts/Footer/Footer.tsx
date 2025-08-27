import { memo } from 'react'
import { FooterContent } from './styled';
import { FooterSummary } from './FooterSummary';
import { FooterSocialNetworks } from './FooterSocialNetworks';
import { Divider, useMediaQuery, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme()
  const resp = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <FooterContent
      flexDirection={{ xs: 'column', md: 'row' }} gap={{ xs: 4, md: 8 }}
      divider={<Divider orientation={resp ? "horizontal" : "vertical"} flexItem />}
      spacing={2}
      useFlexGap
    >
      <FooterSummary />
      <FooterSocialNetworks />
      {/* <FooterSwapPipi /> */}

    </FooterContent>
  );

}

export default memo(Footer);