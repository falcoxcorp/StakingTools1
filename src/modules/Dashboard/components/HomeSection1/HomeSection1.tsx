import { memo } from 'react'
import { BoxBorder, Section } from './styled';
import { Grid } from '@mui/material';
import TranslationByStyled from '../../../../components/TranslationByStyled/TranslationByStyled';
import { PipiIcon } from '../../../../components/IconSVG/PipiIcon';


const components = {
  withBorder: <BoxBorder component={'span'} />
}

const HomeSection1 = () => {

  return (
    <Section>
      <Grid container spacing={{ xs: 3, md: 4 }}>
        <Grid item xs={12} md={8} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
          <TranslationByStyled message='home:section_1:title' lineHeight={1.5} fontWeight={600} fontSize={{ xs: 40, md: 80 }} />
          <TranslationByStyled message='home:section_1:subtitle' lineHeight={1.2} fontWeight={800} fontSize={{ xs: 25, md: 40 }} components={components} />
        </Grid>
        <Grid item xs={12} md={4} display={'flex'} alignItems={'center'} justifyContent={'center'} >
          <PipiIcon sx={{
            fontSize: {
              xs: 200, md: 300
            }
          }} />
        </Grid>
      </Grid>
    </Section>
  );

}

export default memo(HomeSection1);