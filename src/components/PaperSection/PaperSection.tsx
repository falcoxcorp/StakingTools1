import { memo, ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';
import { ChildrenProps } from '../../common/types';

const PaperSection = ({
    title,
    titleMb = 2,
    mt,
    children,
    extra
}: ChildrenProps & { title: ReactNode; titleMb?: number; mt?: number; extra?: any }) => {
    return (
        <Stack sx={{ marginBottom: 2, padding: { xs: 1, md: 2 }, mt, border:(theme) => `1px solid ${theme.palette.divider}`, borderRadius:1 }}>
            <Stack alignItems={'end'} columnGap={1} mb={titleMb}>
                <Typography variant={'h2'} width={'100%'} fontWeight={600}>
                    {title}
                </Typography>
                {extra}
            </Stack>
            {children}
        </Stack>
    );
};

export default memo(PaperSection);
