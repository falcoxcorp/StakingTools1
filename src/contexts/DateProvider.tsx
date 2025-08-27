import { memo } from 'react';
import enLocale from 'date-fns/locale/en-US';
import esLocale from 'date-fns/locale/es';
import { ChildrenProps } from '../common/types/common';
import { useTranslation } from 'react-i18next';
import { DateSettingsProvider } from './DateSettingsContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

type DateProviderProps = ChildrenProps;

export const localeMap = {
  es: esLocale,
  en: enLocale,
};
const DateProvider = ({ children }: DateProviderProps) => {
  const { i18n } = useTranslation('locales');
  const locale = i18n?.language;
  return (
    <DateSettingsProvider localeMap={localeMap} locale={locale}>
      <LocalizationProvider dateAdapter={AdapterDateFns as any}>
        {children}
      </LocalizationProvider>
    </DateSettingsProvider>
  );
};

export default memo(DateProvider);
