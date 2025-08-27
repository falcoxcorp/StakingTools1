import { Typography, TypographyProps } from '@mui/material';
import { memo } from 'react';

type PercentValueProps = TypographyProps & {
  value: number | string;
  symbol?: string;
};

const PercentValue = ({ value, symbol = '%', ...props }: PercentValueProps) => {
  return <Typography {...props}>{`${value} ${symbol}`}</Typography>;
};

export default memo(PercentValue);
