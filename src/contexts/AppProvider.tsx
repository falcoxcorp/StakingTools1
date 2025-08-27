import { Toaster } from 'react-hot-toast';
import QueryProvider from './QueryContext';
import { ChildrenProps } from '../common/types/common';
import { toasterOptions } from '../settings/toasterOptions';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSettings } from './SettingsProvider';
import { CookiesProvider } from "react-cookie";
import { TokenProvider } from '../modules/AdministrationModule/context/TokenContext';

const AppContent = ({ children }: ChildrenProps) => {
  return (
    <>
      {children}
      <Toaster toastOptions={toasterOptions} />
      <CssBaseline />
    </>
  );
};

export const AppProvider = ({ children }: ChildrenProps) => {
  const { theme } = useSettings()

  return (
    <QueryProvider>
      <ThemeProvider theme={theme}>
        <CookiesProvider>
          <TokenProvider>
            <AppContent>{children}</AppContent>
          </TokenProvider>
        </CookiesProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};
