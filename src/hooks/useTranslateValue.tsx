import { get, isObject } from 'lodash';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export type Field = {
  es: string;
  en: string;
};

const translateValue = (value?: Field, locale?: string) => {
  if (isObject(value)) {
    return locale && (get(value, locale) || '');
  }
  return value || '';
};

export const useTranslateValue = () => {
  const { i18n } = useTranslation('locales');
  const locale = i18n?.language;

  const globalTranslateValue = useCallback(
    (value?: Field) => {
      return translateValue(value, locale);
    },
    [locale],
  );

  return {
    translateValue,
    globalTranslateValue,
    locale,
  };
};
