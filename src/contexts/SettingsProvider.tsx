import { ReactNode, useCallback, useContext, useMemo } from 'react';
import { Theme, createTheme, responsiveFontSizes } from '@mui/material';
import { esES, enUS } from '@mui/material/locale';
import useLocalStorage from '../common/hooks/useLocalStorage';
import { THEME_SETTING } from '../settings/theme';
import { useTranslateValue } from '../hooks/useTranslateValue';
import { SettingsContext, initialSettings } from './SettingsContext';
import { THEMES, ThemeSettingType } from '../common';



type SettingsProviderProps = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const { data: settings, storeData: saveSettings } = useLocalStorage('settings', initialSettings);
  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

const localesMap: { [key: string]: any } = {
  es: esES,
  en: enUS,
};

export const useSettings = () => {
  const { settings, saveSettings } = useContext<any>(SettingsContext);
  const { locale } = useTranslateValue();

  const toggleTheme = useCallback(() => {
    settings.theme = settings.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    saveSettings({ ...settings });
  }, [settings, saveSettings]);

  const setTheme = useCallback((theme: THEMES) => {
    settings.theme = theme
    saveSettings({ ...settings });
  }, [settings, saveSettings]);

  const theme = useMemo(() => {

    //@ts-ignore
    const currentTheme: Theme = THEME_SETTING[settings.theme];

    //locale
    const currentLocale = localesMap[locale] || esES;

    let theme = createTheme(currentTheme, currentLocale);

    theme = responsiveFontSizes(theme);

    // theme shadows
    theme.shadows[1] = '0px 4px 23px rgba(0, 0, 0, 0.12)';
    theme.shadows[2] = '0px 0px 21px 1px rgba(0, 0, 0, 0.07)';
    theme.shadows[3] = '0px 10px 30px rgba(0, 0, 0, 0.1)';
    theme.shadows[4] = '0px 7px 30px 3px rgba(0, 0, 0, 0.05)';
    return theme;
  }, [settings, locale]);

  return {
    settings: settings as ThemeSettingType,
    theme,
    saveSettings,
    toggleTheme,
    setTheme
  };
};

export default SettingsProvider;
