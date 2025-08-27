import { Box, Divider } from '@mui/material';
import { memo } from 'react'
import { FormCheckBoxField } from '../../../../components/FormFields';
import TranslationByStyled from '../../../../components/TranslationByStyled/TranslationByStyled';
import { Link } from 'react-router-dom';


type SecurityPoliticCheckBoxProps = {
  name: string
}

const components = {
  route: <Link to='/security_politic' style={{
    color: '#BE8A05'
  }} />
}

const SecurityPoliticCheckBox = ({ name }: SecurityPoliticCheckBoxProps) => {
  return (
    <Box>
      <Divider flexItem sx={{ mb: 1 }} />
      <FormCheckBoxField name={name} label={<TranslationByStyled ml={1} message='securityPolitic:verify' components={components} />} />
    </Box>
  );

}

export default memo(SecurityPoliticCheckBox);