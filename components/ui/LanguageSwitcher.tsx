'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Button } from './Button';
import { localeNames } from '@/lib/i18n/config';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
      className="min-w-[4rem] font-medium"
      aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
    >
      {locale === 'en' ? 'العربية' : 'English'}
    </Button>
  );
}
