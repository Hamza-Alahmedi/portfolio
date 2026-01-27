"use client";

import { EDUCATION } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Education() {
  const { t, locale } = useLanguage();

  const degree =
    locale === "ar"
      ? EDUCATION.degree_ar || EDUCATION.degree
      : EDUCATION.degree;
  const institution =
    locale === "ar"
      ? EDUCATION.institution_ar || EDUCATION.institution
      : EDUCATION.institution;
  const status =
    locale === "ar"
      ? EDUCATION.status_ar || EDUCATION.status
      : EDUCATION.status;

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
            Education
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
            {t.education.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.education.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>

            <div className="text-center md:text-start flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {degree}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                {institution}
              </p>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <span>{EDUCATION.period}</span>
                <span className="hidden md:inline">•</span>
                <span>{status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
