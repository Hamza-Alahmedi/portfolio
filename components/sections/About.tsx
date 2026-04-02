"use client";

import { PERSONAL_INFO, LANGUAGES } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function About() {
  const { t, locale } = useLanguage();

  const langMap: Record<string, string> = {
    Arabic: "العربية",
    English: "الإنجليزية",
    Turkish: "التركية",
  };

  const displayLocation =
    locale === "ar" ? "سوريا / تركيا" : PERSONAL_INFO.location;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
            About me
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
            {t.about.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t.about.subtitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {t.about.bio}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.about.bio2}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.about.location}
                  </p>
                  <p
                    className="font-medium text-gray-900 dark:text-white"
                    dir="ltr"
                  >
                    {displayLocation}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.about.status}
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {t.about.statusValue}
                  </p>
                </div>
              </div>

              {/* Spoken Languages Section */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>🌍</span> {t.about.languages}
                </h4>
                <div className="space-y-4">
                  {LANGUAGES.map((language) => (
                    <div key={language.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {locale === "ar" && langMap[language.name]
                            ? langMap[language.name]
                            : language.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {language.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                          style={{ width: `${language.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <svg
                width="320"
                height="320"
                viewBox="0 0 160 160"
                xmlns="http://www.w3.org/2000/svg"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl"
              >
                <defs>
                  <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="78" fill="#0f0f1a" />
                <circle
                  cx="80"
                  cy="80"
                  r="62"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="50"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <text
                  x="80"
                  y="55"
                  textAnchor="middle"
                  fontFamily="'Courier New', monospace"
                  fontSize="12"
                  fill="#3b82f6"
                  opacity="0.8"
                >
                  &lt;dev /&gt;
                </text>
                <text
                  x="80"
                  y="97"
                  textAnchor="middle"
                  fontFamily="Georgia, serif"
                  fontSize="60"
                  fontWeight="700"
                  fill="url(#g3)"
                  letterSpacing="-1"
                >
                  H
                </text>
                <text
                  x="80"
                  y="120"
                  textAnchor="middle"
                  fontFamily="'Courier New', monospace"
                  fontSize="10"
                  fill="#8b5cf6"
                  opacity="0.7"
                >
                  full stack
                </text>
              </svg>
              {/* <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-medium">
                  {locale === "ar" ? "خريج 2026" : "Graduating 2026"}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
