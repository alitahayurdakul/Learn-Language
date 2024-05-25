import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import EnTranslation from '@/locales/en/translation.json';
import TrTranslation from '@/locales/tr/translation.json';

export const resources = {
    en: {
        translation: EnTranslation
    },
    tr: {
        translation: TrTranslation
    }
}

i18next
    .use(initReactI18next)
    .init({
        debug: false,
        lng: 'en',
        compatibilityJSON: 'v3',
        fallbackLng: 'en',
        resources,
        react: {
            useSuspense: false
        }
    });

export default i18next;