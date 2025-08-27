import { Theme } from '@mui/material/styles';

export const MuiDialog = {
  styleOverrides: {
    root: ({ }: { theme: Theme; ownerState: any }) => ({
      '& .MuiDialog-paper': {
        position: 'relative',
        borderRadius: '32px',
        boxShadow: 0,
        padding: '24px 24px 32px',
      },
      '& .MuiBackdrop-root': {
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
    }),
  },
};
export const MuiDialogTitle = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme; ownerState: any }) => ({
      padding: '8px 0',
      marginBottom: 24,
      fontWeight: 800,
      fontSize: 22,
      color: theme.palette.primary.main,
      borderBottom: `1px solid ${theme.palette.divider}`
    }),
  },
};

export const MuiDialogContent = {
  styleOverrides: {
    root: ({ }: { theme: Theme; ownerState: any }) => ({
      padding: '8px 0',
    }),
  },
};
export const MuiDialogActions = {
  styleOverrides: {
    root: ({ }: { theme: Theme; ownerState: any }) => ({
      padding: '32px 0 8px',
    }),
  },
};
