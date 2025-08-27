import { memo } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { Trans } from 'react-i18next';
import { Box } from '@mui/material';

const defaultComponents = {
  primary: <Box component={'span'} sx={{ color: 'primary.main' }} />,
  error: <Box component={'span'} sx={{ color: 'error.main' }} />,
  secondary: <Box component={'span'} sx={{ color: 'formLabel' }} />,
  white: <Box component={'span'} sx={{ color: 'background.paper' }} />,
  bold: <Box component={'strong'} />,
};

export type TransTypographyProps = {
  message: string;
  values?: object;
  components?: object;
};

const TransTypography = ({
  message,
  values = {},
  components = {},
  ...props
}: TypographyProps & TransTypographyProps) => {
  return (
    <Typography {...props}>
      <Trans i18nKey={message} components={{ ...defaultComponents, ...components }} values={values} />
    </Typography>
  );
};

export default memo(TransTypography);
