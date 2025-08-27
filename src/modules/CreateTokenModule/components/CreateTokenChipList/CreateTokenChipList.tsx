import { Grid } from '@mui/material';
import { memo } from 'react'
import { NavLinkListItem } from '../../../../layouts/Menu';
import { useTranslation } from 'react-i18next';
import { CREATE_TOKEN_LINKS } from '../../../../routes/links/create-token.link';

const CreateTokenChipList = () => {
  const { t } = useTranslation()
  
  return (
    <Grid container spacing={{ xs: 1, md: 2 }}  height={'100%'}>
      {
        CREATE_TOKEN_LINKS?.map(link => (
          <Grid item xs={12} key={link?.title}>
            <NavLinkListItem
              {...link}
              title={t(link?.title)}
            />
          </Grid>
        )
        )
      }
    </Grid>
  );

}

export default memo(CreateTokenChipList);