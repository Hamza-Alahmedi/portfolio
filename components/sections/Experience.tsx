"use client";

import { EXPERIENCE } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function Experience() {
  const { t, locale } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
            Professional Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
            {t.experience.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {EXPERIENCE.map((exp) => {
              const title =
                locale === "ar" ? exp.title_ar || exp.title : exp.title;
              const company =
                locale === "ar" ? exp.company_ar || exp.company : exp.company;
              const description =
                locale === "ar"
                  ? exp.description_ar || exp.description
                  : exp.description;

              return (
                <div
                  key={exp.id}
                  className={cn(
                    "relative",
                    locale === "ar" ? "pr-8 md:pr-0" : "pl-8 md:pl-0",
                  )}
                >
                  {/* Timeline Line */}
                  <div
                    className={cn(
                      "absolute top-0 bottom-0 w-px bg-blue-600/30 hidden md:block",
                      locale === "ar" ? "right-0" : "left-0",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute top-6 w-2 h-2 rounded-full bg-blue-600 hidden md:block",
                      locale === "ar" ? "right-[-4px]" : "left-[-4px]",
                    )}
                  />

                  {/* Mobile Timeline (simplified) */}
                  <div
                    className={cn(
                      "absolute top-0 bottom-0 w-px bg-blue-600/30 md:hidden",
                      locale === "ar" ? "right-0" : "left-0",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute top-6 w-2 h-2 rounded-full bg-blue-600 md:hidden",
                      locale === "ar" ? "right-[-4px]" : "left-[-4px]",
                    )}
                  />

                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {company}
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 w-fit whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
