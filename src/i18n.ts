import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './locales/ar.json';
import tr from './locales/tr.json';

const resources = {
  ar: {
    translation: ar,
  },
  tr: {
    translation: tr,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang') || 'ar', // default language
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
