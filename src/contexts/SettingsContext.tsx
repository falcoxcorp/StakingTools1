import { createContext } from 'react';
import { THEMES, ThemeSettingType } from '../common';

//Valores que expondrá el contexto
interface SettingsContextProps {
  settings: ThemeSettingType;
  saveSettings: (settings: ThemeSettingType) => void;
}

//valores iniciales del Setting
export const initialSettings: ThemeSettingType = {
  theme: THEMES.DARK,
  responsiveFontSizes: true,
};

export const SettingsContext = createContext<SettingsContextProps>({
  settings: initialSettings,
  saveSettings: (settings: ThemeSettingType) => settings
}); // component props type
