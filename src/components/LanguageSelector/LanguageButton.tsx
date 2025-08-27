import { Button } from '@mui/material';
import { memo } from 'react'
import TranslateIcon from '@mui/icons-material/Translate';
import LanguageSelector from '.';

const LanguageButton = () => {

  return (
    <LanguageSelector
      component={Button}
      mini
      compProps={{ variant: 'text'}}
      icon={<TranslateIcon fontSize={'small'} sx={{ mt: '-2px', mr: '4px' }} />}
    />
  );

}

export default memo(LanguageButton);