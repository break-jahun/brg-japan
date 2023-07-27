import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import japanese from '@/translation/jp.json';

export const resources = {
  jp: {
    translation: japanese,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'jp',
  fallbackLng: 'jp',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  react: {
    transSupportBasicHtmlNodes: true,
  },
});

export default i18n;
