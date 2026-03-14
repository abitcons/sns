// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        fallbackLng: 'en',
        supportedLngs: ['en', 'ar'],
        defaultNS: 'common', // Set the default namespace here
        ns: ['common', 'Hero', 'Home'],  // Add 'Home' here if it's used
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;
