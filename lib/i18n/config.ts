import en from './translations/en.json';
import ar from './translations/ar.json';

export type Locale = 'en' | 'ar';

export const translations = {
  en,
  ar,
};

export const locales: Locale[] = ['en', 'ar'];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
};

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl',
};
