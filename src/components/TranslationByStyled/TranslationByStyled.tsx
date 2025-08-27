import { Box, Typography, TypographyProps } from '@mui/material';
import { FC, memo } from 'react'
import { Trans } from 'react-i18next';
type TranslationByStyledProps = TypographyProps & {
  message: string,
  components?: any,
  values?: any
}

const d_components = {
  bold: <strong />,
  br: <br />,
  primary: <Box component={'span'} sx={{ color: 'primary.main' }} />,
  
}

const TranslationByStyled: FC<TranslationByStyledProps> = ({ message, components, values, ...props }: TranslationByStyledProps) => {

  return (
    <Typography {...props}>
      <Trans i18nKey={message} values={values} components={{ ...d_components, ...components }} />
    </Typography>
  );

}

export default memo(TranslationByStyled);