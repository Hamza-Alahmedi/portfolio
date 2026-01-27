"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Hamza Alahmedi. {t.footer.rights}
        </p>
        <p className="text-sm">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
