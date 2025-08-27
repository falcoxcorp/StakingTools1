import { memo } from 'react'
import { Stack, Typography, StackProps } from '@mui/material';

type StackItemProps = StackProps & {
  data: any,
  title: Element | string
  // justifyContent?: 'space-between' | 'left'
}

const StackItem = ({ data, title, justifyContent = 'space-between', ...props }: StackItemProps) => {

  return (
    <Stack {...props} flexDirection={{ xs: 'row' }} flexWrap={'wrap'} justifyContent={justifyContent} alignItems={'center'} gap={{ xs: 1, md: 2 }}>
      <Typography>{title}</Typography>
      <Typography sx={{ wordBreak: 'break-word' }}>{data}</Typography>
    </Stack>
  );

}

export default memo(StackItem);